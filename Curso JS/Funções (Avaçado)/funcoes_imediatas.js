
// IIFE -> Immediately invoked function expression

// function qualquerCoisa() {
//     console.log("Qualquer");
// }

// qualquerCoisa();

// Ele retorna a função imediatamente sem precisar ir para o escopo global.
(function(idade, peso, altura) {

    const sobrenome = "Freitas";
    function criaNome(nome) {
        return nome + " " + sobrenome;
    }

    function falaNome() {
        console.log(criaNome("Leonardo"));
    }

    falaNome();
    console.log(idade, peso, altura);

})(20, 65, 1.74);

const nome = "Keven";