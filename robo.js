const imgRobo = document.querySelector("#imgRobo"); // <img>
const nomeRobo = document.querySelector("#nomeRobo"); // <figcaption>

const nomesRobos = [
    "huguinho",
    "zezinho",
    "luizinho",
    "tio patinhas",
    "margarida",
    "pato donald"
]
i=0

function trocaRobo() {
    const valorAleatorio = nomesRobos[i]
    imgRobo.src = "https://robohash.org/"+valorAleatorio
    nomeRobo.innerText = valorAleatorio

    i++
    if(i== nomesRobos.length) {
        i=0
    }
}

imgRobo.addEventListener("click", trocaRobo)