// Fábrica de funções

function criaCalculadora() {
    return {
        // Atributos
        display: document.querySelector(".display"),
        btnClear: document.querySelector(".btn-clear"),

        // Métodos
        inicia() {
            this.cliqueBotoes()
            this.pressionaEnter()
        },
        // Método para fazer a conta ao clicar no Enter
        pressionaEnter() {
            this.display.addEventListener("keyup", (event) => {
                if(event.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },
        cliqueBotoes() {
            document.addEventListener("click", function(event) {
                const el = event.target;

                if (el.classList.contains("btn-num")) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains("btn-clear")) {
                    this.clearDisplay();
                }

                if (el.classList.contains("btn-del")) {
                    this.apagaUm();
                }

                if (el.classList.contains("btn-eq")) {
                    this.realizaConta();
                }

            }.bind(this)); // Aqui estou colocando apontando o this para minha calculadora que é o objeto
        },
        btnParaDisplay(valor) {
         this.display.value += valor;
        },
        clearDisplay() {
            this.display.value = "";
        },
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },
        realizaConta() {
            let conta = this.display.value;

            try {
               conta = eval(conta);

                if(!conta) {
                    alert("Conta Inválida");
                    return
                }

                this.display.value = String(conta);
            } catch (error) {
                alert("Conta inválida");
                return
            }
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
