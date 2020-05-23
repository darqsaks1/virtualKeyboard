
import KEY from './src/data.js';

const { keyCode: keyCodeWhich } = KEY;
const { keyEn: englishLanguage } = KEY;
const { keyEnCapslock: englishLanguageCapslock } = KEY;
const { keyRu: russianLanguage } = KEY;
const { keyRuCapslock: russianLanguageCapslock } = KEY;
const { specialKey: specialKeyTranscription } = KEY;

const keyboard = document.createElement('div');
const body = document.querySelector('body');
const textArea = document.createElement('textarea');
const wrapper = document.createElement('div');
const HELPER = document.createElement('p');
wrapper.appendChild(HELPER);
HELPER.textContent = '(ENG-RU)  CTRL + ALT or $ + ☭  WINDOWS 10';
let switcherLanguage = 'en';
let CapsLock = false;
keyboard.className = 'keyboard';
wrapper.className = 'wrapper';
textArea.className = 'text-area';
body.append(wrapper);
wrapper.append(textArea);
textArea.id = 'input';
const img = document.createElement('IMG');
wrapper.append(img);
img.src = 'picture/mouse.png';

const activeButton = (targetId) => {
  if (document.getElementById(targetId).classList.contains('key')) {
    document.getElementById(targetId).classList.add('active');
  }
};

const activeNot = (targetId) => {
  if (document.getElementById(targetId).classList.contains('key')) {
    document.getElementById(targetId).classList.remove('active');
  }
};

const onMouseClickUp = (event) => {
  if (event.fromElement  && event.fromElement.id && event.toElement && event.toElement.id) {
    if (event.target.id !== 'CapsLock' && event.target.id !== 'ShiftLeft' && event.target.id !== 'ShiftRight') {
      activeNot(event.target.id);
    }
  }
};

function isActiveButtonContain(str) {
  if (document.getElementById(str).classList.contains('active')) {
    return true;
  }
  return false;
}
function fixKeyboardBug() {
  while (keyboard.hasChildNodes()) {
    keyboard.removeChild(keyboard.firstChild);
  }
}

const getSpecialKeys = (el) => {
  const key = document.createElement('div');
  key.className = 'key';
  key.textContent = `${el}`;
  switch (el) {
    case ' ':
      key.classList.add('spaceBar');
      break;
    case 'CapsLock':
    case 'Shift':
    case 'Enter':
    case 'Backspace':
    case 'Tab':
      key.classList.add('width-keys');
      break;
    default:
      key.classList.add('p');
      break;
  }
  keyboard.append(key);
  keyboard.addEventListener('mouseout', onMouseClickUp);
};

let firstChild;
function searchElement(i, elem) {
  let buz = elem;
  keyCodeWhich[i].forEach((element) => {
    firstChild[buz].id = element;
    buz += 1;
  });
  return buz;
}

const keyboardWrapper = (array) => {
  if (wrapper.querySelector('.keyboard')) {
    fixKeyboardBug();
  }
  wrapper.append(keyboard);
  for (let i = 0; i < array.length; i += 1) {
    array[i].forEach((element) => {
      getSpecialKeys(element);
    });
  }
  firstChild = keyboard.childNodes;
  let elem = 0;
  for (let i = 0; i < keyCodeWhich.length; i += 1) {
    elem = searchElement(i, elem);
  }
};

const capsLockSearch = () => {
  if (CapsLock) {
    if (switcherLanguage === 'ru') {
      keyboardWrapper(russianLanguageCapslock);
    }
    if (switcherLanguage === 'en') {
      keyboardWrapper(englishLanguageCapslock);
    }
  }
  if (!CapsLock) {
    if (switcherLanguage === 'ru') {
      keyboardWrapper(russianLanguage);
    }
    if (switcherLanguage === 'en') {
      keyboardWrapper(englishLanguage);
    }
  }
};

const locaLanguage = () => {
  localStorage.setItem('keyboard-lang', switcherLanguage);
};
const restartLanguage = () => {
  if (localStorage.getItem('keyboard-lang')) {
    switcherLanguage = localStorage.getItem('keyboard-lang');
  } else {
    switcherLanguage = 'en';
  }
};

const swapLangugage = () => {
  if (switcherLanguage === 'ru') {
    switcherLanguage = 'en';
    locaLanguage();
  } else {
    switcherLanguage = 'ru';
    locaLanguage();
  }
};

const russianOrEnglishLanguage = () => {
  if (isActiveButtonContain('ControlLeft') && isActiveButtonContain('AltLeft')) {
    swapLangugage();
    capsLockSearch();
  }
};

