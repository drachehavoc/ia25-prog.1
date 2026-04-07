# Programação 1 - Programação Orientada a Objetos (POO)

## O que é POO?

É um paradigma de programação que se baseia na abstração do mundo real, utilizando o conceito de objetos, que são instâncias de classes. As classes, por sua vez, representam categorias ou modelos de entidades do mundo real. 

A POO permite organizar o código de forma mais modular e reutilizável, facilitando a manutenção e a evolução do sistema, além de ajudar na modelagem de problemas complexos.

## Conceitos fundamentais da POO

- Classe
- Objeto
- Atributo
- Método
- Encapsulamento
- Herança
- Polimorfismo

## Conhecimento prévio necessário

- Noções básicas de programação
- Programação estruturada
- Variáveis e tipos de dados
- Funções e procedimentos
- Estruturas de controle (if, for, while, etc.)

## Programação Estruturada (PE) vs Programação Orientada a Objetos (POO)

Na programação estruturada, o foco está na criação de funções e procedimentos que manipulam dados. Já na programação orientada a objetos, o foco está na criação de objetos que combinam dados (atributos) e comportamentos (métodos).

| PE vs POO              | Programação Estruturada                              | Programação Orientada a Objetos                                                             |
| ---------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Variáveis vs Atributos | Variáveis são usadas para armazenar dados.           | Atributos armazenam dados dentro de um objeto ou classe.                                    |
| Funções vs Métodos     | Funções são blocos de código que realizam uma tarefa | Métodos são funções associadas a um objeto ou classe e podem acessar seus atributos.        |

A tabela acima apresenta algumas comparações entre programação estruturada e programação orientada a objetos. No entanto, é importante destacar que a POO possui conceitos que não têm equivalentes diretos na programação estruturada, como encapsulamento, herança e polimorfismo. 

Além disso, os próprios conceitos de classe e objeto são fundamentais na POO e não possuem equivalentes diretos na programação estruturada.

## Classe e Objeto

**Classe**: é um molde ou uma estrutura que define as características e comportamentos de um tipo específico de objeto. Ela serve como um modelo para criar objetos. 

É possível pensar em uma classe como um plano ou projeto que descreve como os objetos devem ser criados e como devem se comportar. Ou seja, ela reside no nível da abstração, onde definimos características e comportamentos comuns a um grupo de objetos.

**Objeto**: é uma instância de uma classe (ou seja, uma "materialização" da classe). Ele possui as características e comportamentos definidos pela classe. Cada objeto pode ter valores diferentes para os atributos definidos na classe.

> 🧩 **Analogia**
> ---
> A Programação Estruturada é como uma receita de bolo, onde você tem uma lista de ingredientes (variáveis) e um conjunto de instruções (funções) para preparar o bolo.  
> Já a Programação Orientada a Objetos é como um conjunto de peças de LEGO, onde cada peça representa um objeto com suas próprias características (atributos) e comportamentos (métodos), que podem ser combinadas para construir algo mais complexo.

### A referência `this` dentro da classe

Antes de continuar, é importante apresentar a palavra reservada `this`.

O `this` é utilizado dentro de classes para referenciar o objeto atual, ou seja, a instância que está sendo manipulada no momento. Ele permite acessar atributos e métodos do objeto mesmo ainda dentro da definição da classe.

Considere o seguinte código: `const minhaReferencia = new MinhaClasse();`.

O lado esquerdo do `=` representa a variável (ou constante) que irá armazenar a referência para o objeto criado a partir da classe `MinhaClasse` (neste caso, a referência será armazenada na constante chamada `minhaReferencia`). Já o lado direito do `=` é a expressão responsável por criar esse objeto, utilizando a palavra-chave `new` seguida do nome da classe.

Quando `new MinhaClasse()` é executado, um novo objeto é criado na memória e sua referência é retornada. Essa referência é então atribuída à variável `minhaReferencia`.

Por este motivo, dentro da classe, o `this` é utilizado para se referir a essa instância específica do objeto que está sendo manipulada. Ele permite acessar e manipular seus atributos e métodos. Por exemplo, dentro de um método da classe, ao usar `this.atributo`, estamos acessando o atributo pertencente ao objeto que está sendo utilizado naquele momento, veja que enquanto a classe está sendo definida não é possível saber qual será o nome da variável que irá armazenar a referência do objeto criado a partir da classe, por isso usamos `this` para referenciar o objeto atual, independentemente do nome da variável utilizada para armazenar sua referência no futuro.

*Mas por que usamos `this` e não o nome da variável (como `minhaReferencia`)?*

