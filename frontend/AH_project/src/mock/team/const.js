import teamMain from '../../assets/img/teamMain.png'

export const IMAGES_COACH = ['/coach.png'];

export const NAMES_COACH = [
  'Владислав Платонихин',
  'Николай Шуранов',
  'Елизавета Бирюкова',
  'Владимир Скрипник',
];

export const POSITION_COACH = [
  'Главный тренер',
  'Старший тренер',
  'Тренер',
  'Тренер по физической подготовке',
];

export const IMAGES_PLAYER = ['/player.png'];

export const NAMES_PLAYER = [
  'Глеб Бережинский',
  'Рустем Блэк',
  'Михаил Ромашков',
  'Артур Хохлов',
  'Кирилл Тишин',
  'Сергей Кузьмин',
  'Денис Рошка',
];

export const POSITION_PlAYER = [
  'нападающий',
  'квотербек',
  'лайнмен',
  'тайт-энд',
  'ресивер',
  'раннинбек',
  'фуллбек',
];

export const DATES_PlAYER = [
  '23.12.2009',
  '24.12.2013',
  '25.12.2007',
  '26.12.2008',
];

export const RANK_PlAYER = [
  'Чемпион России 2023',
  'Чемпион России 2022',
  'MVP защиты',
  'Открытие года в нападении',
];

export const NEWS = [
  {
    id: 1,
    image: '/news.png',
    pub_date: '14.03.2023',
    title: 'Открытая тренировка',
    text: '30 июня все желающие могут попробовать себя в нашем замечательном виде спорта!',
  },
  {
    id: 2,
    image: '/news.png',
    pub_date: '13.03.2023',
    title: 'Сегодня день рождения',
    text: '30 июня все желающие могут попробовать себя в нашем замечательном виде спорта!',
  },
  {
    id: 3,
    image: { ...teamMain },
    pub_date: '12.03.2023',
    title: 'Победа в последнем матче',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 4,
    image: { ...teamMain },
    pub_date: '12.03.2023',
    title: 'Победа в последнем матче',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

// export const NEWS = [];

export const GAMES = [
  {
    id: 1,
    team: 'Апачи',
    points: 123,
    points_: 124,
    date: '22.10.2023',
    place: 'Стадион Сельма, г. Калининград'
  },
  {
    id: 2,
    team: 'Спартак',
    points: 123,
    points_: 124,
    date: '22.10.2023',
    place: 'Стадион Сельма, г. Калининград'
  },
  {
    id: 3,
    team: 'Балтика',
    points: 123,
    points_: 124,
    date: '22.10.2023',
    place: 'Стадион Сельма, г. Калининград'
  },
];