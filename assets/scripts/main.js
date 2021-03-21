'use strict'
import {areNumbersEqual, getRandomNumber} from "./utils.js";

const result = getRandomNumber(1, 11);
const inputNumber = Number(prompt('Введите число от 1 до 10'));
const comparison = areNumbersEqual(result, inputNumber);
console.log(`Вы ввели ${inputNumber}`);
console.log(`Сгенерированное число = ${result}`);

if (comparison === true) {
    alert('Вы угадали!!!');
} else alert('Попробуйте сыграть еще раз');







