const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
	e.preventDefault()
	const nome = frm.inNome.value
	const masculino = frm.rbMasculino.checked
	const altura = Number(frm.inAltura.value)

	let peso
	if (masculino) {
		peso = 22 * Math.pow(altura, 2)
	} else {
		peso = 21 * Math.pow(altura, 2)
	}
	resp1.innerText = `${nome}, seu peso ideal é ${peso.toFixed(3)} kg.`

	frm.addEventListener('reset', () => {
		resp1.innerText = ''
	})
})
