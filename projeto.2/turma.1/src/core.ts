class Item {
  title: string = "";
}

class List {
  private items: Item[] = [];

  constructor(path: string) {
    this.carregaDadosDoDisco(path);
  }

  private async carregaDadosDoDisco(filePath: string): void {
    const file = Bun.file(filePath);
    const content = await file.text();
    console.log(content)
  }

  // add(item: Item): void {}
  // remove(item: Item): void {}
  // findOneByTitle(title: string): Item | null {}
  // findManyByTitle(title: string): Item[] {}
  // saveToFile(filePath: string): void {}
} 


const comprasMercado = new List("compras-mercado.json");