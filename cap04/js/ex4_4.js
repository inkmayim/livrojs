const frm = document.querySelector('form')
const resp = document.querySelector('h3')
console.log(frm)
console.log(resp)

frm.addEventListener('submit', (e) => {
	e.preventDefault()
	console.log('Evento submit capturado')
	const horaBrasil = Number(frm.inHoraBrasil.value)
	let horaFrança = horaBrasil + 5
	if (horaFrança >= 24) {
		horaFrança = horaFrança - 24
	}
	resp.innerText = `No momento são ${horaFrança} horas na França.`
})
