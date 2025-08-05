// Домашнее задание №1 «Линейные алгоритмы»

// 1.В переменных a и b хранятся числа. Написать
// программу, которая выводит в консоль произведение
// и сумму этих чисел.

function sum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        const sum = a + b
        console.log(sum)
    } else {
        console.log('type is not a number')
    }
}

// В двух переменных хранятся строки символов.
// Написать программу, которая выведет в консоль
// суммарное количество символов в обоих строках.
function countChars(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(a.length + b.length)
    } else {
        console.log('type is not a string')
    }
}

// Написать программу, которая запрашивает у
// пользователя ввод трёхзначного числа, а потом
// выводит в консоль сумму цифр введённого числа
function promptNumberAndSumElements() {
    const input = prompt('введите трехзначное число') // 111
    let value1 = input % 10
    let value2 = Math.floor((input % 100) / 10)
    let value3 = Math.floor(input / 100)
    console.log(value1 + value2 + value3)
}

module.exports = {sum, countChars, promptNumberAndSumElements}