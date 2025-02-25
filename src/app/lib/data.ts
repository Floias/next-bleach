import postgres from 'postgres';
import {
  Character,
} from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchCharacters() {
  try {

    const data = await sql<Character[]>`SELECT * FROM characters`;

    // console.log('Data fetch completed after 3 seconds.');

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch characters data.');
  }
}
