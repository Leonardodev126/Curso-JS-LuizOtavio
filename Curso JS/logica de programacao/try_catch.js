// Try, catch e finally

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números');
    }

    return x + y;
}


try {
    console.log(soma(1, 2))
    console.log(soma(1, '2'))
} catch (error) {
    // console.log(error)
    console.log('Erro ao somar x e y')
}


function returnHour(date) {
    if (date && !(date instanceof Date)) {
        throw new TypeError("Esperando instância de Date.")
    }

    if (!date) {
        date = new Date();
    }

    return date.toLocaleTimeString('pt-BR', {
        
    });
}
try {
    const data = new Date("01-01-1970 12:58:12");
    const hora = returnHour();
    console.log(hora)    
} catch (error) {
    // Tratar o erro
    console.log(error)
} finally {
    // Sempre é executado
    console.log("Tenha um bom dia")
}
