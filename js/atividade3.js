const input = document.getElementById("inputTexto");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("lista");

botao.addEventListener("click", function() {

    const valor = input.value;
    if (valor.trim() === "") {
        alert("Digite algo!");
        return;
    }
    const novoItem = document.createElement("li");

    novoItem.textContent = valor;
    lista.appendChild(novoItem);
    input.value = "";
});