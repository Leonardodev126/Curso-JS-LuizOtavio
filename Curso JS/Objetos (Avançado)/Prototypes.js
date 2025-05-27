
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

const pessoa1 = new Pessoa("Leo", "O.");
const pessoa2 = new Pessoa("Maria", "O.");

