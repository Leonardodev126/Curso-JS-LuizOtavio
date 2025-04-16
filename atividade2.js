/*

Atividade: Sistema de Cadastro de Pessoas
Crie um programa em JavaScript que utilize objetos literais, funções fábrica (Factory Functions), funções construtoras (Constructor Functions) e métodos dinâmicos para gerenciar um pequeno sistema de cadastro de pessoas.
*/


/*
Criar um objeto literal chamado pessoaExemplo, com as propriedades nome, sobrenome, idade e um método falarNome() que retorna uma mensagem com o nome da pessoa.
*/
// const pessoaExemplo = {
//     nome: "Leonardo",
//     sobrenome: "Freitas",
//     idade: 21,
//     falarNome() {
//         return this.nome;
//     }
// }

// console.log(pessoaExemplo)
// console.log(pessoaExemplo.falarNome())

// /*
// Criar uma função fábrica (factory function) chamada criaPessoa(), que recebe nome e sobrenome como parâmetros e retorna um objeto com essas propriedades e um método nomeCompleto().
// */

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     }
// }

// // console.log(criaPessoa("Leo", "Freitas"));
// // console.log(criaPessoa.nomeCompleto("Keven", "Sousa"));
// const primeiraPessoa = criaPessoa("Leo", "Freitas");
// console.log(primeiraPessoa.nomeCompleto());


/* 
Criar uma função construtora (constructor function) chamada Pessoa, que recebe nome, sobrenome e idade, atribui esses valores ao objeto e inclui:

Um método falar() que imprime no console "Meu nome é <nome> <sobrenome> e tenho <idade> anos.".

Um método getDataNascimento() que retorna o ano de nascimento com base na idade informada.

*/

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade

    return { 
        falar() {
        return `Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos`;
        },

        getDataNascimento() {
            
        }

        
    }
}

const p1 = new Pessoa("Leonardo", "Sousa", 20);
console.log(p1.falar());
