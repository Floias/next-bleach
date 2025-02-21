import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listCharacters() {
  const data = await sql`
    SELECT name, exchange, receiving
    FROM characters
    WHERE isLimited = true;
  `;

  return data;
}

export async function GET() {
  try {
    return Response.json(await listCharacters());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
