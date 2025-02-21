// Parâmetros da função


function funcao(value) {
    console.log(value);
}

funcao("valor2");

// Argumentos que sustenta todos os argumentos enviados
// function funcao2() {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total);
// }

// funcao2(1, 2, 3, 5, 7, 9);


// function funcao2(a, b = 2, c = 3) {
//     console.log(a + b + c);

// }

// funcao2(6, 20);

function funcao3({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)

}

funcao3({ nome: "Leo", sobrenome: "Freitas", idade: 24});