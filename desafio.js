// Função que recebe vitórias e derrotas, calcula o saldo e determina o nível
function calcularRank(vitorias, derrotas) {
    // Calculando o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Variável para armazenar o nível
    let nivel;

    // Decidindo o nível com base nas vitórias
    if (vitorias < 10) {
    nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
    nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
    } else {
    nivel = "Imortal";
    }

    // Exibindo a mensagem com o saldo e o nível
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
    }

    calcularRank(60, 30);  // Saída: O Herói tem de saldo de 30 está no nível de Ouro
