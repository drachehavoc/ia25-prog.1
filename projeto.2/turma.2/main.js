const containerAdicionar = document.querySelector('.adicionar')
const btnAdicionar = containerAdicionar.querySelector('button')
const inputAdicionar = containerAdicionar.querySelector('input')
const containerTarefas = document.querySelector('.tarefas')
const templateTarefa = containerTarefas.querySelector('template')

function criarTarefa(texto) {
  if (texto.trim() === '') return
  const tarefa = templateTarefa.content.cloneNode(true)
  const spanTitle = tarefa.querySelector('span')
  const btnExcluir = tarefa.querySelector('button')
  spanTitle.textContent = texto
  containerTarefas.appendChild(tarefa)
  btnExcluir.addEventListener('click', () => btnExcluir.closest('.tarefa').remove())
}

btnAdicionar.addEventListener('click', () => {
  const texto = inputAdicionar.value.trim()
  criarTarefa(texto)
  inputAdicionar.value = ''
})

inputAdicionar.addEventListener('keypress', (evt) => {
  if (evt.key !== 'Enter') return;
  btnAdicionar.click()
})