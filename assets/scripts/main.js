'use strict'
import {areNumbersEqual, getRandomNumber} from "./utils.js";
const result = getRandomNumber(1, 11);
const inputNumber = prompt('Введите число от 1 до 10');
console.log(`Вы ввели ${inputNumber}`);
console.log(`Сгенерированное число = ${result}`);
alert(areNumbersEqual(result, inputNumber));





