
import KEY from './src/data.js';

// import arrays! //

const { key_Code: keyCodeWhich } = KEY;
const { key_En: englishLanguage } = KEY;
const { key_En_Capslock: englishLanguageCapslock } = KEY;
const { key_Ru: russianLanguage } = KEY;
const { key_Ru_Capslock: russianLanguageCapslock } = KEY;
const { special_Key: specialKeyTranscription } = KEY;

// ADD DOM COLLECTION---------------------------------------------------

const keyboard = document.createElement('div');
const body = document.querySelector('body');
const textArea = document.createElement('textarea');
const wrapper = document.createElement('div');
const HELPER = document.createElement('p');
wrapper.appendChild(HELPER);
HELPER.textContent = '(ENG-RU)  CTRL + ALT or $ + ☭  WINDOWS 10';
let englishLanguge = 'en';
let CapsLock = false;
keyboard.className = 'keyboard';
keyboard.id = 'keyboard';
wrapper.className = 'wrapper';
textArea.className = 'text-area';
body.append(wrapper);
wrapper.append(textArea);
textArea.id = 'input';
const img = document.createElement('IMG');
wrapper.append(img);
img.src = 'picture/mouse.png';

// keys_______________--
const activeButton = (targetId) => {
  if (document.getElementById(targetId).classList.contains('key')) {
    document.getElementById(targetId).classList.add('active');
  }
};

const activeNot = (targetId) => {
  if (document.getElementById(targetId).classList.contains('key')) {
    document.getElementById(targetId).classList.remove('active');
  }
  return targetId;
};


const mouseClickUp = (event) => {
  if (event.fromElement && event.toElement && event.fromElement.id && event.toElement.id) {
    if (!(event.target.id === 'CapsLock') && !(event.target.id === 'ShiftLeft') && !(event.target.id === 'ShiftRight')) {
      activeNot(event.target.id);
    }
  }
};


function activeButtonContain(str) {
  if (document.getElementById(str).classList.contains('active')) {
    return true;
  }
  return false;
}
function KeyboardFixBug() {
  while (keyboard.hasChildNodes()) {
    keyboard.removeChild(keyboard.firstChild);
  }
}
// create key_BOARD AND KEYS
const keys = (el) => {
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
      key.classList.add('width_keys');
      break;
    default:
      key.classList.add('p');
      break;
  }
  keyboard.append(key);
  keyboard.addEventListener('mouseout', mouseClickUp);
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
    KeyboardFixBug();
  }
  wrapper.append(keyboard);
  for (let i = 0; i < array.length; i += 1) {
    array[i].forEach((element) => {
      keys(element);
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
    if (englishLanguge === 'ru') {
      keyboardWrapper(russianLanguageCapslock);
    }
    if (englishLanguge === 'en') {
      keyboardWrapper(englishLanguageCapslock);
    }
  }
  if (!CapsLock) {
    if (englishLanguge === 'ru') {
      keyboardWrapper(russianLanguage);
    }
    if (englishLanguge === 'en') {
      keyboardWrapper(englishLanguage);
    }
  }
};
// // SAVE LOCALSTORAGE -------------------------
const locaLanguage = () => {
  localStorage.setItem('keyboard-lang', englishLanguge);
};
const resetartLanguage = () => {
  if (localStorage.getItem('keyboard-lang')) {
    englishLanguge = localStorage.getItem('keyboard-lang');
  } else {
    englishLanguge = 'en';
  }
};
// / SWICH & SWAP ---------------------------------------
const swapLangugage = () => {
  if (englishLanguge === 'ru') {
    englishLanguge = 'en';
    locaLanguage();
  } else {
    englishLanguge = 'ru';
    locaLanguage();
  }
};

const russianOrEnglishLanguage = () => {
  if (activeButtonContain('ControlLeft') && activeButtonContain('AltLeft')) {
    swapLangugage();
    capsLockSearch();
  }
};


// ACTIVE CLICK--------------------------------------------------

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
    if (activeButtonContain(id)) {
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
    if (activeButtonContain(id)) {
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


// КЛИК КЛАВИАТУРЫ
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

// ---------------------- STRUCTURE FUNCTIONS ---------------------


img.addEventListener('click', () => {
  img.classList.toggle('activeImg');
});


window.onload = () => {
  resetartLanguage();
  capsLockSearch();
};