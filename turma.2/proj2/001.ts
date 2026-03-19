class Pessoa {
  public nome!: string;
  public idade!: number;
}

const pessoa1 = new Pessoa();
pessoa1.nome = "João";
pessoa1.idade = 30;

const pessoa2 = new Pessoa();
pessoa2.nome = "Maria";
pessoa2.idade = 25;


// function fib(n: number): number {
//   let a = 0;
//   let b = 1;
//   for (let i = 0; i < n; i++) {
//     let r = a + b;
//     a = b;
//     b = r;
//   }
//   return a;
// }

// console.log(fib(10)); // Output: 55