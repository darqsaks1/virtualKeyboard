const keyCode = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5',
     'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI',
     'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ',
     'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV',
     'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space',
     'AltRight', 'Language', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
  ];

const keyEn = [
    ['`', '1', '2', '3', '4', '5', '6',
     '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y',
     'u', 'i', 'o', 'p', '[', ']', '☕'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g',
     'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['Shift', '\\', 'z', 'x', 'c', 'v',
     'b', 'n', 'm', ',', '.', '/', '⇑', 'shift'],
    ['Ctrl', 'Win', 'Alt', ' ',
    'alt', '☭', '⇐', '⇓', '⇒'],
];

const keyEnCapslock = [
    ['~', '!', '@', '#', '$',
     '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R',
     'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '☕'],
    ['CapsLock', 'A', 'S', 'D', 'F',
     'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
    ['Shift', '|', 'Z', 'X', 'C', 'V', 'B',
     'N', 'M', '<', '>', '?', '⇑', 'shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'alt', '☭', '⇐', '⇓', '⇒'],
];

const keyRu = [
    ['ё', '1', '2', '3', '4', '5',
     '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е',
     'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '☕'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 
    'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    ['Shift', '\\', 'я', 'ч', 'с', 'м',
     'и', 'т', 'ь', 'б', 'ю', '.', '⇑', 'shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'alt', '$', '⇐', '⇓', '⇒'],
];

const keyRuCapslock = [
    ['Ё', '!', '"', '№', ';', '%',
     ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е',
     'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '☕'],
    ['CapsLock', 'Ф', 'Ы', 'В', 'А',
     'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    ['Shift', '/', 'Я', 'Ч', 'С', 'М',
     'И', 'Т', 'Ь', 'Б', 'Ю', ',', '⇑', 'shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'alt', '$', '⇐', '⇓', '⇒'],
];

  const specialKey = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter',
   'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight'];
  
  export default {
    keyCode,
    keyEn,
    keyRu,
    keyEnCapslock,
    keyRuCapslock,
    specialKey,
  };
