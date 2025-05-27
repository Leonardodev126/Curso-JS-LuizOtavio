
// SetInterval para controlar times

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString("pt-BR", {
        hour12: false
    });
}


// SetInterval vai configurar um intervalo de tempo para que alguma função seja executada em determinado momento
// Ele é executado a cada 2 segundos por exemplo, se você colocar esse tempo de segundos
const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

// setTimeout executa apenas uma vez
setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log("Terminando o tempo");
}, 5000);