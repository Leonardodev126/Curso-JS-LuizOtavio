const formulario = document.querySelector("#form")

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputPeso = event.target.querySelector("#peso");
    const inputAltura = event.target.querySelector("#altura");
    
    // Pegando o valor dos inputs e convertendo para números
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // Checando o campo de peso
    if (!peso) {
        setResultado("Peso invalido", false);
        alert("Peso não especificado")
        return; // Para a função
    }

    // Checando o campo de altura
    if (!altura) {
        setResultado("Altura inválida", false);
        alert("Altura não especificada")
        return;
    }

    // Calculando o IMC e passando o resultado de acordo com o valor dos campos
    const imc = getImc(peso, altura);
    const nivelIMC = getNivelImc(imc)


    const msg = `Seu imc é ${imc} (${nivelIMC})`

    setResultado(msg, true);
})

// Função para criar parágrafos
function criaParagrafo() {
    const p = document.createElement("p");
    return p
}

function setResultado (message, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";

    const p = criaParagrafo();

    if (isValid) {
        p.classList.add("paragrafo-resultado");
    }  else {
        p.classList.add("bad")
    }

    p.innerHTML = message
    resultado.appendChild(p)
}

// Função que calcula o IMC
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
// Função para fazer a validação do número especificado do IMC
function getNivelImc(imc) {
    const nivel = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];

    if (imc >= 39.9) return nivel[5];

    if (imc >= 34.9) return nivel[4];

    if (imc >= 29.9) return nivel[3];

    if (imc >= 24.9) return nivel[2];

    if(imc >= 18.5) return nivel[1];

    if (imc < 18.5) return nivel[0];
}

