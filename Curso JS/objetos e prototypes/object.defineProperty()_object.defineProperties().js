

// DefineProperty - defineProperties

function Produto(nome, preco, estoque) {
    // Transformando a variável em pública
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

    // (Objeto que está sendo referenciado(p1 em baixo), propriedade trabalhada, )
    Object.defineProperty(this, "estoque", {
        enumerable: true, // Permite aparecer em loops (ex: for...in, Object.keys),se mostra a chave ou não.
        value: estoque,
        writable: true, // Impede modificação do valor
        configurable: false // Impede a redefinição ou remoção da propriedade
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome,
            writable: true, 
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true, 
            configurable: true
        },
    });
}

const p1 = new Produto("Camiseta", 20, 3);
// p1.estoque = 2000;
p1.nome = "Blazer";
console.log(p1);
// console.log(Object.keys(p1)); // Vendo as chaves do objeto


