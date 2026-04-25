const form = document.querySelector("form");
const resp1 = document.querySelector("#outMedia");
const resp2 = document.querySelector("#outSituacao");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    const nome = form.nome.value;
    const nota1 = Number(form.nota1.value);
    const nota2 = Number(form.nota2.value);

    const media = (nota1 + nota2) / 2;
    resp1.innerText = `${nome}, a sua média é: ${media.toFixed(2)}`;

    if (media >= 7){
        resp2.innerText = `Parabéns, você foi aprovado(a). `;
        resp2.style.color = "green";
    } else{
        resp2.innerText = `Você foi reprovado(a).`;
        resp2.style.color = "red";
    }
});