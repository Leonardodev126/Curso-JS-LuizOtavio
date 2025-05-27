
const cores = ["Vermelho", "Verde", "Azul", "Amarelo"];

[cor1, cor2, ...outrasCores] = cores;


console.log(cor1, cor2);
console.log(outrasCores);

const numeros = [10, 20, 30, 40, 50];

[primeiroNumero, , , quartoNumero] = numeros;
console.log(primeiroNumero, quartoNumero);

const matriz = [[1, 2], [3, 4], [5, 6]];
[,[,quatro], [cinco]] = matriz
console.log(quatro);
console.log(cinco);