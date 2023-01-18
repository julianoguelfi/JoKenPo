let pedra = document.querySelector('#rpedra')
let papel = document.querySelector('#rpapel')
let tesoura = document.querySelector('#rtesoura')
let reshumano = document.querySelector('#reshumano')
let rescomp = document.querySelector('#rescomp')
let res = document.querySelector('#res')
let button = document.querySelector('#btnjogar')

let humano = 0
let comp = 0

reshumano.innerHTML = humano
rescomp.innerHTML = comp
res.innerHTML = `<p>Confira o resultado de cada rodada <br> <strong>aqui!</strong></p>`

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

    if (pedra.checked == true && sorteio == 1) {
        res.innerHTML = `Você jogou pedra e o computador jogou papel.<br><strong>Computador ganhou!</strong>`
        comp++
        rescomp.innerHTML = comp
    }

    if (pedra.checked == true && sorteio == 2) {
        res.innerHTML = `Você jogou pedra e o computador jogou tesoura.<br><strong>Você ganhou!</strong>`
        humano++
        reshumano.innerHTML = humano
    }

    if (papel.checked == true && sorteio == 0) {
        res.innerHTML = `Você jogou pedra e o computador jogou tesoura.<br><strong>Você ganhou!</strong>`
        humano++
        reshumano.innerHTML = humano
    }

    if (papel.checked == true && sorteio == 2) {
        res.innerHTML = `Você jogou papel e o computador jogou tesoura.<br><strong>Computador ganhou!</strong>`
        comp++
        rescomp.innerHTML = comp
    }

    if (tesoura.checked == true && sorteio == 0) {
        res.innerHTML = `Você jogou tesoura e o computador jogou pedra.<br><strong>Computador ganhou!</strong>`
        comp++
        rescomp.innerHTML = comp
    }

    if (tesoura.checked == true && sorteio == 1) {
        res.innerHTML = `Você jogou pedra e o computador jogou tesoura.<br><strong>Você ganhou!</strong>`
        humano++
        reshumano.innerHTML = humano
    }

    if (humano == 3) {
        res.style.color = "#ff0f0f"
        res.innerHTML = `<p>Parabéns! Você ganhou no melhor de 3. <br>Clique em <b>(Recomeçar)</b> para jogar novamente!</p>`
        button.disabled = true;
    } else if (comp == 3) {
        res.style.color = "#ff0f0f"
        res.innerHTML = `<p>Que pena, você perdeu no melhor de 3. <br>Clique em <b>(Recomeçar)</b> para jogar novamente!</p>`
        button.disabled = true;
    }
}

function resetar() {
    reset = window.confirm('Deseja recomeçar o jogo?')

    if (reset == true) {
        document.querySelector('img#computador').src = 'imagens/pc.png'
        humano = 0
        reshumano.innerHTML = humano
        comp = 0
        rescomp.innerHTML = comp
        button.disabled = false;
        res.style.color = "#000"
        res.innerHTML = `<p>Confira o resultado de cada rodada <br> <strong>aqui!</strong></p>`
    } else {
        return false;
    }
}



