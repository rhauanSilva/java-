const botao = document.getElementById("botao");
const titulo = document.getElementById("titulo");

botao.addEventListener("click", function() {
    titulo.textContent = "receba inteligencia 🔄";

    botao.classList.add("animar");

    setTimeout(() => {
        botao.classList.remove("animar");
    }, 500);
});