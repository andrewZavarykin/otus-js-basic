// Домашнее задание №4 «Объекты»
// Создайте объект user, содержащий поле name со значением ‘John’.
const user = {
    name: 'John'
}
// 1.Запросить у пользователя ввод числа. Записать
// введенное значение в поле age объекта user.
function writeAge() {
    const input = prompt('укажите возраст пользователя')
    user.age = +input
}

// 2.Создать копию объекта user с именем admin.
// Добавить новому объекту поле role со значением ‘admin’.
function createAdmin() {
    const admin = Object.assign(user)
    admin.role = 'admin'
    return admin
}

// *Записать все значения полей объекта admin в
// отдельные переменные. Имена переменных
// должны совпадать с названиями полей.
function destructuringObject(admin) {
    let {name, role} = admin
    console.log(name)
    console.log(role)
}

module.exports = {user, writeAge, createAdmin, destructuringObject}