
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => "Original " + this.nome + " " + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + " " + this.sobrenome;
}

const pessoa1 = new Pessoa("Leo", "O.");
const pessoa2 = new Pessoa("Maria", "O.");

console.dir(pessoa1);
console.dir(pessoa2);