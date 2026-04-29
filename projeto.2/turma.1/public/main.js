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
  containerTarefas.appendChild(tarefa);
  // não feito aula passada
  btnExcluir.onclick = function () {
    this.closest('.tarefa').remove();
  }
}

// btnAdicionar.addEventListener('click', () => {})
btnAdicionar.onclick = function () {
  const texto = inputTarefa.value.trim();
  criarTarefa(texto);
  // não feito aula passada
  inputTarefa.value = '';
}