import Image from "next/image";
import { fetchCharacters } from '@/app/lib/data';
import styles from '../css/blocks/bonds.module.scss';

export default async function Page() {
  try {
    const characters = await fetchCharacters();

    return (
      <section className={styles.bonds}>
        <div className={`container`}>
          <ul className={styles.bonds__list}>
            {characters.map((character) => (
              <li key={character.id}>
                <Image
                  src={`/images/avatars/${character.avatar}-Photoroom.png`}
                  alt={`Аватар ${character.name}`}
                  width={66}
                  height={68}
                />
                <p>{character.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Ошибка при загрузке персонажей:', error);
    return <div>Произошла ошибка при загрузке данных.</div>;
  }
}