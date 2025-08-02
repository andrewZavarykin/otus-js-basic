// Домашнее задание №6 «Функции»
// 1.Напишите функцию diff, которая получает в качестве
// параметров 2 числа и возвращает разницу между
// наибольшим и наименьшим.
function diff(a, b) {
    if (a > b) {
        return a - b
    } else {
        return b - a
    }
}

// 2.Напишите функцию isWord, которая принимает на
// вход текстовую строку. Функция возвращает true, если
// строка состоит из одного слова и false, если из
// нескольких.
function isWord(str) {
    const array = str.split(' ')
    if (array.length === 1) {
        return true
    } else return false
}

// *Напишите функцию pow(a, x), которая вернёт
// значение числа a, возведённого в степень x.
function pow(a, x) {
    return Math.pow(a, x)
}


module.exports = {diff, isWord, pow}