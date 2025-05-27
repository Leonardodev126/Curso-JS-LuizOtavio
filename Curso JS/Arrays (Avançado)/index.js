
const nomes = ["Eduardo", "Maria", "Leo"];
const novo = [...nomes];
console.log(novo)
nomes[2] = "Leonardinho";
delete nomes[2];
console.log(nomes)

const nomes2 = new Array("Eduardo", "Maria", "Leo");
console.log(nomes2)


const nomes3 = ["Wesley", "Helena", "Israel"];
const removidos = nomes3.pop(); // Remove o item no final
const removidos2 = nomes3.shift(); // Remove o item no começo
const adicionarFinal = nomes3.push("Joãozinho");
const adicionarComeco = nomes3.unshift("Marquinhos");
console.log(nomes3);