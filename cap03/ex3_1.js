const prompt = require('prompt-sync')()

const num1 = Number(prompt('Enter first number: '))
const num2 = Number(prompt('Enter second number: '))

const sum = num1 + num2
console.log(`The sum of ${num1} and ${num2} is ${sum}`)
