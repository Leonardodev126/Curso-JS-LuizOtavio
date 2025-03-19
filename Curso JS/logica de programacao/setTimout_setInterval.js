function returnHour() {
    let data = new Date();

    return data.toLocaleTimeString("pt-BR", {
        hour12: false
    });
}
function funcaoDoInterval() {
    console.log(returnHour());
}

// SetInterval mostra os segundos conforme o tempo de milissegundos que eu passar
const timer = setInterval(function () {
    console.log(returnHour());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 3000)

setTimeout(function() {
    console.log("Olá mundo")
}, 5000)

