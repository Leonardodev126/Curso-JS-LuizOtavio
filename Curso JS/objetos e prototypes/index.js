
// Revisando os objetos

const obj1 = {
    nome: "Leonardo",
    sobrenome: "Freitas"
};

console.log(obj1.nome)
console.log(obj1["sobrenome"])


// Outra maneira de criar um objeto

const pessoa1 = new Object();
pessoa1.nome = "Leo";
pessoa1.sobrenome = "Sousa";
// delete pessoa1.sobrenome;
pessoa1.falarNome = function() {
    return(`${this.nome} está falando seu nome.`);
}

console.log(pessoa1)
console.log(pessoa1.falarNome());
