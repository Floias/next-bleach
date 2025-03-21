import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function ensureUuidExtension() {
  const extensionExists = await sql`SELECT 1 FROM pg_extension WHERE extname = 'uuid-ossp'`;
  if (extensionExists.length === 0) {
    await sql`CREATE EXTENSION "uuid-ossp"`;
  }
}

async function addCharacter() {
  const newCharacter = {
    name: 'Белый Зангецу',
    avatar: 'white-zangetsu',
    isLimited: false,
    exchange: null,
    receiving: null,
  };

  const insertedCharacter = await sql`
    INSERT INTO characters (name, avatar, isLimited, exchange, receiving)
    VALUES (
      ${newCharacter.name},
      ${newCharacter.avatar},
      ${newCharacter.isLimited},
      ${newCharacter.exchange},
      ${newCharacter.receiving}
    )
    RETURNING *;
  `;

  return insertedCharacter;
}

/* async function deleteCharacterById(id: string) {
  try {
    const deletedCharacter = await sql`
      DELETE FROM characters
      WHERE id = ${id}
      RETURNING *;
    `;

    return deletedCharacter;
  } catch (error) {
    console.error('Error deleting character:', error);
    throw error;
  }
} */

export async function GET() {
  try {
    await ensureUuidExtension();
    await sql.begin(() => [
      addCharacter()
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
