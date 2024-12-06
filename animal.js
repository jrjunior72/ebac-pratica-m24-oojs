class Animal {
    constructor(nome, idade) {
      if (this.constructor === Animal) {
        throw new Error("Não é permitido instanciar a classe abstrata Animal diretamente.");
      }
      this.nome = nome;
      this.idade = idade;
    }
  
    emitirSom() {
      throw new Error("O método 'emitirSom' deve ser implementado nas subclasses.");
    }
  
    dormir() {
      console.log(`${this.nome} está dormindo.`);
    }
}

class Cachorro extends Animal {
  constructor(nome, idade, raca) {
    super(nome, idade);
    this.raca = raca;
  }

  emitirSom() {
    console.log(`${this.nome} está latindo: Au au!`);
  }

  mostrarRaca() {
    console.log(`${this.nome} é da raça ${this.raca}.`);
  }
}

class Gato extends Animal {
  constructor(nome, idade, cor) {
    super(nome, idade);
    this.cor = cor;
  }

  emitirSom() {
    console.log(`${this.nome} está miando: Miau!`);
  }

  mostrarCor() {
    console.log(`${this.nome} é de cor ${this.cor}.`);
  }
}


const cachorro1 = new Cachorro("Rex", 3, "Labrador");
const gato1 = new Gato("Mia", 2, "Preto");
const cachorro2 = new Cachorro("Bobby", 5, "Beagle");

cachorro1.emitirSom(); // Rex está latindo: Au au!
cachorro1.mostrarRaca(); // Rex é da raça Labrador.
cachorro1.dormir(); // Rex está dormindo.

gato1.emitirSom(); // Mia está miando: Miau!
gato1.mostrarCor(); // Mia é de cor Preto.
gato1.dormir(); // Mia está dormindo.

cachorro2.emitirSom(); // Bobby está latindo: Au au!
cachorro2.mostrarRaca(); // Bobby é da raça Beagle.
cachorro2.dormir(); // Bobby está dormindo.
