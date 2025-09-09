'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesMap = {};

  if (typeof sourceString !== 'string' || sourceString.trim() === '') {
    return stylesMap;
  }

  // Розбиваємо рядок на окремі декларації
  const declarations = sourceString.split(';');

  for (let declaration of declarations) {
    // Прибираємо зайві пробіли/переноси
    declaration = declaration.trim();

    if (!declaration) {
      continue; // пропускаємо пусті
    }

    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      continue; // не валідний запис без ':'
    }

    const property = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    if (property && value) {
      stylesMap[property] = value;
    }
  }

  return stylesMap;
}

module.exports = convertToObject;
