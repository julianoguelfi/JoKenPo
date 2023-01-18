let pedra = document.querySelector('input#rpedra')
let papel = document.querySelector('input#rpapel')
let tesoura = document.querySelector('input#rtesoura')
let reshumano = document.querySelector('td#reshumano')
let rescomp = document.querySelector('td#rescomp')

let humano = 0
let comp = 0

reshumano.innerHTML = humano
rescomp.innerHTML = comp
res.innerHTML = `<h4>Confira o resultado de cada rodada aqui!</h4>`

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
    } 

    if (papel.checked == true && sorteio == 1) {
        res.innerHTML = `Os dois jogaram papel.<br><strong>Deu Empate!</strong>`
    }

    if (tesoura.checked == true && sorteio == 2) {
        res.innerHTML = `Os dois jogaram tesoura.<br><strong>Deu Empate!</strong>`
    }

    if (pedra.checked == true && sorteio == 1){
        res.innerHTML = `Você jogou pedra e o computador jogou papel.<br><strong>Computador ganhou!</strong>`
        comp++
        rescomp.innerHTML = comp
    }

    if(pedra.checked == true && sorteio == 2){
        res.innerHTML = `Você jogou pedra e o computador jogou tesoura.<br><strong>Você ganhou!</strong>`
        humano++
        reshumano.innerHTML = humano
    }

    if (papel.checked == true && sorteio == 0){
        res.innerHTML = `Você jogou pedra e o computador jogou tesoura.<br><strong>Você ganhou!</strong>`
        humano++
        reshumano.innerHTML = humano
    }

    if(papel.checked == true && sorteio == 2){
        res.innerHTML = `Você jogou papel e o computador jogou tesoura.<br><strong>Computador ganhou!</strong>`
        comp++
        rescomp.innerHTML = comp
    }

    if(tesoura.checked == true && sorteio == 0){
        res.innerHTML = `Você jogou tesoura e o computador jogou pedra.<br><strong>Computador ganhou!</strong>`
        comp++
        rescomp.innerHTML = comp
    }

    if(tesoura.checked == true && sorteio == 1){
        res.innerHTML = `Você jogou pedra e o computador jogou tesoura.<br><strong>Você ganhou!</strong>`
        humano++
        reshumano.innerHTML = humano
    }

    if(humano == 3){
        reshumano.innerHTML = 3
        alert('Parabéns! Você ganhou no melhor de 3!')
    }else if(comp == 3){
        rescomp.innerHTML = 3
        alert('Que pena, você perdeu no melhor de 3. Tente novamente!')
    }
}


function resetar() {
    reset = window.confirm('Deseja recomeçar?')
   
    if(reset == true){
        document.querySelector('img#computador').src = 'imagens/pc.png'
        document.querySelector('div#res').innerHTML = ''
        humano = 0
        reshumano.innerHTML = humano
        comp = 0
        rescomp.innerHTML = comp
        res.innerHTML = `<h4>Confira o resultado de cada rodada aqui!</h4>`
    } else{
        return false;
    }

}
