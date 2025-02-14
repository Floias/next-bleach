'use client';

import { usePathname } from 'next/navigation';
import { headerLinks } from './lib/data/header-links';
import styles from './css/blocks/header.module.scss';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={`${styles.header__navigation} container`}>
        <ul className={styles.header__list}>
          {headerLinks.map((link) => {
            const isActive = pathname === link.href || pathname === `/${link.href}`;

            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
