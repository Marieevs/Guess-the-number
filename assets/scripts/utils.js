'use strict'
export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
export function areNumbersEqual(result,inputNumber) {
    if (inputNumber === result) {
       return true;
    } else if ((inputNumber > 10) || (inputNumber < 1) || (isNaN(inputNumber))){
        return false;
    } else if (inputNumber !== result) {
        return false;
    }
}







