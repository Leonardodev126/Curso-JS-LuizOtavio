/* 
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)
*/

// Ambos apontam pra mesma memória, se mudar um, muda o outro também.
const produto = {nome: "Caneca", preco: 1.8};
// const outraCoisa = produto;
// const outraCoisa = { 
//     ...produto, 
//     material: "porcelana" // É possível criar uma chave na cópia do array
// }; // Outra alternativa é fazer uma cópia com o spread
const outraCoisa = Object.assign({}, produto, { material: "Porcelana"}); // Outra alternativa é fazer uma cópia com Object.assign que também pode adicionar mais chave e produtos

// produto.nome = "Jarra";
// outraCoisa.preco = 2.2
// console.log(outraCoisa);
// console.log(produto);

Object.defineProperty(produto, "nome", {
    writable: false,
    configurable: false
});
// console.log(Object.getOwnPropertyDescriptor(produto, "nome")); // Verifica os dados da propriedade, se é enumerable, writable etc...
// produto.nome = "Carteira";
// produto.preco = 5.5;
// console.log(produto);

// Object.values e .values
console.log(Object.values(produto));
console.log(Object.keys(produto));
console.log(Object.entries(produto));