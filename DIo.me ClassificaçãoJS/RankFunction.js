const readlineSync = require('readline-sync');

function Rank(vitorias , Derrotas){
    let Calculo = vitorias - Derrotas;
    let nivel;
    
 switch (true) {
    case vitorias < 10:
     nivel = "Ferro";
    break;
    case vitorias <= 20:
      nivel = "Bronze";
    break;
    case vitorias <= 50:
      nivel = "Prata";
    break;
    case vitorias <= 80:
       nivel = "Ouro";
    break;
    case vitorias <= 90:
      nivel = "Diamante";
    break;
    case vitorias <= 100:
      nivel = "Lendário";
    break;
     default:
        nivel = "Imortal";
        }
    
    return `A Quantidade de Vitorias do Heroi e de ${Calculo}  E Estar no Rank ${nivel} `
    
    }
    
    let vit = readlineSync.questionInt('Digite o número de vitórias: ');
    let der = readlineSync.questionInt('Digite o número de derrotas: ');
    
    let resultado = Rank(vit, der);
    console.log(resultado);