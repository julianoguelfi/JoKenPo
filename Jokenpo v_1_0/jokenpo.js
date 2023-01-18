let pedra = document.querySelector('input#rpedra')
let papel = document.querySelector('input#rpapel')
let tesoura = document.querySelector('input#rtesoura')

function jogar() {
    if (rpedra.checked == false && rpapel.checked == false && rtesoura.checked == false) {
        alert('Selecione PEDRA, PAPEL ou TESOURA para iniciar o jogo!')
    } else {
        var sorteio = Math.floor(Math.random() * 3)
        if (sorteio == 0) {
            document.querySelector('img#computador').src = 'imagens/pedrapc.png'
        } else if (sorteio == 1) {
            document.querySelector('img#computador').src = 'imagens/papelpc.png'
        } else {
            document.querySelector('img#computador').src = 'imagens/tesourapc.png'
        }
    }

    if (pedra.checked == true && sorteio == 0) {
        res.innerHTML = `Os dois jogaram pedra.<br><strong>Deu Empate!</strong>`
    } else if (papel.checked == true && sorteio == 1) {
        res.innerHTML = `Os dois jogaram papel.<br><strong>Deu Empate!</strong>`
    } else if (tesoura.checked == true && sorteio == 2) {
        res.innerHTML = `Os dois jogaram tesoura.<br><strong>Deu Empate!</strong>`
    } else if (pedra.checked == true && sorteio == 1){
        res.innerHTML = `Você jogou pedra e o computador jogou papel.<br><strong>Computador ganhou!</strong>`
    } else if(pedra.checked == true && sorteio == 2){
        res.innerHTML = `Você jogou pedra e o computador jogou tesoura.<br><strong>Você ganhou! Parabéns!</strong>`
    } else if (papel.checked == true && sorteio == 0){
        res.innerHTML = `Você jogou papel e o computador jogou pedra.<br><strong>Você ganhou! Parabéns</strong>`
    } else if(papel.checked == true && sorteio == 2){
        res.innerHTML = `Você jogou papel e o computador jogou tesoura.<br><strong>Computador ganhou!</strong>`
    } else if(tesoura.checked == true && sorteio == 0){
        res.innerHTML = `Você jogou tesoura e o computador jogou pedra.<br><strong>Computador ganhou!</strong>`
    } else if(tesoura.checked == true && sorteio == 1){
        res.innerHTML = `Você jogou tesoura e o computador jogou papel.<br><strong>Você ganhou! Parabéns!</strong>`
    }
}

function resetar() {
    document.querySelector('img#computador').src = 'imagens/pc.png'
    document.querySelector('div#res').innerHTML = ''
}