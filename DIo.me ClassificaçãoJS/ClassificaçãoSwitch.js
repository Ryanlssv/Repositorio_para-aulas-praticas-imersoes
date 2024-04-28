const readlineSync = require('readline-sync');

// Solicitar ao usuário que digite o nome e o XP desejado
let Nome = readlineSync.question('Digite o nome do heroi: ');
let Xp = parseInt(readlineSync.question('Digite o XP desejado: '));

let Nivel = "";

// Classificando os Níveis
switch (true) {
  case Xp <= 1000:
    Nivel = "Ferro";
    break;

  case Xp > 1000 && Xp <= 2000:
    Nivel = "Bronze";
    break;

  case Xp > 2000 && Xp <= 5000:
    Nivel = "Prata";
    break;

  case Xp > 5000 && Xp <= 7000:
    Nivel = "Ouro";
    break;

  case Xp > 7000 && Xp <= 8000:
    Nivel = "Platina";
    break;

  case Xp > 8000 && Xp <= 9000:
    Nivel = "Ascendente";
    break;

  case Xp > 9000 && Xp <= 10000:
    Nivel = "Imortal";
    break;

  case Xp > 10000:
    Nivel = "Radiante";
    break;
}

// Saída
console.log("O Herói de Nome: " + Nome + ". Está no Nível de: " + Nivel);
