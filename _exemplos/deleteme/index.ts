class Personagem {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }
}

// <stage> 0

// const listaPersonagens: Personagem[] = [
//   new Personagem("Alice"),
//   new Personagem("Bob"),
//   new Personagem("Charlie"),
//   new Personagem("Diana"),
//   new Personagem("Eve"),
//   new Personagem("Frank"),
//   new Personagem("Grace"),
//   new Personagem("Heidi"),
//   new Personagem("Ivan"),
//   new Personagem("Judy"),
// ]

// for (const personagem of listaPersonagens) { 
//   console.log('- ', personagem.nome);
// }

// <stage> 1

// const listaPersonagens: Personagem[] = [];

// while (true) {
//   const nome = prompt("Digite o nome do personagem (ou 'sair' para encerrar):");

//   if (nome === null) {
//     console.log("[erro] Nome inválido.");
//     continue;
//   } 

//   if (nome.toLowerCase() === "sair") {
//     break;
//   }

//   const novoPersonagem = new Personagem(nome);
//   listaPersonagens.push(novoPersonagem);
//   console.log(`Personagem "${novoPersonagem.nome}" adicionado à lista.`);
// }

// for (const personagem of listaPersonagens) {
//   console.log('- ', personagem.nome);
// }

// console.log("See you later space cowboy...");

// <stage> 2

const listaPersonagens: Personagem[] = [];

function mostrarMenu() {
  console.clear();
  console.log("======= Menu =======");
  console.log("1. Adicionar personagem");
  console.log("2. Listar personagens");
  console.log("3. Sair");
  return prompt("Escolha uma opção:");
}

function adicionarPersonagem() {
  const nome = prompt("Digite o nome do personagem:");
  
  if (nome === null) {
    prompt("Nome inválido. Pressione Enter para continuar.");
    return;
  }

  const novoPersonagem = new Personagem(nome);
  listaPersonagens.push(novoPersonagem);
}

function listarPersonagens() {
  console.clear();
  console.log("======= Lista de Personagens =======");

  if (listaPersonagens.length === 0) {
    console.log("Nenhum personagem adicionado.");
    prompt("Pressione Enter para continuar.");
    return;
  }

  for (const personagem of listaPersonagens) {
    console.log('- ', personagem.nome);
  }

  prompt("Pressione Enter para continuar.");
}

while (true) {
  const opcao = mostrarMenu();

  if (opcao === null) {
    console.log("[erro] Opção inválida.");
    continue;
  }

  if (opcao === "1") {
    adicionarPersonagem();
    continue;
  }

  if (opcao === "2") {
    listarPersonagens();
    continue;
  }

  if (opcao === "3") {
    console.log("See you later space cowboy...");
    process.exit(0);
  }

  prompt("[erro] Opção inválida. pressione Enter para continuar.");
}