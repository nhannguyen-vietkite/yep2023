import { htmlToElement, toCatElement } from '../utils/dom.util';

export const SYMBOLS_CLASSIC = [
    '🍋', '🍊', '🍉', '🍈', '🍇', '🥝', '🍓', '🍒', '🌟', '🍀', '💎', '🎰'];

export const SYMBOLS_CHRISTMAS = [
    '🧣', '⛄', '🎄', '🎁', '🎀', '🍾', '🍷', '🔔', '🌟', '🦌', '🎅'];

export const SYMBOLS_HALLOWEEN = [
    '🌚', '🎃', '🦇', '😈', '🧠', '👹', '👽', '🤡', '👻', '🧟‍', '🧛‍', '💀'];

export const SYMBOLS_ANIMALS = [
    '🐞', '🐟', '🐭', '🐸', '🐓', '🐷', '🦀', '🐍', '🦊‍', '🦁', '🦕', '🦖'];

export const SYMBOLS_SPORTS = [
    '🎯', '🎱', '🏐', '⛳', '⚾', '🏈', '🏀', '⚽', '🥉', '🥈', '🥇', '🏆'];

export const SYMBOLS_LOVE = [
    '💌', '🎁', '📸', '💘', '💋', '🔞', '💑', '💍', '💎', '💖',
];

export const SYMBOLS_FORTUNE = [
    '🎴', '🎲', '🕶', '🥃', '💷', '💴', '💵', '💰', '🍀', '💎', '🎰', '🧞‍️', '🃏'];

export const SYMBOLS_FOOD = [
    '🥦', '🍋', '🍆', '🍙', '🍯', '🍑', '🍓', '🍭', '🍫', '🍩', '🍕', '🍗', '🥩', '🍣',
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

export const SYMBOLS_RANDOM = ALL_SYMBOLS[Math.random() * ALL_SYMBOLS.length | 0];


export const CAT_SYMBOLS = [
    toCatElement('meo-beo.jpg'),
    toCatElement('meo-beo.jpg'),
    toCatElement('meo-nobita.png'),
];

export const GIFT_SYMBOLS = [
    htmlToElement('<div>🎁 <span class="gift-number">1</span></div>'),
    htmlToElement('<div>🎁 <span class="gift-number">2</span></div>'),
    htmlToElement('<div>🎁 <span class="gift-number">3</span></div>'),
    htmlToElement('<div>🎁 <span class="gift-number">4</span></div>'),
    htmlToElement('<div>🎁 <span class="gift-number">5</span></div>'),
    htmlToElement('<div>🎁 <span class="gift-number">6</span></div>'),
];

// export const GIFT_SYMBOLS = [
//     '🎁 1',
//     '🎁 2',
//     '🎁 3',
//     '🎁 4',
//     '🎁 5',
//     '🎁 6',
//     '🎁 7',
// ];
