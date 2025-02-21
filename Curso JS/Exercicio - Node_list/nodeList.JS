const paragrafros = document.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);

const backgroundColorbody = estilosBody.backgroundColor;

console.log(backgroundColorbody);

for (let p of paragrafros) {
    p.style.backgroundColor = backgroundColorbody;
    p.style.color = "#FFFFFF";
}

