
// Getter e Steers
function Produto(nome, preco, estoque) {

    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

    let estoquePrivado = estoque;
    Object.defineProperty(this, "estoque", {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== "number") {
                throw new TypeError("Unknown value"); // Está levantando um problema se a condição for satisfeita
            }


            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1)
p1.estoque = "Mudando o valor com setter";
console.log(p1.estoque)