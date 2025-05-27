function retornaFuncao() {
    const nome = "Leo";
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao);
