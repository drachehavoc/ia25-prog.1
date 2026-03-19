class Pessoa {
  nome!: string
  _anoNasc!: number
  telefone!: string

  set anoNasc(ano: number) {
    const now = new Date()
    const anoAtual = now.getFullYear()
    if (ano >= anoAtual) {
      throw 'Ano de nascimento não pode ser no futuro'
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
p1.telefone = '123456789'

const p2 = new Pessoa()
p2.nome = 'João'
p2.anoNasc = 1985
p2.telefone = '987654321'

console.log(p2.idade)