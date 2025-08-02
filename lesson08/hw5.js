// Домашнее задание №5 «Массивы»
// Создайте массив целых чисел из 10 элементов.
const array = [1,2,3,4,5,6,7,8,9,10]
// 1.Выведите в консоль сумму всех элементов массива.
function printSum() {
    let result = 0
    array.forEach(i => {
        result += i
    })
    console.log(result)
}


// 2.Создайте новый массив на основе исходного, в
// котором каждый элемент будет вдвое больше
// элемента исходного массива с таким же индексом.
// (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
// массив).
function copyArray(arrayA) {
    const arrayB = Array.from(arrayA, (i) => i*2)
    return arrayB
}

// 3.*Найдите и выведите в консоль наибольший и
// наименьший элементы исходного массива
function findMaxAndMin(array) {
    const min = Math.min(...array)
    const max = Math.max(...array)
    console.log(min)
    console.log(max)
}

module.exports = {array, printSum, copyArray, findMaxAndMin}