// .Запросите у пользователя дату в формате
// ДД.ММ.ГГГГ. Напишите программу, выводящую день
// недели по введённой дате.
export function getDay() {
    const input = prompt('ДД.ММ.ГГГГ')
    const [day, month, year] = input.split('.')
    const date = new Date(+year, +month-1, +day)
    const days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
    console.log(days[date.getDay()-1])
}

// 2.Написать программу, которая выводит в консоль
// количество минут, прошедшее с начала сегодняшнего
// дня.
export function printMinutes() {
    const time = Date.now();
    const date = new Date(time)
    const minutes = date.getHours() * 60 + date.getMinutes()
    console.log(minutes)
}

// 3.*В двух переменных хранятся даты рождения двух
// пользователей в формате ДД.ММ.ГГГГ. Написать
// программу, которая определяет более молодого
// пользователя.
export function getYoungUser(user1, user2) {
    const [day1, month1, year1] = user1.split('.')
    const [day2, month2, year2] = user2.split('.')
    const user1Date = new Date(+year1, +month1 - 1, +day1).getTime()
    const user2Date = new Date(+year2, +month2 - 1, +day2).getTime()
    user1Date > user2Date ? console.log(user1) : console.log(user2)
}