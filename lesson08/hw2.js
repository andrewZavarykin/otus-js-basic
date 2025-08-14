// Домашнее задание №2 «Условия»

// 1.В переменных a и b хранятся числа. Вывести в
// консоль наибольшее из них.
export function getMax(a, b) {
    if (a > b) {
        console.log(a)
    } else {
        console.log(b)
    }
}

// 2.Запросить у пользователя ввод числа от 1 до 12.
// Вывести в консоль название месяца, соответствующее
// этому числу (1 — январь, 2 — февраль и т.д.).
export function mapNumberToMonth() {
    const input = prompt('введите число от 1 до 12')

    switch (+input) {
        case 1:
            console.log('январь')
            break
        case 2:
            console.log('февраль')
            break
        case 3:
            console.log('март')
            break
        case 4:
            console.log('апрель')
            break
        case 5:
            console.log('май')
            break
        case 6:
            console.log('июнь')
            break
        case 7:
            console.log('июль')
            break
        case 8:
            console.log('август')
            break
        case 9:
            console.log('сентябрь')
            break
        case 10:
            console.log('октябрь')
            break
        case 11:
            console.log('ноябрь')
            break
        case 12:
            console.log('декабрь')
            break
    }

}

// *В переменных circle и square хранятся площади круга
// и квадрата соответственно. Написать программу,
// которая определяет, поместится ли круг в квадрат.
export function circleAndSquare(circle, square) {
    const aSquare = Math.sqrt(square)
    const dCircle = 2 * Math.sqrt(circle / Math.PI)
    return aSquare >= dCircle
}