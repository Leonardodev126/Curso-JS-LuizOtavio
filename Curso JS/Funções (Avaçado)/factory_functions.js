
// Fábrica de funções

// Factory function
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome} `;
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(" ");
            this.nome = valor.shift();
            this.sobrenome = valor.join(" ");
            console.log(valor);
        },
        fala(assunto) {
            return `${nome} está ${assunto}`;
        },
        altura: a,
        peso: p,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa("Leo", "Keven", 1.75, 65);
// console.log(p1.imc);
// console.log(p1.fala("Falando sobre sucesso"));
// console.log(p1.imc);

// Constructor function
p1.nomeCompleto = "Leonardo Keven Freitas";
console.log(p1.nomeCompleto);