Isso acontece porque o nome da variável é definido fora da classe, e a classe não tem conhecimento sobre qual nome será utilizado. Podemos, por exemplo, criar vários objetos com nomes diferentes:

```typescript
const a = new MinhaClasse();
const b = new MinhaClasse();
const c = new MinhaClasse();
```

Dentro da classe, não faria sentido usar `a`, `b` ou `c`, pois esses nomes só existem fora dela.

Por isso, usamos `this`, que sempre faz referência ao objeto atual, independentemente do nome da variável utilizada.

> **📝 Recapitulando:**
>
> |                                              `const minhaReferencia` | `=` | `new MinhaClasse()`                                                                                                                     |
> | -------------------------------------------------------------------: | :-: | :-------------------------------------------------------------------------------------------------------------------------------------- |
> | Variável (ou constante) à qual a referência do objeto será atribuída |  ←  | Criação de um objeto a partir da classe `MinhaClasse`. A expressão retorna a referência do objeto criado, que será atribuída à variável, aqui `minhaReferencia` ainda não foi definida, por isso usamos `this` dentro da classe para referenciar o objeto atual, independentemente do nome da variável utilizada para armazenar sua referência no futuro.


## Prática: Exemplo de classe e objetos em TypeScript

Imagine que queremos criar uma classe para representar quadriláteros, que são figuras geométricas com quatro lados. Podemos definir uma classe `Quadrilatero` com atributos para os lados e métodos para calcular a área, o perímetro e verificar se é um quadrado.

```typescript
class Quadrilatero {
  lado1: number;
  lado2: number;

  calcularArea(): number {
    return this.lado1 * this.lado2;
  }

  calcularPerimetro(): number {
    return 2 * (this.lado1 + this.lado2);
  }

  eQuadrado(): boolean {
    return this.lado1 === this.lado2;
  }
}
```

Então, para criar objetos a partir de uma classe, é necessário instanciá-la usando a palavra-chave `new`. O objeto resultante deve ser associado a uma variável ou constante para que você possa acessar seus atributos e métodos.

veja o exemplo abaixo, onde criamos objetos do tipo `Quadrilatero` e definimos valores para seus atributos, além de acessar seus métodos para calcular a área e verificar se é um quadrado:

```typescript
// Cria um objeto do tipo Quadrilatero e associa a uma constante q1
const q1 = new Quadrilatero(); 

// Atribui valor ao atributo lado1 do objeto (Quadrilatero) q1
q1.lado1 = 5;

// Atribui valor ao atributo lado2 do objeto (Quadrilatero) q1
q1.lado2 = 10;

// Cria outro objeto do tipo Quadrilatero e associa a uma constante q2
const q2 = new Quadrilatero();

// Atribui valor ao atributo lado1 do objeto (Quadrilatero) q2
q2.lado1 = 7;

// Atribui valor ao atributo lado2 do objeto (Quadrilatero) q2
q2.lado2 = 7;

// Acessa o método calcularArea do objeto q1 e imprime o resultado
console.log(q1.calcularArea()); // Saída: 50

// Acessa o método eQuadrado do objeto q1 e imprime o resultado
console.log(q1.eQuadrado()); // Saída: false

// Acessa o método calcularArea do objeto q2 e imprime o resultado
console.log(q2.calcularArea()); // Saída: 49

// Acessa o método eQuadrado do objeto q2 e imprime o resultado
console.log(q2.eQuadrado()); // Saída: true
```

Note que no exemplo acima, criamos dois objetos do tipo `Quadrilatero` (q1 e q2) e atribuímos valores diferentes para seus atributos. Em seguida, acessamos o método `calcularArea()` de cada objeto distinto para obter a área correspondente. O resultado é diferente para cada objeto, demonstrando que cada objeto tem seus próprios valores de atributos lado1 e lado2, mesmo que ambos sejam instâncias da mesma classe `Quadrilatero`. Isso é um dos principais conceitos da POO: cada objeto é uma instância única de uma classe, com seus próprios dados e comportamentos.

> [!NOTE]
> O exemplo acima é apenas uma ilustração básica de como criar objetos a partir de uma classe e acessar seus métodos. Em um cenário real, é comum uso de diversas outras funcionalidades da POO, mas para fins de compreensão, o exemplo foi mantido o mais simples possível.


> [!Nota]
> O acesso aos atributos e métodos de um objeto é feito utilizando a notação de ponto (`.`). Por exemplo, `q1.lado1` acessa o atributo `lado1` do objeto `q1`, e `q1.calcularArea()` chama o método `calcularArea()` do mesmo objeto. Essa notação é fundamental para interagir com os objetos criados a partir de uma classe.

