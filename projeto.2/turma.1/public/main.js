const containerCadastrar = document.querySelector('.cadastrar');
const inputTarefa = containerCadastrar.querySelector('input');
const btnAdicionar = containerCadastrar.querySelector('button');
const containerTarefas = document.querySelector('.tarefas');
const templateTarefa = containerTarefas.querySelector('template');

function criarTarefa(texto) {
  if (texto.trim() === '') return;
  const tarefa = templateTarefa.content.cloneNode(true);
  const spanTitle = tarefa.querySelector('span');
  const btnExcluir = tarefa.querySelector('button');
  spanTitle.textContent = texto;
  btnExcluir.onclick = () => btnExcluir.closest('.tarefa').remove();
  containerTarefas.appendChild(tarefa);
}

// btnAdicionar.addEventListener('click', () => {})
btnAdicionar.onclick = function () {
  const texto = inputTarefa.value.trim();
  criarTarefa(texto);
  inputTarefa.value = '';
}