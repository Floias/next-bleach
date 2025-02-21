import bcrypt from 'bcrypt';
import postgres from 'postgres';
import {users, characters} from '../lib/data/characters-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function ensureUuidExtension() {
  const extensionExists = await sql`SELECT 1 FROM pg_extension WHERE extname = 'uuid-ossp'`;
  if (extensionExists.length === 0) {
    await sql`CREATE EXTENSION "uuid-ossp"`;
  }
}

async function seedUsers() {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedCharacters() {
  await sql`
    CREATE TABLE IF NOT EXISTS characters (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      avatar VARCHAR(255) NOT NULL,
      isLimited BOOLEAN DEFAULT FALSE,
      exchange INT[],
      receiving INT[]
    );
  `;

  const insertedCharacters = await Promise.all(
    characters.map(
      (character) => sql`
        INSERT INTO characters (id, name, avatar, isLimited, exchange, receiving)
        VALUES (
          ${character.id},
          ${character.name},
          ${character.avatar},
          ${character.isLimited || false},
          ${character.exchange || null},
          ${character.receiving || null}
        )
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedCharacters;
}

export async function GET() {
  try {
    await ensureUuidExtension();
    const result = await sql.begin((sql) => [
      seedUsers(),
      seedCharacters(),
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
