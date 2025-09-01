// Домашнее задание №9 «Математические операции»
// 1.Даны длины трёх сторон треугольника. Определить,
// является ли треугольник прямоугольным.
export function rightTriangle(a, b, c) {
    const a2 = a * a
    const b2 = b * b
    const c2 = c * c
    if (a2 >= b2 && a2 >= c2) {
        return a2 === b2 + c2
    } else if (b2 >= a2 && b2 >= c2) {
        return b2 === a2 + c2
    } else if (c2 >= a2 && c2 >= b2) {
        return c2 === a2 + b2
    }
}

// 2.Пользователь вводит число R. Написать программу,
// которая выведет в консоль длину окружности и
// площадь круга с радиусом R.
export function getLengthAndArea(r) {
    const c = 2 * Math.PI * r 
    const s = Math.PI * (r*r)
    console.log(`длина окружности равна ${Math.floor(c)}`)
    console.log(`площадь круга равна ${Math.floor(s)}`)
}


// *Пользователь вводит числа a, b и c. Написать
// программу, выводящую корни квадратного
// уравнения с коэффициентами a, b и c.
export function quadraticEquation(a, b, c) {
    const D = (b * b) - 4 * (a * c)
    if (D > 0) {
        const x1 = (-b + Math.sqrt(D)) / (2 * a)
        const x2 = (-b - Math.sqrt(D)) / (2 * a)
        console.log(`x1 = ${x1}, x2 = ${x2}`)
    } else if (D === 0) {
        const x = -b / (2 * a)
        console.log(`x = ${x}`)
    } else {
        console.log('уравнение не имеет корней')
    }
}