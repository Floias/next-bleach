import * as uuid from 'uuid';
import { HeaderLinks } from './definitions';

const headerLinks: HeaderLinks[] = [
  {
    id: uuid.v4(),
    href: "home.html",
    text: "Главная"
  },
  {
    id: uuid.v4(),
    href: "#",
    text: "Узы"
  },
  {
    id: uuid.v4(),
    href: "#",
    text: "В узах"
  },
]

export {headerLinks}