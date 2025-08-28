const prompt = require('prompt-sync')()
const pesoKg = Number(prompt('Peso da ração em kg: '))
const consumo = Number(prompt('Consumo diário em gramas: '))
const pesoGr = pesoKg * 1000
const duracao = Math.floor((pesoKg * 1000) / consumo)
const sobre = pesoGr % consumo
console.log(`A ração durará ${duracao} dias.`)
console.log(`Sobra: ${sobre} gramas.`)