> **📝 Recapitulando:**
>
> |            |  Descrição   |
> | ---------- | ------------ |
> | `classe`   | molde ou estrutura que define as características e comportamentos de um tipo específico de objeto. |
> | `objeto`   | instância de uma classe, que possui as características e comportamentos definidos pela classe. |
> | `atributo` | variável que pertence a um objeto/classe e armazena informações sobre o objeto. |
> | `método`   | função que pertence a um objeto/classe e define um comportamento que o objeto pode realizar. |


## Construtor

O construtor é um método especial de uma classe que é chamado automaticamente quando um objeto é criado a partir dessa classe. Ele é usado para inicializar os atributos do objeto e pode receber parâmetros para configurar o estado inicial do objeto. O construtor é definido usando a palavra-chave `constructor` e pode ser sobrecarregado para permitir diferentes formas de criar objetos.

Logo após o uso do `new` para criar um objeto, o construtor é executado, isso permite que o objeto seja manipulado antes mesmo de ser referenciado por uma variável ou constante. Por exemplo:

```typescript
class Pessoa {
  nome: string;
  idade: number;

  constructor(paramNome: string, paramIdade: number) {
    this.nome = paramNome;
    this.idade = paramIdade;
  }
}
```

No exemplo acima, a classe `Pessoa` possui um construtor que recebe dois parâmetros (`paramNome` e `paramIdade`) para inicializar os atributos `nome` e `idade` do objeto. Quando criamos um objeto do tipo `Pessoa`, o construtor é chamado automaticamente para configurar o estado inicial do objeto:

```typescript
const pessoa1 = new Pessoa("Alice", 30);
console.log(pessoa1.nome); // Saída: Alice
console.log(pessoa1.idade); // Saída: 30
```

Sem o construtor, teríamos que criar o objeto e depois atribuir os valores aos atributos, o que seria menos eficiente e mais propenso a erros. O construtor garante que o objeto seja criado em um estado válido desde o início.

Neste caso não faz sentido criar um objeto do tipo `Pessoa` sem fornecer um nome e uma idade, por isso o construtor é essencial para garantir que o objeto seja criado com as informações necessárias.

Considere o exemplo do `Quadrilatero` que vimos anteriormente. Não faz sentido criar um objeto do tipo `Quadrilatero` sem fornecer os valores dos lados, pois isso resultaria em um objeto incompleto e sem funcionalidade. Para resolver isso, podemos definir um construtor na classe `Quadrilatero` que exija os valores dos lados no momento da criação do objeto:

```typescript
class Quadrilatero {
  lado1: number;
  lado2: number;

  constructor(paramLado1: number, paramLado2: number) {
    this.lado1 = paramLado1;
    this.lado2 = paramLado2;
  }

  calcularArea(): number {
    return this.lado1 * this.lado2;
  }

  calcularPerimetro(): number {
    return 2 * (this.lado1 + this.lado2);
  }

  eQuadrado(): boolean {
    return this.lado1 === this.lado2;
  }
}
```

Agora a construção do objeto `Quadrilatero` exige que os valores dos lados sejam fornecidos, garantindo que o objeto seja criado em um estado válido e funcional:

```typescript
const q1 = new Quadrilatero(5, 10);
console.log(q1.calcularArea()); // Saída: 50
console.log(q1.calcularPerimetro()); // Saída: 30
console.log(q1.eQuadrado()); // Saída: false

const q2 = new Quadrilatero(7, 7);
console.log(q2.calcularArea()); // Saída: 49
console.log(q2.calcularPerimetro()); // Saída: 28
console.log(q2.eQuadrado()); // Saída: true
```

> [!Nota]
> Nos exemplos acima, o construtor é utilizado para garantir que os objetos sejam criados com os valores necessários para que possam funcionar corretamente. Mas vale ressaltar que o construtor permite a execução de qualquer código necessário para configurar o estado inicial do objeto, não se limitando apenas à atribuição de valores aos atributos. Ele pode incluir validações, chamadas a outros métodos, ou qualquer lógica necessária para garantir que o objeto seja criado em um estado consistente e funcional.

> [!Nota]
> A omissão do construtor em uma classe não impede a criação de objetos a partir dessa classe, mas pode resultar em objetos incompletos ou sem funcionalidade, dependendo do contexto. Se a classe não tiver um construtor definido, o TypeScript fornecerá um construtor padrão que não recebe parâmetros e não inicializa os atributos. Isso pode ser problemático se os atributos forem essenciais para o funcionamento do objeto, pois eles permanecerão indefinidos ou com valores padrão (como `undefined` para tipos primitivos), o que pode levar a erros durante a execução do programa.

