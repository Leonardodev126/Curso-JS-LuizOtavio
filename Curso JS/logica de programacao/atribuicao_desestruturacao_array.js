let a = "A";
let b = "B";
let c = "C";

// Atribuição via desestruturação
const letras = [b, c, a];
// [a, b, c] = [1, 2, 3];
[a, b, c] = letras;
console.log(a, b, c);

console.log(numeros);

// ...rest = resto, ...spread = espalha
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [primeiroNumero, segundoNumero, ...resto] = numeros2;

console.log(primeiroNumero, segundoNumero);

console.log(resto);

const atribuicao_com_desestruturação = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];

// console.log(numeros2[1][2]);

const [,[,,seis]] = atribuicao_com_desestruturação;

console.log(seis)


// atribuição via desestruturação com objetos

const pessoa = {
    // nome: "Luiz",
    sobrenome: "Ferreira",
    idade: 30,
    endereco: {
        rua: "Av Brasil",
        numero: 320
    }
};

const { nome = "Não existe", sobrenome } = pessoa;
console.log(nome, sobrenome);
// console.log(pessoa.endereco);
