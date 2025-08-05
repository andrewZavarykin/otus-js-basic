// Домашнее задание №3 «Циклы»

// 1.Вывести в консоль сумму всех целых чисел от 50 до
// 100.
function printSumIntegers() {
    let result = 0
    for (let i = 50; i <= 100; i++) {
        result += i
    }
    console.log(result)
}


// 2.Вывести в консоль таблицу умножения на 7.
// 7 x 1 = 7
// 7 x 2 = 14
// …
// 7 x 9 = 63
function sevenMultiply() {
    for (let i = 1; i <= 9; i++) {
        let result = 7 * i
        console.log(`7 x ${i} = ${result}`)
    }
}


// *Запросить у пользователя ввод числа N. Вывести в
// консоль среднее арифметическое всех нечётных
// чисел от 1 до N
function findArithmeticMean() {
    const input = prompt('введите целое положительное число')
    let sum = 0
    let count = 0
    for (let i = 1; i <= input; i++) {
        if (i % 2 != 0) {
            sum += i
            count++
        }
    }
    console.log(sum / count)
}

module.exports = {printSumIntegers, sevenMultiply, findArithmeticMean}