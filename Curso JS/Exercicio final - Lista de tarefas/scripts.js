
const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

// função para criar uma lista
function criaLi() {
    const li = document.createElement('li');
    return li;
}

// Função para executar comandos quando for clicado o Enter dentro do input
inputTarefa.addEventListener("keypress", function(event) {
    if(event.keyCode === 13) {
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
});

// Função criada para limpar o input ao ser adicionado uma tarefa e também focar no input
function limpaInput() {
    inputTarefa.value = "";
    inputTarefa.focus();
}

// Função destinada para criar o botão apagar logo após a criação do Li
function criaBotaoApagar(li) {
    li.innerText += " ";
    const botaoApagar = document.createElement("button");
    botaoApagar.innerText = "Apagar";
    botaoApagar.classList.add("apagar");
    li.appendChild(botaoApagar);
}

// Função destinada a criar tarefa
function criaTarefa(textInput) {
    const li = criaLi();
    li.innerText = textInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    salvarTarefas();
}

// Observa o evento de click no botão de adicionar tarefa
btnTarefa.addEventListener("click", function() {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    limpaInput();
});


document.addEventListener("click", function(e) {
    const el = e.target;
    
    if(el.classList.contains("apagar")) {
        el.parentElement.remove();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll("li");
    console.log(liTarefas);
}