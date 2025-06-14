// Try, catch e finally

// function soma(x, y) {
//     if(typeof x !== "number" || typeof y !== "number") {
//         throw new Error("x e y precisam ser números");
//     }
//     return x + y;
// }

// try {
//     console.log(soma(1, 2));
//     console.log(soma('1', 2));
// } catch(error) {
//     // console.log(error);
//     console.log("Error, retorne a tela principal!");
//     // console.log(error);
// }


// try {
//     // Parte do código executada quando não há erros
//     console.log("Abri um arquivo");
//     console.log("Manipulei o arquivo e gerou erro");
//     console.log("Fechei o arquivo");

// } catch (error) {
//     // Parte do código executada quando há erros
//     console.log("Tratando o erro");
// } finally {
//     // Executado sempre
//     console.log("Sempre executado")
// }

function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError("Esperando instância de Date.");
    }

    if(!data) {
        data = new Date(); 
    }

    return data.toLocaleTimeString("pt-BR", {
        hour12: false
    });
}

try {
    const data = new Date("01-01-1970 12:58:12");
    const hora = retornaHora(11);
    console.log(hora);
} catch(error) {
    // Tratar erro
    console.log(error);
} finally {
    console.log("Tenha um bom dia!");
}
