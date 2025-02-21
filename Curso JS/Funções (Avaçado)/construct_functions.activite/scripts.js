function Calculadora() {
    this.display = document.querySelector(".display");

    this.inicia = () =>  {
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        this.display.addEventListener("keypress", (e) => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        })
    }

    this.capturaCliques = () => {
        document.addEventListener("click", (event) => {
            const eventTarget = event.target;

            if(eventTarget.classList.contains("btn-num")) this.addNumDisplay(eventTarget);
            if(eventTarget.classList.contains("btn-clear")) this.clear();
            if(eventTarget.classList.contains("btn-del")) this.del();
            if(eventTarget.classList.contains("btn-eq")) this.realizaConta();
        });
    };

    this.addNumDisplay = (eventTarget) => {
        this.display.value += eventTarget.innerText;
        this.display.focus();
    };

    this.clear = () => this.display.value = "";

    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert("Conta inválida");
                return
            }

            this.display.value = conta;

        } catch (error) {
            alert("Impossivel finalizar a conta");
            return;
        }
    }

}

const calculadora = new Calculadora();
calculadora.inicia();