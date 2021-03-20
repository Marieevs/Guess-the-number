'use strict'
export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
export function areNumbersEqual(result,inputNumber) {
    if (Number(inputNumber) === result) {
       return 'Вы угадали!!!';
    } else if ((Number(inputNumber) > 10) || (Number(inputNumber) < 1) || (isNaN(inputNumber))) {
        return 'Введите корректное значение и сыграйте ещё';
    } else if (Number(inputNumber) !== result) {
        return 'Вы не угадали, попробуйте сыграть ещё';
    }
}





