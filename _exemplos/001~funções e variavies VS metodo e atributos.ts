export {}

// ----------------------------------------------------------------------------

console.log('# Exemplo: função e variavel')

function soma(a: number, b: number) {
  return a + b
}

let x = soma(20, 30)
console.log(x)

let y = soma(30, 30)
console.log(y)

// ----------------------------------------------------------------------------

console.log("# Exemplo: método e atributo");


class Z {
  resultado: number = 0

  soma(a: number, b: number) {
    this.resultado =  a + b
  }

  adicionaUm() {
    this.resultado++
  }  
}

const z1 = new Z()
const z2 = new Z()

z1.soma(90, 10)
z1.adicionaUm()

z2.adicionaUm()

console.log(z1.resultado)
console.log(z2.resultado)