import Image from "next/image";
import {characters} from '../lib/data/characters-data';
import styles from '../css/blocks/calendar.module.scss';
import { calculatesDate } from './calendar';

export default function Page() {
  return (
    <section className={styles.calendar}>
      <div className={`container`}>
        <h2>Календарь вербовок</h2>
        <ul className={styles.calendar__list}>
          {
            characters.map((character) => {
              if (character.isLimited) {
                return (
                  <li key={character.id}>
                    <Image
                      className={styles.calendar__avatar}
                      src={`/images/avatars/${character.avatar}-Photoroom.png`}
                      alt={`Аватар ${character.name}`}
                      width={66}
                      height={68}
                    />
                    <h3>В витринах</h3>
                    {
                      character.receiving.map((day) => {
                      return (<p key={day}>{calculatesDate(day)}</p>)
                      })
                    }
                    <h4>В обмене</h4>
                    {
                      character.exchange.map((day) => {
                      return (<p key={day}>{calculatesDate(day)}</p>)
                      })
                    }
                  </li>
                )
              }
            })
          }

        </ul>
      </div>
    </section>
    
  );
}