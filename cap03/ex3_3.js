const prompt = require('prompt-sync')()
const salario = Number(prompt('Digite o salário do funcionário: '))
const tempo = Number(prompt('Digite o tempo de serviço (em anos): '))
const quadrienios = Math.floor(tempo / 4)
const acrescimo = (salario * quadrienios) / 100
console.log(`Quadriênios: ${quadrienios}`)
console.log(`Salario final: R$ ${(salario + acrescimo).toFixed(2)}`)
