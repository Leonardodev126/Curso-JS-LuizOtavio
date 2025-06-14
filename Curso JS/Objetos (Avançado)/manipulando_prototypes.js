
const objA = {
    chaveA: "A"
};

const objB = {
    chaveB: "B"
};

Object.setPrototypeOf(objB, objA); // Agora o objA é pai do ObjB e o object.prototype é pai dos dois

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto("Camiseta", 50);
// p1.desconto(100);
p1.aumento(100);
console.log(p1);