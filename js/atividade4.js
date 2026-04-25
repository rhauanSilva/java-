const input = document.getElementById("inputTexto");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("lista");

botao.addEventListener("click", function () {
    const valor = input.value;
    if (valor.trim() === "") {
        alert("Digite uma tarefa!");
        return;
    }
    const li = document.createElement("li");
    li.textContent = valor;
    li.addEventListener("click", function () {
        li.classList.toggle("concluido");
    });
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
    });
    li.appendChild(btnRemover);
    lista.appendChild(li);
    input.value = "";
});
