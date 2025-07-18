// Сверстать страницу и подключить к ней файл со
// скриптом. На странице должны быть три текстовых
// параграфа, поле ввода и кнопка. Напишите скрипт,
// который будет выполнять следующие условия:
// 1.Кнопка скрыта, если в поле ввода нет значения.
// 2.При клике на кнопку добавляется новый параграф,
// содержащий текст из поля ввода.
// 3.*Если параграфов становится больше 5, первый из
// них удаляется.

function onInput() {
    const input = document.querySelector('input')
    const value = input.value
    if (value) {
        setHiddenOnButtonFalse()
    } else {
        setHiddenOnButtonTrue()
    }
}

function setHiddenOnButtonTrue() {
    const button = document.querySelector('button')
    button.hidden = true
}

function setHiddenOnButtonFalse() {
    const button = document.querySelector('button')
    button.hidden = false
}

function addParagraph() {
    const text = getTextFromInput()
    if (text) {
        const paragraph = document.createElement('p')
        paragraph.innerText = text
        const container = document.querySelector('.container')
        container.append(paragraph)
    }
}

function getTextFromInput() {
    const input = document.querySelector('input')
    return input.value
}

function setEventListenerOnInput() {
    const element = document.querySelector('input')
    element.addEventListener('keyup', onInput)
}

function onButton() {
    clearContainer()
    addParagraph()
    clearInput()
}

function clearContainer() {
    const container = document.querySelector('.container')
    const paragraphs = container.querySelectorAll('p')
    if (paragraphs.length >= 4) {
        paragraphs[0].remove()
    }
}

function clearInput() {
    const element = document.querySelector('input')
    element.value = ''
}

function setEventListenerOnButton() {
    const element = document.querySelector('button')
    element.addEventListener('click', onButton)
}    

setEventListenerOnInput()
setEventListenerOnButton()
