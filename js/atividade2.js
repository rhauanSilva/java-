const texto = document.getElementById("texto");
const corTexto = document.getElementById("corTexto");
const corFundo = document.getElementById("corFundo");
const modo = document.getElementById("modo");

// mudar cor do texto
corTexto.addEventListener("click", function() {
    texto.style.color = texto.style.color === "green" ? "yellow" : "green";
});
// mudar fundo
corFundo.addEventListener("click", function() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "yellow" ? "green" : "yellow";
});