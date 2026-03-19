export {}

// ----------------------------------------------------------------------------

class Pessoa {
  nome!: string
  private _anoNasc!: number

  gritarNome() {
    console.log(this.nome.toUpperCase() + "!!!")
  }

  set anoNasc(ano: number) {
    const now = new Date()
    const anoAtual = now.getFullYear()
    if (ano >= anoAtual) {
      throw "Ano de nascimento não pode ser maior que o ano atual"
    }
    this._anoNasc = ano
  }

  get idade() {
    const now = new Date()
    const anoAtual = now.getFullYear()
    return anoAtual - this._anoNasc
  }
}

const p1 = new Pessoa()
p1.nome = 'Maria'
p1.anoNasc = 1990


const p2 = new Pessoa()
p2.nome = 'João'
p2.anoNasc = 1985

console.log(p1.anoNasc);
console.log(p2.anoNasc);
