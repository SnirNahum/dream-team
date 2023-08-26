export const utilService = {
  getRandomInt,
  makeId,
  debounce,
  loadFromStorage,
  saveToStorage,
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export function makeId(length = 5) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function debounce(func, wait = 1000) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function loadFromStorage(key) {
  const val = localStorage.getItem(key);
  return val ? JSON.parse(val) : null;
}

function saveToStorage(key, val) {
  localStorage[key] = JSON.stringify(val);
}

export const elementTypes = {
  1: "dashboard-gk",
  2: "dashboard-def",
  3: "dashboard-mid",
  4: "dashboard-at",
};

export function getPosition(positionId) {
  if (positionId === 1) {
    return "GK";
  } else if (positionId === 2) {
    return "DEF";
  } else if (positionId === 3) {
    return "MID";
  } else {
    return "FWD";
  }
}
