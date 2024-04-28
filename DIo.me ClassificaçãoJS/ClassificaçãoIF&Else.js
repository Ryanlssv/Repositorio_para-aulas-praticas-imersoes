const readlineSync = require('readline-sync');

// Solicitar ao usuário que digite o nome e o XP desejado
let Nome = readlineSync.question('Digite o nome do heroi: ');
let Xp = parseInt(readlineSync.question('Digite o XP desejado: '));

let Nivel = "";

// Classificando os Níveis
if (Xp <= 1000) {
  Nivel = "Ferro";
} else if (Xp <= 2000) {
  Nivel = "Bronze";
} else if (Xp <= 5000) {
  Nivel = "Prata";
} else if (Xp <= 7000) {
  Nivel = "Ouro";
} else if (Xp <= 8000) {
  Nivel = "Platina";
} else if (Xp <= 9000) {
  Nivel = "Ascendente";
} else if (Xp <= 10000) {
  Nivel = "Imortal";
} else {
  Nivel = "Radiante";
}

// Saída
console.log("O Herói de Nome: " + Nome + ". Está no Nível de: " + Nivel);

