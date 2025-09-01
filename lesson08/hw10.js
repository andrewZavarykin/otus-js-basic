export function isDate() {
    const input = prompt()
    const pattern = /[0-9]{1,2}\.[0-9]{2}\.[0-9]{4}/g
    console.log(pattern.test(input))
}

export function isEmail() {
    const input = prompt()
    const pattern = /[\da-z.]+@[\da-z]+\.[a-z]+/
    console.log(pattern.test(input))
}

export function isPhoneNumber() {
    const input = prompt()
    const pattern = /\+\d[\s(-]{0,1}\d{3}[\s)-]{0,1}\d{3}[\s-]{0,1}\d{2}[\s-]{0,1}\d{2}/
    console.log(pattern.test(input))
}