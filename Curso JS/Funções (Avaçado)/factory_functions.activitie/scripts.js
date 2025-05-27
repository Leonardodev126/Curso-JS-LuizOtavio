// Factory funciton
function criaCalculadora() {
    return {
        display: document.querySelector(".display"),

        inicia() {
            this.cliqueBotoes();
            this.pressEnter();

        },

        pressEnter() {
            this.display.addEventListener("keyup", (event) => {
                if(event.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        cliqueBotoes() {
            document.addEventListener("click", (event) => {
                const el = event.target;

                if(el.classList.contains("btn-num")) this.btnParaDisplay(el.innerText);

                if(el.classList.contains("btn-clear")) this.clearDisplay();

                if(el.classList.contains("btn-del")) this.deleteOne();

                if(el.classList.contains("btn-eq")) this.realizaConta();
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = "";
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta) {
                    alert("Conta inválida");
                    return;
                }
                // Se não retorne isso
                this.display.value = conta;

            } catch(e) {
                alert("Conta inválida");
                return;
            }
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();