## Herança

Com a finalidade de promover a reutilização de código e estabelecer relações hierárquicas entre classes, a POO utiliza o conceito de herança. A herança permite que uma classe (chamada de classe filha ou subclasse) herde atributos e métodos de outra classe (chamada de classe pai ou superclasse). Isso significa que a subclasse pode usar e modificar os comportamentos definidos na superclasse, além de adicionar seus próprios atributos e métodos.

Considerando o exemplo da classe `Quadrilatero`, podemos criar uma subclasse chamada `Quadrado` que herda os atributos e métodos de `Quadrilatero`, mas também adiciona suas próprias características específicas:

```typescript
class Quadrado extends Quadrilatero {
  constructor(paramLado: number) {
    // Chama o construtor da classe pai (Quadrilatero) 
    // para inicializar os lados
    super(paramLado, paramLado); 
  }

  eQuadrado(): boolean {
    // Um quadrado é sempre um quadrilátero, mas um quadrilátero 
    // nem sempre é um quadrado
    return true; 
  }
}
```

Neste exemplo de herança, a classe `Quadrado` estende a classe `Quadrilatero`, o que significa que ela herda os atributos `lado1` e `lado2`, bem como os métodos `calcularArea()`, `calcularPerimetro()` e `eQuadrado()`. No entanto, a classe `Quadrado` redefine o método `eQuadrado()` para sempre retornar `true`, e o construtor recebe apenas um parâmetro (o lado do quadrado) e chama o construtor da classe pai usando `super(paramLado, paramLado)`, fazendo com que ambos os lados sejam iguais, o que é uma característica de um quadrado.

Veja como podemos criar objetos do tipo `Quadrado` e acessar seus métodos:

```typescript
const quadrado1 = new Quadrado(5);
console.log(quadrado1.calcularArea()); // Saída: 25
console.log(quadrado1.calcularPerimetro()); // Saída: 20
console.log(quadrado1.eQuadrado()); // Saída: true
```

> [!Nota]
> A palavra “herança” pode ser um pouco confusa, pois não significa que a subclasse “herda” fisicamente o código da superclasse. Na prática, ela passa a ter acesso aos atributos e métodos definidos na superclasse.
>
> Ou seja, a subclasse pode utilizar os recursos da superclasse como se fossem seus, mas o código não é copiado. A herança é uma relação entre classes, em que a subclasse reutiliza comportamentos da superclasse sem duplicação de código.
>
> Além disso, objetos criados a partir da subclasse podem ser tratados como objetos da superclasse. Ainda assim, o código da superclasse permanece nela e não é duplicado na subclasse.
>
> Basicamente se um atributo ou método existe na superclasse e não é redefinido na subclasse, esta utilizará o comportamento definido na superclasse. Se a subclasse redefinir um método da superclasse, ela fornecerá uma nova implementação para esse método, mas o código original da superclasse ainda estará lá e poderá ser acessado usando `super`.

Aqui é possível observar que teremos uma falha de abstração, pois os valores dos atributos `lado1` e `lado2` da classe `Quadrilatero` podem ser acessados diretamente, o que permite que na classe `Quadrado` seja possível modificar um dos lados, tornando o objeto inconsistente com a definição de um quadrado. Para resolver isso, é necessário utilizar o conceito de encapsulamento, que será abordado a seguir.

## Encapsulamento 

Para garantir abstratividade e segurança dos dados, a POO utiliza o conceito de encapsulamento, que consiste em ocultar os detalhes internos de uma classe e expor apenas o necessário para o uso externo. Isso é feito utilizando modificadores de acesso (como `private`, `protected` e `public`) para controlar a visibilidade dos atributos e métodos.

| Modificador de Acesso | Descrição | Acesso |
| --------------------- | --------- | ----- |
| `public`              | O atributo ou método é acessível de qualquer lugar. | Acessível de dentro e fora da classe. |
| `private`             | O atributo ou método é acessível apenas dentro da própria classe. | Acessível apenas de dentro da classe. |
| `protected`           | O atributo ou método é acessível dentro da classe e por classes derivadas (subclasses). | Acessível de dentro da classe e por subclasses. |

O exemplo da classe `Quadrado` que herda de `Quadrilatero` demonstra como o encapsulamento pode ser importante, veja no exemplo abaixo, onde os atributos `lado1` e `lado2` podem fazer com que o objeto `Quadrado` se torne inconsistente:

