
// Função construtora -> objetos
// Construtora = Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Atributo privado
    const ID = 123456;
    // Método privado
    const metodoInterno = function() {

    };

    // Atributos e métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log("Sou um método");
    }
}

const p1 = new Pessoa("Leo", "Keven");
const p2 = new Pessoa("Richard", "Pilsen");
console.log(p1.metodo());
// console.log(p2)
// p1.metodo();