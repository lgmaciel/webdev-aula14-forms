//pegamos uma referência (objeto) para o input "nome"
const txNome = document.querySelector("#txNome")
// e uma referência para cada um dos outros elementos input...
const txEmail = document.querySelector("#txEmail")
const txPergunta1 = document.querySelector("#txPergunta1")
const txPergunta2 = document.querySelector("#txPergunta2")
const txPergunta3 = document.querySelector("#txPergunta3")
const txPergunta4 = document.querySelector("#txPergunta4")

const btLimpar = document.querySelector("#btLimpar")

function limparFormulario() {
    txNome.value = ""
    txEmail.value = ""
    txPergunta1.value = ""
    txPergunta2.value = ""
    txPergunta3.value = ""
    txPergunta4.value = ""
    txNome.focus()
}

btLimpar.addEventListener("click", limparFormulario)