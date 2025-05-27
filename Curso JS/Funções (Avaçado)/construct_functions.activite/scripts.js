
function Calculadora() {
    this.display = document.querySelector(".display");

    this.inicia = () => {
        this.cliqueBotoes();
        this.capturaenter();
    }

    this.capturaenter = () => {
        document.addEventListener("keypress", (e) => {
            if(e.key === "Enter") this.realizaConta();
        });
    }

    this.cliqueBotoes = () => {
        document.addEventListener("click", (event) => {
            const el = event.target;

            if(el.classList.contains("btn-num")) this.btnDisplay(el);
            if(el.classList.contains("btn-clear")) this.clearDisplay();
            if(el.classList.contains("btn-del")) this.deleteOne();
            if(el.classList.contains("btn-eq")) this.realizaConta();
        });
    }

    this.btnDisplay = (valor) => {
        this.display.value += valor.innerText;
        this.display.focus();
    }
    this.clearDisplay = () => this.display.value = "";
    this.deleteOne = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);
 
            if(!conta) {
                alert("Conta inválida");
                return;
            } 

            this.display.value = conta;

        } catch(e) {
            alert("Conta inválida");
            return;
        }
    }
}

const calculadora = new Calculadora();
calculadora.inicia();