export {}

// ----------------------------------------------------------------------------

class Item {
  title: string = "undefined";
  done: boolean = false;
  constructor(title: string) {
    this.title = title;
  }
}

class List {
  items: Array<Item> = [];

  constructor(filePath: string) {
    this.loadFromFile(filePath);
  }
  
  // add(item: Item): void {}
  // remove(item: Item): void {}
  // findOneByTitle(title: string): Item | null {}
  // findManyByTitle(title: string): Item[] {}
  // listAll(): Item[] {}
  // saveToFile(filePath: string): void {}

  private async loadFromFile(filePath: string) {
    try {
      const file = Bun.file(filePath);
      const content = await file.json();
    } catch (error) {
      Bun.write(filePath, "[]");
    }
  }
}

const listaDoMercado = new List("lista.json");