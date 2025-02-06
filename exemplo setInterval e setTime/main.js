function criaHoraDosSegundos(seconds) {
    const data = new Date(seconds * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: "GMT"
    });
}



const relogio = document.querySelector(".relogio")
const buttonIniciar = document.querySelector(".iniciar")
const buttonPausar = document.querySelector(".pausar")
const buttonZerar = document.querySelector(".zerar")
let segundos = 0;
let timer;

// Função responsável por iniciar o relógio
function iniciarRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}


buttonIniciar.addEventListener('click', (event) => {
    iniciarRelogio();
})

buttonPausar.addEventListener('click', (event) => {
    clearInterval(timer);
})

buttonZerar.addEventListener('click', (event) => {
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    segundos = 0;
})

