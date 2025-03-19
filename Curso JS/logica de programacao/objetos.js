// const pessoa1 = {
//     nome: "Luciano",
//     sobrenome: "Magno",
//     idade: 43
// };
// console.log(pessoa1.nome)

// Factory - Função fábrica de objetos
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
};
    // return { nome, sobrenome, idade };



const pessoa1 = criaPessoa("Leo", "Freitas", 20);
console.log(pessoa1.nome)

const pessoa2 = criaPessoa("Keven", "Sousa", 21);
console.log(pessoa2.nome)

const pessoa3 = criaPessoa("Renan", "Moreira", 16);
console.log(pessoa3.nome)

console.log(pessoa1)

