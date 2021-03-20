'use strict'
export const inputNumber = prompt('Введите число от 1 до 10');
export const result = getRandomNumber(1, 11);

export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function areNumbersEqual() {
    if (Number(inputNumber) === result) {
        alert('Вы угадали число');
    } else if ((Number(inputNumber) > 10) || (isNaN(inputNumber))) {
        alert('Введите корректное значение и сыграйте ещё раз');
    } else if (Number(inputNumber) !== result) {
        alert('Вы не угадали, сыграйте ещё раз');
    }
}

