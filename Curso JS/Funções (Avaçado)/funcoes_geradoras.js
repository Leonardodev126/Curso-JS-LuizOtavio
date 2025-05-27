
function* geradora1() {
    // Código qualquer...
    yield "valor 1";
    // Código qualquer...
    yield "valor 2";
    // Código qualquer...
    yield "valor 3";

}

// const g1 = geradora1();
// // console.log(g1.next().value);

// for (let valor of g1) {
//     console.log(valor);
// }

function* geradora2() {
    yield 0;
    yield 1;
    yield 2;

}

function* geradora3() {
    yield* geradora2();
    yield 3;
    yield 4;
    yield 5;

}

const g3 = geradora3();

for (let valor of g3) {
    console.log(valor)
}

function* geradora4() {
    yield function() {
        console.log("Vim do y1");
    }

    yield function() {
        console.log("Vim do y2");
    }
}

const g4 = geradora4();
const func1 = g4.next().value;
const func2 = g4.next().value;
func1();
func2();