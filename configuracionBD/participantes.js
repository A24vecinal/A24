const participantesList = document.querySelector('.modal-lobby')

export const setupParticipantes = (data) => {
    if (data.length) {
        let html = ''

        data.forEach(doc => {
            const participantes = doc.data()
            const li = `
                < div class="modal-body" >
                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-participante1"> Participante 1</a>
                </div>
            `
            html += li
        })

        participantesList.innerHTML = html
    } else {
        participantesList.innerHTML = '<p>No hay participantes</p>'
    }
}