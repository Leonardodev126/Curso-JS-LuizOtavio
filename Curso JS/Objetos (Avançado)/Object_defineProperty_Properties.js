

// defineProperty - defineProperties: Defini e congela as propriedades de um objeto

function Produto(nome, preco, estoque) {

    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this, "estoque", {
        enumerable: false, // Mostra a chave
        value: estoque, // Valor da chave
        writable: false, // Se pode alterar
        configurable: false // Se pode apagar ou reconfigurar o objeto (configurável)
    });

    // Object.defineProperties(this, {
    //     nome: {
    //         enumerable: true,
    //         value: nome,
    //         writable: true,
    //         configurable: true

    //     },
    //     preco: {
    //         enumerable: true,
    //         value: preco,
    //         writable: true,
    //         configurable: true
    //     },
    // });
}

const p1 = new Produto("Camiseta", 20, 3);
// console.log(p1)
console.log(Object.keys(p1));
