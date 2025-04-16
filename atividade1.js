
/*
Crie um programa em JavaScript que:

Crie um objeto chamado usuario com as seguintes propriedades:

nome (string)

idade (número)

email (string)

Adicione um método chamado exibirInformacoes() dentro do objeto, que exiba os dados do usuário no console.

Crie pelo menos dois usuários diferentes e chame o método para exibir suas informações.
 */


function usuario(nome, idade, email) {
    return {
        nome,
        idade,
        email,
        exibirInformações() {
            return `${this.nome} ${this.idade} ${this.email}`;
        }
    }
}

const us1 = usuario("Leonardo", 21, "leo.com");
const us2 = usuario("Keven", 20, "keven.com")
console.log(us1.exibirInformações())
console.log(us2.exibirInformações())


const usuario2 = {
    nome: "Leonardo",
    idade: 21,
    email: "leo.com",
    exibirInformações() {
        return `${usuario2.nome} ${usuario2.idade} ${usuario2.email}`;
    }
}

console.log(usuario2)
console.log(usuario2.exibirInformações());


