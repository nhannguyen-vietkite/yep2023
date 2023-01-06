import { htmlToElement, toCatElement, toGiftElement } from '../utils/dom.util';

export const SYMBOLS_CLASSIC = [
    '🍋',
    '🍊',
    '🍉',
    '🍈',
    '🍇',
    '🥝',
    '🍓',
    '🍒',
    '🌟',
    '🍀',
    '💎',
    '🎰',
];

export const SYMBOLS_CHRISTMAS = [
    '🧣',
    '⛄',
    '🎄',
    '🎁',
    '🎀',
    '🍾',
    '🍷',
    '🔔',
    '🌟',
    '🦌',
    '🎅',
];

export const SYMBOLS_HALLOWEEN = [
    '🌚',
    '🎃',
    '🦇',
    '😈',
    '🧠',
    '👹',
    '👽',
    '🤡',
    '👻',
    '🧟‍',
    '🧛‍',
    '💀',
];

export const SYMBOLS_ANIMALS = [
    '🐞',
    '🐟',
    '🐭',
    '🐸',
    '🐓',
    '🐷',
    '🦀',
    '🐍',
    '🦊‍',
    '🦁',
    '🦕',
    '🦖',
];

export const SYMBOLS_SPORTS = [
    '🎯',
    '🎱',
    '🏐',
    '⛳',
    '⚾',
    '🏈',
    '🏀',
    '⚽',
    '🥉',
    '🥈',
    '🥇',
    '🏆',
];

export const SYMBOLS_LOVE = [
    '💌',
    '🎁',
    '📸',
    '💘',
    '💋',
    '🔞',
    '💑',
    '💍',
    '💎',
    '💖',
];

export const SYMBOLS_FORTUNE = [
    '🎴',
    '🎲',
    '🕶',
    '🥃',
    '💷',
    '💴',
    '💵',
    '💰',
    '🍀',
    '💎',
    '🎰',
    '🧞‍️',
    '🃏',
];

export const SYMBOLS_FOOD = [
    '🥦',
    '🍋',
    '🍆',
    '🍙',
    '🍯',
    '🍑',
    '🍓',
    '🍭',
    '🍫',
    '🍩',
    '🍕',
    '🍗',
    '🥩',
    '🍣',
];

export const ALL_SYMBOLS = [
    SYMBOLS_CLASSIC,
    SYMBOLS_CHRISTMAS,
    SYMBOLS_HALLOWEEN,
    SYMBOLS_ANIMALS,
    SYMBOLS_SPORTS,
    SYMBOLS_LOVE,
    SYMBOLS_FORTUNE,
    SYMBOLS_FOOD,
];

export const SYMBOLS_RANDOM
    = ALL_SYMBOLS[(Math.random() * ALL_SYMBOLS.length) | 0];

const PEOPLE_NAMES = [
    'lien',
    'vinh-pham',
    'khon',
    'dao',
    'tam',
    'tuan-vo',
    'vinh-vo',
    'hai',
    'thuc-doan',
    'nhan',
    'tin',
    'khoa',
    'hau',
    'nu',
    'thien-nguyen',
    'tri',
    'khanh',
    'binh',
    'thuc-trieu',
    'trieu',
    'danh',
    'loc',
    'truong',
    'huy-tran',
    'shaffat',
    'uyen',
    'long',
    'than',
    'mi',
    'tue',
    'nhu',
    'hung',
    'thien-diep',
    'thuan',
    'son',
    'thanh',
    'tuan-tran',
    'huy-dang',
];

export const CAT_SYMBOLS = PEOPLE_NAMES.map((name) => toCatElement(`${ name }.png`));

const GIFTS = [
    'prize-2',
    'gift-11',
    'gift-6',
    'prize-1',
    'gift-4',
    'gift-7',
    'gift-8',
    'gift-5',
    'gift-9',
    'gift-12',
    'prize-3',
    'gift-13',
];

export const GIFT_SYMBOLS = GIFTS.map((name) => toGiftElement(`${ name }.png`));
// [
//     htmlToElement('<div>🎁 <span class="gift-number">5</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">1</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">2</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">3</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">4</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">5</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">6</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">1</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">2</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">3</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">4</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">5</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">6</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">1</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">2</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">3</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">4</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">5</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">6</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">1</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">2</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">3</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">4</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">5</span></div>'),
//     htmlToElement('<div>🎁 <span class="gift-number">6</span></div>'),
// ];

// export const GIFT_SYMBOLS = [
//     '🎁 1',
//     '🎁 2',
//     '🎁 3',
//     '🎁 4',
//     '🎁 5',
//     '🎁 6',
//     '🎁 7',
// ];
