export {}

class Triangulo {
  lado1: number;
  lado2: number;
  lado3: number;

  constructor(pLado1: number, pLado2: number, pLado3: number) {
    this.lado1 = pLado1;
    this.lado2 = pLado2;
    this.lado3 = pLado3;
  }

  tipo(): string {
    return  "????" // ??????
  }

  perimetro(): number {
    return (this.lado1 + this.lado2 + this.lado3) / 2;
  }

  calcularArea(): number {
    const p = this.perimetro();
    const a = this.lado1;
    const b = this.lado2;
    const c = this.lado3;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return area;
  }
}

const tri1 = new Triangulo(9, 7, 14);
console.log(`Área do triângulo 1: ${tri1.calcularArea()}`); // 26.832815729997478








// class TrianguloEquilatero {
//   base: number;
//   altura: number;

//   constructor(base: number, altura: number) {
//     this.base = base;
//     this.altura = altura;
//   }

//   calcularArea(): number {
//     return (this.base * this.altura) / 2;
//   }
// }

// const zzz = new TrianguloEquilatero(5, 10);



// class Retangulo {
//   altura: number = 0;
//   largura: number = 0;

//   constructor(pAltura: number, pLargura: number) {
//     this.largura = pLargura;
//     this.altura = pAltura;
//   }

//   calcularArea(): number {
//     return this.largura * this.altura;
//   }
// }





// const fofinho = new Retangulo(5, 10);
// const pontudo = new Retangulo(30, 3);

// console.log(`Área do retângulo fofinho: ${fofinho.calcularArea()}`);
// console.log(`Área do retângulo pontudo: ${pontudo.calcularArea()}`);