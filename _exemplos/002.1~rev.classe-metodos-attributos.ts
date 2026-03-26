export { }

class Triangulo {
  lado1: number;
  lado2: number;
  lado3: number;

  constructor(pLado1: number, pLado2: number, pLado3: number) {
    if (
      (pLado1 <= 0 || pLado2 <= 0 || pLado3 <= 0)
      // || (escreva aqui a lógica para verificar se os lados formam um triângulo válido, 
      //   ou seja, a soma de dois lados deve ser maior que o terceiro lado)
    ) {
      throw new Error("O valores não formam um triângulo válido");
    }

    this.lado1 = pLado1;
    this.lado2 = pLado2;
    this.lado3 = pLado3;
  }

  get tipo(): string {
    if (this.lado1 === this.lado2 && this.lado2 === this.lado3) {
      return "equilátero";
    }

    if (this.lado1 === this.lado2 || this.lado2 === this.lado3 || this.lado1 === this.lado3) {
      return "isósceles";
    }

    return "escaleno";
  }

  get perimetro(): number {
    return (this.lado1 + this.lado2 + this.lado3) / 2;
  }

  get area(): number {
    const p = this.perimetro;
    const a = this.lado1;
    const b = this.lado2;
    const c = this.lado3;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return area;
  }
}


const tri1 = new Triangulo(10, 10, 10);
const tri2 = new Triangulo(10, 10, 5);
const tri3 = new Triangulo(10, 5, 6);

tri1.lado1 = 20;
tri1.lado2 = 20;
tri1.lado3 = 20;

console.log(tri1.tipo, tri1.perimetro);
console.log(tri2.tipo, tri2.perimetro);
console.log(tri3.tipo, tri3.perimetro);