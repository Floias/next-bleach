import { headerLinks } from './lib/data/header-links';
import styles from "./css/blocks/header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className= {styles.header__navigation}>
        <ul className= {styles.header__list}>
          {headerLinks.map((link) => (
            <li key={link.id}>
              <a
              href={link.href}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
