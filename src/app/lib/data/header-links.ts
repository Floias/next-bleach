import * as uuid from 'uuid';
import { HeaderLinks } from './definitions';

const headerLinks: HeaderLinks[] = [
  {
    id: uuid.v4(),
    href: "home",
    text: "Главная"
  },
  {
    id: uuid.v4(),
    href: "bond",
    text: "Узы"
  },
  {
    id: uuid.v4(),
    href: "calendar",
    text: "Календарь вербовок"
  },
  {
    id: uuid.v4(),
    href: "posts",
    text: "Статьи"
  },
]

export {headerLinks}