function leftOrRIghtShift(str) {
  if (str === 'ShiftLeft' || str === 'ShiftRight') {
    return true;
  }
  return false;
}

keyboard.addEventListener('mouseup', (event) => {
  if (event.target.id === 'CapsLock' || leftOrRIghtShift(event.target.id)) {
    return;
  }
  activeNot(event.target.id);
});

const backSpaceKey = () => {
  const first = textArea.selectionStart;
  const second = textArea.selectionEnd;
  if (!textArea.setRangeText) {
    return;
  }
  if (first >= second) {
    if (first <= 0 || !textArea.setSelectionRange) {
      return;
    }
    textArea.setSelectionRange(first - 1, first);
  }
  textArea.setRangeText('');
};

const tab = () => {
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Tab') {
      event.preventDefault();
    }
  });
};

const checkShift = () => {
  const leftShiftActive = document.getElementById('ShiftLeft').classList.contains('active');
  const rightShiftActive = document.getElementById('ShiftRight').classList.contains('active');
  if (leftShiftActive || rightShiftActive) {
    return true;
  }
  return false;
};

const specialKeysKeyCode = (id, target) => {
  switch (id) {
    case 'Delete':
      activeButton(id);
      textArea.value += 'I do not have a DELETE button';
      break;
    case 'Space':
      activeButton(id);
      textArea.value += ' ';
      break;
    case 'AltRight':
      activeButton(id);
      break;
    case 'Backspace':
      activeButton(id);
      backSpaceKey();
      break;
    case 'Tab':
      tab();
      activeButton(id);
      textArea.value += '        ';
      break;
    case 'Enter':
      activeButton(id);
      textArea.value += '\n';
      break;
    case 'MetaLeft':
      activeButton(id);
      textArea.value += '⚝⚓⚝';
      break;
    default:
      textArea.value += '    ';
      break;
  }

  if (leftOrRIghtShift(id)) {
    if (isActiveButtonContain(id)) {
      activeNot(id);
      CapsLock = false;
      capsLockSearch(target);
      return;
    }
    activeButton(id);
    CapsLock = true;
    capsLockSearch(target);
    document.getElementById(id).classList.add('active');
    return;
  }

  if (id === 'ControlLeft' || id === 'AltLeft') {
    activeButton(id);
    if (checkShift()) {
      swapLangugage();
      CapsLock = false;
      capsLockSearch();
    }
  }

  if (id === 'CapsLock') {
    if (isActiveButtonContain(id)) {
      activeNot(id);
      CapsLock = false;
      capsLockSearch(target);
      return;
    }
    activeButton(id);
    CapsLock = true;
    capsLockSearch(target);

    document.getElementById(id).classList.add('active');
  }
};

const writeInTextArea = (str) => {
  textArea.value += str;
};

keyboard.addEventListener('mousedown', (event) => {
  const targetId = event.target.id;

  if (targetId === 'Language') {
    swapLangugage();
    locaLanguage();
    capsLockSearch();
    activeButton(targetId);
    return;
  }

  if (specialKeyTranscription.includes(targetId)) {
    specialKeysKeyCode(targetId, event.target);
    return;
  }

  activeButton(targetId);
  if (event.target.classList.contains('key')) {
    writeInTextArea(event.target.textContent);
  }
});


const keyDown = (event) => {
  const keyCodeValue = event.code;
  if (keyCodeValue === 'AltLeft' || keyCodeValue === 'ControlLeft') {
    activeButton(keyCodeValue);
    russianOrEnglishLanguage();
    return;
  }

  if (specialKeyTranscription.includes(keyCodeValue)) {
    specialKeysKeyCode(keyCodeValue, event.target);
    return;
  }
  if (document.getElementById(event.code) === null) {
    return;
  }
  document.getElementById(keyCodeValue).classList.add('active');
  writeInTextArea(document.getElementById(keyCodeValue).textContent);
};

const keyUp = (event) => {
  if (leftOrRIghtShift(event.code)) {
    CapsLock = false;
    capsLockSearch();
    document.getElementById(event.code).classList.remove('active');
    return;
  }
  if (event.code === 'CapsLock') {
    return;
  }
  if (document.getElementById(event.code) === null) {
    return;
  }
  document.getElementById(event.code).classList.remove('active');
};

document.addEventListener('keydown', (event) => keyDown(event));
document.addEventListener('keyup', (event) => keyUp(event));

img.addEventListener('click', () => {
  img.classList.toggle('activeImg');
});

window.onload = () => {
  restartLanguage();
  capsLockSearch();
};
