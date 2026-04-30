const containerCadastrar = document.querySelector('.cadastrar');
const inputTarefa = containerCadastrar.querySelector('input');
const btnAdicionar = containerCadastrar.querySelector('button');
const containerTarefas = document.querySelector('.tarefas');
const templateTarefa = containerTarefas.querySelector('template');

function carregarTarefas() {
  const stringTarefas = localStorage.getItem('tarefas');
  const arrayTarefas = JSON.parse(stringTarefas) || [];
  arrayTarefas.forEach(criarTarefa);
}

function salvarTarefas() {
  const nodeListTarefas = containerTarefas.querySelectorAll(':scope > .tarefa span');
  const arrayTarefas = Array.from(nodeListTarefas).map(el => el.textContent); 
  const stringTarefas = JSON.stringify(arrayTarefas);
  localStorage.setItem('tarefas', stringTarefas);
}

function criarTarefa(texto) {
  if (texto.trim() === '') return;
  const tarefa = templateTarefa.content.cloneNode(true);
  const spanTitle = tarefa.querySelector('span');
  const btnExcluir = tarefa.querySelector('button');
  spanTitle.textContent = texto;
  btnExcluir.addEventListener('click', () => {
    btnExcluir.closest('.tarefa').remove();
    salvarTarefas();
  });
  containerTarefas.appendChild(tarefa);
  salvarTarefas();
}

btnAdicionar.addEventListener('click', () => {
  const texto = inputTarefa.value.trim();
  criarTarefa(texto);
  inputTarefa.value = '';
});

inputTarefa.addEventListener('keypress', (event) => {
  if (event.key !== 'Enter') return;
  btnAdicionar.click();
})

carregarTarefas();