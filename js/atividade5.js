const input = document.getElementById("inputTexto");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("lista");
document.addEventListener("DOMContentLoaded", carregarTarefas);
botao.addEventListener("click", adicionarTarefa);
function adicionarTarefa() {
    const texto = input.value;
    if (texto.trim() === "") {
        alert("Digite uma tarefa!");
        return;
    }
    criarItem(texto, false);
    salvarTarefas();
    input.value = "";
}
function criarItem(texto, concluido) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = texto;
    if (concluido) {
        span.classList.add("concluido");
    }
    span.addEventListener("click", function () {
        span.classList.toggle("concluido");
        salvarTarefas();
    });
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.classList.add("remover");

    btnRemover.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
        salvarTarefas();
    });
    li.appendChild(span);
    li.appendChild(btnRemover);
    lista.appendChild(li);
}
function salvarTarefas() {
    const tarefas = [];
    document.querySelectorAll("#lista li").forEach(li => {
        tarefas.push({
            texto: li.querySelector("span").textContent,
            concluido: li.querySelector("span").classList.contains("concluido")
        });
    });
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}
function carregarTarefas() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.forEach(tarefa => {
        criarItem(tarefa.texto, tarefa.concluido);
    });
} 