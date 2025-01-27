<h1 align="center">Calculadora de Rank de Partidas 🎮</h1>

<p align="center">
  Este projeto feito durante o curso de Lógica de Programação da DIO, é uma função em JavaScript que calcula o saldo de vitórias e derrotas de um jogador e determina o seu nível de rank. O cálculo do saldo é feito através da diferença entre vitórias e derrotas, e o nível é definido conforme o número de vitórias do jogador. ⚡
</p>

<p align="center">
  <a href="#-tecnologias">🛠 Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">✨ Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar">🧠 Como Usar</a>
</p>

---

## 🛠 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- *JavaScript* 📜

---

## ✨ Projeto

A função `calcularRank` recebe a quantidade de vitórias e derrotas de um jogador e realiza os seguintes passos:

1. **Calcula o saldo de vitórias:** O saldo é determinado subtraindo as derrotas das vitórias.
2. **Determina o nível do jogador:** Com base no número de vitórias, o jogador é classificado em um dos seguintes níveis:
   - **Ferro:** Menos de 10 vitórias.
   - **Bronze:** Entre 10 e 20 vitórias.
   - **Prata:** Entre 21 e 50 vitórias.
   - **Ouro:** Entre 51 e 80 vitórias.
   - **Diamante:** Entre 81 e 90 vitórias.
   - **Lendário:** Entre 91 e 100 vitórias.
   - **Imortal:** 101 vitórias ou mais.
   
3. **Exibe a mensagem:** O saldo de vitórias e o nível alcançado são exibidos no console.

---

## 🌍 Acesse o Projeto

Este código pode ser testado diretamente no seu navegador ou editor de código, como o VS Code, executando a função `calcularRank` com valores de vitórias e derrotas.

---

## 🧠 Como Usar

1. Copie o código e cole-o em um arquivo `.js` ou no console do navegador.
2. Chame a função `calcularRank(vitorias, derrotas)` passando os valores de vitórias e derrotas como parâmetros.
3. A função retornará o saldo de vitórias e o nível correspondente no console.

### Exemplo de uso:

```javascript
calcularRank(60, 30);  // Saída: O Herói tem de saldo de 30 está no nível de Ouro
