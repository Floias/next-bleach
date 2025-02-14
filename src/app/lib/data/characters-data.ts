import * as uuid from 'uuid';

const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const characters = [
  {
    id: uuid.v4(),
    name: 'Сосуке Айзен',
    avatar: 'aizen',
  },
  {
    id: uuid.v4(),
    name: 'Сосуке Айзен . Арранкар',
    avatar: 'arrancar-aizen',
  },
  {
    id: uuid.v4(),
    name: 'Сосуке Айзен . 4-слияние',
    avatar: 'hogyoku-aizen',
  },
  {
    id: uuid.v4(),
    name: 'Сосуке Айзен . Белый день',
    avatar: 'white-day-aizen',
  },
  {
    id: uuid.v4(),
    name: 'Сосуке Айзен . Финальное слияние',
    avatar: 'final-fusion-aizen',
  },
  {
    id: uuid.v4(),
    name: 'Сосуке Айзен . Зонт',
    avatar: 'parasol-aizen',
  },
  {
    id: uuid.v4(),
    name: 'Барагган Луизенбарн',
    avatar: 'barragan',
  },
  {
    id: uuid.v4(),
    name: 'Барагган Луизенбарн . Ресуррексион',
    avatar: 'barragan-v2',
  },
  {
    id: uuid.v4(),
    name: 'Бьякуя Кучики . Банкай',
    avatar: 'byakuya',
  },
  {
    id: uuid.v4(),
    name: 'Бьякуя Кучики . Костюм',
    avatar: 'new-year-byakuya',
  },
  {
    id: uuid.v4(),
    name: 'Бьякуя Кучики . Белый день',
    avatar: 'white-day-byakuya',
  },
  {
    id: uuid.v4(),
    name: 'Бьякуя Кучики . Какао',
    avatar: 'coco-byakuya',
  },
  {
    id: uuid.v4(),
    name: 'Бьякуя Кучики . Лис',
    avatar: 'demon-byakuya',
  },
  {
    id: uuid.v4(),
    name: 'Шигекуни Генрюусай Ямамото',
    avatar: 'genryusai',
  },
  {
    id: uuid.v4(),
    name: 'Шигекуни Генрюусай Ямамото . Голый кулак',
    avatar: 'genryusai-v2',
  },
  {
    id: uuid.v4(),
    name: 'Шигекуни Генрюусай Ямамото . Пламенный клинок',
    avatar: 'genryusai-v3',
  },
  {
    id: uuid.v4(),
    name: 'Гин Ичимару . Банкай',
    avatar: 'gin',
  },
  {
    id: uuid.v4(),
    name: 'Гин Ичимару . Арранкар',
    avatar: 'arrancar-gin',
  },
  {
    id: uuid.v4(),
    name: 'Гин Ичимару . Лис',
    avatar: 'fox-gin',
  },
  {
    id: uuid.v4(),
    name: 'Гин Ичимару . Какао',
    avatar: 'coco-gin',
  },
  {
    id: uuid.v4(),
    name: 'Гин Ичимару . Хеллоуин',
    avatar: 'halloween-gin',
  },
  {
    id: uuid.v4(),
    name: 'Гриммджоу',
    avatar: 'grimmjow',
  },
  {
    id: uuid.v4(),
    name: 'Гриммджоу . Ресуррексион',
    avatar: 'grimmjow-v2',
  },
  {
    id: uuid.v4(),
    name: 'Гриммджоу . Зонт',
    avatar: 'parasol-grimmjow',
  },
  {
    id: uuid.v4(),
    name: 'Гриммджоу . Синий Демон',
    avatar: 'ao-oni-grimmjow',
  },
  {
    id: uuid.v4(),
    name: 'Гриммджоу . Хеллоуин',
    avatar: 'halloween-grimmjow',
  },
  {
    id: uuid.v4(),
    name: 'Харрибел',
    avatar: 'halibel',
  },
  {
    id: uuid.v4(),
    name: 'Харрибел . Какао',
    avatar: 'coco-halibel',
  },
  {
    id: uuid.v4(),
    name: 'Харрибел . Лето',
    avatar: 'sammer-halibel',
  },
  {
    id: uuid.v4(),
    name: 'Харрибел . Хеллоуин',
    avatar: 'halloween-halibel',
  },
  {
    id: uuid.v4(),
    name: 'Харрибел . Зонт',
    avatar: 'parasol-halibel',
  },
  {
    id: uuid.v4(),
    name: 'Хиори Саругаки . Рождество',
    avatar: 'xmas-hiyori',
  },
  {
    id: uuid.v4(),
    name: 'Ичиго Куросаки . Закалка',
    avatar: 'dangai-ichigo',
  },
  {
    id: uuid.v4(),
    name: 'Ичиго Куросаки . Пустификация',
    avatar: 'vasto-lorde-ichigo',
  },
  {
    id: uuid.v4(),
    name: 'Ичиго Куросаки . Купальник',
    avatar: 'swimsuit-ichigo',
  },
  {
    id: uuid.v4(),
    name: 'Ичиго Куросаки . Хеллоуин',
    avatar: 'halloween-ichigo',
  },
  {
    id: uuid.v4(),
    name: 'Ичиго Куросаки . Ассимиляция Зангецу',
    avatar: 'mugetsu-ichigo',
  },
  {
    id: uuid.v4(),
    name: 'Ичиго Куросаки . SP1',
    avatar: 'ichigo-sp1',
  },
  {
    id: uuid.v4(),
    name: 'Урюу Исида . Хеллоуин',
    avatar: 'halloween-ishida',
  },
  {
    id: uuid.v4(),
    name: 'Ишшин Куросаки',
    avatar: 'isshin',
  },
  {
    id: uuid.v4(),
    name: 'Джинта Ханакари',
    avatar: 'jinta',
  },
  {
    id: uuid.v4(),
    name: 'Джуширо Укитаке',
    avatar: 'jushiro',
  },
  {
    id: uuid.v4(),
    name: 'Джуширо Укитаке . Зонт',
    avatar: 'parasol-jushiro',
  },
  {
    id: uuid.v4(),
    name: 'Кайен Шиба . Лис',
    avatar: 'demon-kaien',
  },
  {
    id: uuid.v4(),
    name: 'Кенпачи Зараки',
    avatar: 'kenpachi',
  },
  {
    id: uuid.v4(),
    name: 'Кенпачи Зараки . Белый день',
    avatar: 'white-day-kenpachi',
  },
  {
    id: uuid.v4(),
    name: 'Кенпачи Зараки . Полная мощь',
    avatar: 'ansealed-kenpachi',
  },
  {
    id: uuid.v4(),
    name: 'Куукаку Шиба',
    avatar: 'kukaku',
  },
  {
    id: uuid.v4(),
    name: 'Куукаку Шиба . Лето',
    avatar: 'sammer-kukaku',
  },
  {
    id: uuid.v4(),
    name: 'Куукаку Шиба . Восточный океан',
    avatar: 'orient-kukaku',
  },
  {
    id: uuid.v4(),
    name: 'Лилинетт . Хэллоуин',
    avatar: 'halloween-lilinette',
  },
  {
    id: uuid.v4(),
    name: 'Лиза Ядомару . Рождество',
    avatar: 'xmas-lisa',
  },
  {
    id: uuid.v4(),
    name: 'Маюри Куроцучи . Банкай',
    avatar: 'mayuri',
  },
  {
    id: uuid.v4(),
    name: 'Момо Хинамори . Любовь',
    avatar: 'momo',
  },
  {
    id: uuid.v4(),
    name: 'Нанао Исе . Зонт',
    avatar: 'parasol-nanao',
  },
  {
    id: uuid.v4(),
    name: 'Нанао Исе . Какао',
    avatar: 'coco-nanao',
  },
  {
    id: uuid.v4(),
    name: 'Нелл Ту',
    avatar: 'little-nel',
  },
  {
    id: uuid.v4(),
    name: 'Неллиэль Ту Одельшванк',
    avatar: 'adult-nel',
  },
  {
    id: uuid.v4(),
    name: 'Неллиэль Ту Одельшванк . Купальник',
    avatar: 'swimsuit-nel',
  },
  {
    id: uuid.v4(),
    name: 'Неллиэль Ту Одельшванк . Любовь',
    avatar: 'love-nel',
  },
  {
    id: uuid.v4(),
    name: 'Неллиэль Ту Одельшванк . Зонт',
    avatar: 'parasol-nel',
  },
  {
    id: uuid.v4(),
    name: 'Неллиэль Ту Одельшванк . Восточный океан',
    avatar: 'orient-nel',
  },
  {
    id: uuid.v4(),
    name: 'Нему Кроцучи . Купальник',
    avatar: 'swimsuit-nemu',
  },
  {
    id: uuid.v4(),
    name: 'Нему Кроцучи . Рождество',
    avatar: 'xmas-nemu',
  },
  {
    id: uuid.v4(),
    name: 'Нему Кроцучи . Пляж',
    avatar: 'beach-nemu',
  },
  {
    id: uuid.v4(),
    name: 'Нойтра',
    avatar: 'nnoitra',
  },
  {
    id: uuid.v4(),
    name: 'Нойтра . Зонт',
    avatar: 'parasol-nnoitra',
  },
  {
    id: uuid.v4(),
    name: 'Иноуэ Орихиме . Купальник',
    avatar: 'swimsuit-orihime',
  },
  {
    id: uuid.v4(),
    name: 'Иноуэ Орихиме . Хеллоуин',
    avatar: 'halloween-orihime',
  },
  {
    id: uuid.v4(),
    name: 'Иноуэ Орихиме . Лето',
    avatar: 'sammer-orihime',
  },
  {
    id: uuid.v4(),
    name: 'Иноуэ Орихиме . Пляж',
    avatar: 'beach-orihime',
  },
  {
    id: uuid.v4(),
    name: 'Иноуэ Орихиме . Восточный океан',
    avatar: 'orient-orihime',
  },
  {
    id: uuid.v4(),
    name: 'Рангику Мацумото . Купальник',
    avatar: 'swimsuit-rangiku',
  },
  {
    id: uuid.v4(),
    name: 'Рангику Мацумото . Любовь',
    avatar: 'love-rangiku',
  },
  {
    id: uuid.v4(),
    name: 'Рангику Мацумото . Лис',
    avatar: 'demon-rangiku',
  },
  {
    id: uuid.v4(),
    name: 'Рукия Кучики . Новый год',
    avatar: 'new-year-rukia',
  },
  {
    id: uuid.v4(),
    name: 'Рукия Кучики . Тэнгу',
    avatar: 'tengu-rukia',
  },
  {
    id: uuid.v4(),
    name: 'Рукия Кучики . Любовь',
    avatar: 'love-rukia',
  },
  {
    id: uuid.v4(),
    name: 'Рукия Кучики . Горячий песок',
    avatar: 'desert-rukia',
  },
  {
    id: uuid.v4(),
    name: 'Садо . Бразо Дереча де Гиганте',
    avatar: 'sado-v2',
  },
  {
    id: uuid.v4(),
    name: 'Саджин Комамура',
    avatar: 'sajin',
  },
  {
    id: uuid.v4(),
    name: 'Саджин Комамура . Рождество',
    avatar: 'xmas-sajin',
  },
  {
    id: uuid.v4(),
    name: 'Шинджи Хирако',
    avatar: 'shinji',
  },
  {
    id: uuid.v4(),
    name: 'Шинджи Хирако . Капитан',
    avatar: 'captain-shinji',
  },
  {
    id: uuid.v4(),
    name: 'Шинджи Хирако . Механизм',
    avatar: 'demon-shinji',
  },
  {
    id: uuid.v4(),
    name: 'Сюнсуй Кьёраку',
    avatar: 'shunsui',
  },
  {
    id: uuid.v4(),
    name: 'Сюнсуй Кьёраку . Зонт',
    avatar: 'parasol-shunsui',
  },
  {
    id: uuid.v4(),
    name: 'Сой Фон',
    avatar: 'soi-fon',
  },
  {
    id: uuid.v4(),
    name: 'Сой Фон . Лето',
    avatar: 'sammer-soi-fon',
  },
  {
    id: uuid.v4(),
    name: 'Сой Фон . Хеллоуин',
    avatar: 'halloween-soi-fon',
  },
  {
    id: uuid.v4(),
    name: 'Старк',
    avatar: 'starrk',
  },
  {
    id: uuid.v4(),
    name: 'Старк . Какао',
    avatar: 'coco-starrk',
  },
  {
    id: uuid.v4(),
    name: 'Сун-Сун . Зонт',
    avatar: 'parasol-sun-sun',
  },
  {
    id: uuid.v4(),
    name: 'Заельапорро',
    avatar: 'szayelaporro',
  },
  {
    id: uuid.v4(),
    name: 'Заельапорро . Зонт',
    avatar: 'parasol-szayelaporro',
  },
  {
    id: uuid.v4(),
    name: 'Тессай Цукабиши',
    avatar: 'tessai',
  },
  {
    id: uuid.v4(),
    name: 'Канаме Тоусен',
    avatar: 'tosen',
  },
  {
    id: uuid.v4(),
    name: 'Тоширо Хицугая . Банкай',
    avatar: 'toshiro',
  },
  {
    id: uuid.v4(),
    name: 'Тоширо Хицугая',
    avatar: 'toshiro-v2',
  },
  {
    id: uuid.v4(),
    name: 'Тоширо Хицугая . Хеллоуин',
    avatar: 'halloween-toshiro',
  },
  {
    id: uuid.v4(),
    name: 'Тоширо Хицугая . Механизм',
    avatar: 'mecha-toshiro',
  },
  {
    id: uuid.v4(),
    name: 'Улькиорра',
    avatar: 'ulquiorra',
  },
  {
    id: uuid.v4(),
    name: 'Улькиорра . Ресуррексион',
    avatar: 'ulquiorra-v2',
  },
  {
    id: uuid.v4(),
    name: 'Улькиорра . SP',
    avatar: 'ulquiorra-sp',
  },
  {
    id: uuid.v4(),
    name: 'Улькиорра . Механизм',
    avatar: 'mecha-ulquiorra',
  },
  {
    id: uuid.v4(),
    name: 'Рецу Унохана',
    avatar: 'unohana',
  },
  {
    id: uuid.v4(),
    name: 'Рецу Унохана . Купальник',
    avatar: 'swimsuit-unohana',
  },
  {
    id: uuid.v4(),
    name: 'Рецу Унохана . Рождество',
    avatar: 'xmas-unohana',
  },
  {
    id: uuid.v4(),
    name: 'Рецу Унохана . Механизм',
    avatar: 'mecha-unohana',
  },
  {
    id: uuid.v4(),
    name: 'Кисуке Урахара',
    avatar: 'urahara',
  },
  {
    id: uuid.v4(),
    name: 'Кисуке Урахара . Капитан',
    avatar: 'captain-urahara',
  },
  {
    id: uuid.v4(),
    name: 'Кисуке Урахара . Какао',
    avatar: 'coco-urahara',
  },
  {
    id: uuid.v4(),
    name: 'Уруру Цумугия',
    avatar: 'ururu',
  },
  {
    id: uuid.v4(),
    name: 'Белый Ичиго',
    avatar: 'white-ichigo',
  },
  {
    id: uuid.v4(),
    name: 'Белый Ичиго . Пустификация',
    avatar: 'white-ichigo-v2',
  },
  {
    id: uuid.v4(),
    name: 'Белый Ичиго . Какао',
    avatar: 'coco-white-ichigo',
  },
  {
    id: uuid.v4(),
    name: 'Белый Ичиго . Лис',
    avatar: 'demon-white-ichigo',
  },
  {
    id: uuid.v4(),
    name: 'Ячиру Кусаджиши . Хеллоуин',
    avatar: 'halloween-yachiru',
  },
  {
    id: uuid.v4(),
    name: 'Ямми',
    avatar: 'yammy',
  },
  {
    id: uuid.v4(),
    name: 'Йоруичи Шихоин',
    avatar: 'yoruichi',
  },
  {
    id: uuid.v4(),
    name: 'Йоруичи Шихоин . Доспех',
    avatar: 'yoruichi-v2',
  },
  {
    id: uuid.v4(),
    name: 'Йоруичи Шихоин . Купальник',
    avatar: 'swimsuit-yoruichi',
  },
  {
    id: uuid.v4(),
    name: 'Йоруичи Шихоин . Какао',
    avatar: 'coco-yoruichi',
  },
  {
    id: uuid.v4(),
    name: 'Йоруичи Шихоин . Капитан',
    avatar: 'captain-yoruichi',
  },
  {
    id: uuid.v4(),
    name: 'Йоруичи Шихоин . Хеллоуин',
    avatar: 'halloween-yoruichi',
  },
  {
    id: uuid.v4(),
    name: 'Йоруичи Шихоин . Пляж',
    avatar: 'beach-yoruichi',
  },
  {
    id: uuid.v4(),
    name: 'Зоммари',
    avatar: 'zommari',
  }
];

const invoices = [
  {
    customer_id: characters[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: characters[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: characters[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: characters[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: characters[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: characters[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: characters[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: characters[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: characters[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: characters[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: characters[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: characters[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: characters[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

export {users, characters, invoices, revenue}
