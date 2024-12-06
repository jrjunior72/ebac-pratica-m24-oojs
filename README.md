# ebac-pratica-m24-oojs

## Explicação do Código:

### 1. Classe Abstrata Animal:

* A classe Animal é uma abstração que define propriedades e métodos comuns para todos os animais. Ela não pode ser instanciada diretamente, pois lança um erro quando tentamos instanciá-la.
* O método emitirSom é um método abstrato, ou seja, ele não possui implementação na classe Animal, forçando as classes filhas a implementá-lo.
---
### 2. Classes Filhas Cachorro e Gato:

* Ambas as classes Cachorro e Gato estendem a classe Animal e implementam o método emitirSom com comportamentos específicos para cada tipo de animal.
* Além disso, as classes filhas adicionam propriedades próprias, como raca para o Cachorro e cor para o Gato.
---
### 3. Instâncias de Objetos:

* Criamos três objetos: dois da classe Cachorro e um da classe Gato.
* Cada objeto chama métodos como emitirSom, dormir e outros específicos das suas classes.
---