function darkMode(id, id2){
    document.getElementById(id).classList.toggle('d-none')
    document.getElementById(id2).classList.toggle('d-none')

    document.querySelector('.container').classList.toggle('dark-body')
    document.querySelector('.container-btn').classList.toggle('dark-cabecalho')
    document.querySelector('.content').classList.toggle('dark-cabecalho')
}