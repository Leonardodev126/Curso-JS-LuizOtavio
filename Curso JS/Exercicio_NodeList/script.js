
const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body); // Pegando os estilos do documento
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for(let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = "#FFFFFF";
}