```typescript
const quadradoInconsistente = new Quadrado(5);
// Modificando lado1 para 15 tornando o objeto 
// inconsistente com a definição de um quadrado
quadradoInconsistente.lado1 = 10; 

console.log(quadradoInconsistente.calcularArea()); // Saída: 50
console.log(quadradoInconsistente.eQuadrado()); // Saída: true (apesar de não ser um quadrado)
``` 

Isso acontece porque os atributos `lado1` e `lado2` da classe `Quadrilatero` são públicos, o que permite que sejam modificados diretamente, mesmo em um objeto do tipo `Quadrado`. Para resolver esse problema, podemos tornar os atributos privados e fornecer métodos de acesso (getters e setters) para controlar a modificação dos lados:

```typescript
class Quadrilatero {
  private lado1: number; // Tornando o atributo lado1 privado
  private lado2: number; // Tornando o atributo lado2 privado

  constructor(paramLado1: number, paramLado2: number) {
    this.lado1 = paramLado1;
    this.lado2 = paramLado2;
  }

  calcularArea(): number {
    return this.lado1 * this.lado2;
  }

  calcularPerimetro(): number {
    return 2 * (this.lado1 + this.lado2);
  }

  eQuadrado(): boolean {
    return this.lado1 === this.lado2;
  }
}

class Quadrado extends Quadrilatero {
  constructor(paramLado: number) {
    super(paramLado, paramLado);
  }

  eQuadrado(): boolean {
    return true;
  }
}
```

Com a adição do modificador `private` aos atributos `lado1` e `lado2`, eles não podem mais ser acessados ou modificados diretamente de fora da classe `Quadrilatero`. Isso garante que os objetos do tipo `Quadrado` permaneçam consistentes com a definição de um quadrado, pois os lados só podem ser definidos no momento da criação do objeto através do construtor, e não podem ser alterados posteriormente.

Neste caso se os valores de `lado1` e `lado2` tentarem ser acessados ou modificados diretamente, o TypeScript irá gerar um erro de compilação, indicando que os atributos são privados e não podem ser acessados fora da classe. Isso reforça a importância do encapsulamento para garantir a integridade dos objetos e evitar estados inconsistentes.

Veja o exemplo de tentativa de acesso aos atributos privados:

```typescript
const quadradoInconsistente = new Quadrado(5);

// Tentativa de acessar o atributo privado lado1
// Erro: Atributo 'lado1' é privado e só pode ser 
//       acessado dentro da classe 'Quadrilatero'.
console.log(quadradoInconsistente.lado1); 

// Tentativa de modificar o atributo privado lado1
// Erro: Atributo 'lado1' é privado e só pode ser 
//        acessado dentro da classe 'Quadrilatero'.
quadradoInconsistente.lado1 = 10; 
```

Mas isso leva a outra situação adversa, pois existem caso que se faz necessário acessar ou modificar os atributos privados, por isso existem os métodos de acesso (getters e setters) que permitem controlar o acesso aos atributos privados, garantindo que as modificações sejam feitas de forma controlada e consistente.

... [isso é tema para a próxima aula] ... see you space cowboy!

------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------
------


>>> ```typescript
>>> class Quadrado {
>>>     lado: number;
>>> 
>>>     constructor(lado: number) {
>>>         this.lado = lado;
>>>     }
>>> 
>>>     area(): number {
>>>         return this.lado * this.lado;
>>>     }
>>> 
>>>     perimetro(): number {
>>>         return 4 * this.lado;
>>>     }
>>> 
>>>     setLado(lado: number): void {
>>>         this.lado = lado;
>>>     }
>>> 
>>>     getLado(): number {
>>>         return this.lado;
>>>     }
>>> 
>>>     toString(): string {
>>>         return `Quadrado de lado ${this.lado}`;
>>>     }
>>> 
>>>     equals(outro: Quadrado): boolean {
>>>         return this.lado === outro.lado;
>>>     }
>>> 
>>>     clone(): Quadrado {
>>>         return new Quadrado(this.lado);
>>>     }
>>> 
>>>     static criarQuadrado(lado: number): Quadrado {
>>>         return new Quadrado(lado);
>>>     }
>>> 
>>>     static comparar(quadrado1: Quadrado, quadrado2: Quadrado): boolean {
>>>         return quadrado1.lado === quadrado2.lado;
>>>     }
>>> 
>>>     static calcularArea(lado: number): number {
>>>         return lado * lado;
>>>     }
>>> }
>>> ```