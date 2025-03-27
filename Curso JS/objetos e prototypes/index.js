
// Revisando os objetos

const pessoa = {
    nome: "Leo",
    sobrenome: "Sousa"
};

// Acessando o valor das chaves do objeto
console.log(pessoa.nome);
console.log(pessoa["sobrenome"]);

const chave = "nome";
console.log(pessoa[chave]);

// Criando um objeto com o Constrtutor de objetos
const pessoa1 = new Object();
pessoa1.nome = "Luiz";
pessoa1.sobrenome = "Miranda";
pessoa1.idade = 21;
pessoa1.falarNome = function() {
    return(`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};


// console.log(pessoa1);
console.log(pessoa1.getDataNascimento());
// apagando uma chave
// delete pessoa1.nome;
// console.log(pessoa1);

// Moldes para criar objetos com Factory_function / Constructor functions / Classes

// factory function

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa("Leonardo", "Freitas");
console.log(p1.nomeCompleto);

// Constructor functions

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Travar o objeto e this para não ser possível mais trocar o valor da propriedade
    // Object.freeze(this);
}

const p2 = new Pessoa("Leo", "Sousa");
const p3 = new Pessoa("Keven", "Freitas");
p2.nome = "Leonardo"; // Trocando o valor da propriedade
console.log(p2);
console.log(p3);

