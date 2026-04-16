class Personagem {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }
}


// CLI - command line interface
// TUI - text user interface
// GUI - graphical user interface

// <stage> 1

// const listaPersonagens: Personagem[] = [];

// while (true) {
//   const nome = prompt("Digite o nome do personagem (ou 'sair' para encerrar):");

//   if (nome === null) {
//     console.error("[error] Entrada inválida. Por favor, tente novamente.");
//     continue;
//   }

//   if (nome === 'sair') {
//     break;
//   }

//   const personagem = new Personagem(nome);
//   listaPersonagens.push(personagem);
//   console.log(`Personagem "${personagem.nome}" adicionado à lista!`);
// }

// console.clear();
// for (const personagem of listaPersonagens) {
//   console.log(`- ${personagem.nome}`);
// }

// console.log("See you space cowboy!");




// <stage> 2

const listaPersonagens: Personagem[] = [];

function menu() {
  console.clear();
  console.log("=== Menu ===");
  console.log("1. Adicionar personagem");
  console.log("2. Listar personagens");
  console.log("3. Sair");
}

function adicionarPersonagem() {
  console.clear();
  console.log("=== Adicionar Personagem ===");
  
  const nome = prompt("Digite o nome do personagem:");
  
  if (nome === null) {
    console.error("[error] Entrada inválida. Por favor, tente novamente.");
    return;
  }

  const personagem = new Personagem(nome);
  listaPersonagens.push(personagem);
  console.log(`Personagem "${personagem.nome}" adicionado à lista!`);
}

function listarPersonagens() {
  console.clear();
  console.log("=== Lista de Personagens ===");
  
  if (listaPersonagens.length === 0) {
    console.log("Nenhum personagem adicionado ainda.");
    return;
  }

  for (const personagem of listaPersonagens) {
    console.log(`- ${personagem.nome}`);
  }
}

while (true) {
  menu();
  const escolha = prompt("Escolha uma opção:");
  
  if (escolha === null) {
    console.error("[error] Entrada inválida. Por favor, tente novamente.");
    continue;
  }

  if (escolha === '1') {
    adicionarPersonagem();
    continue;
  }

  if (escolha === '2') {
    listarPersonagens();
    prompt("Pressione Enter para voltar ao menu...");
    continue;
  }

  if (escolha === '3') {
    console.log("See you space cowboy!");
    break;
  }
}