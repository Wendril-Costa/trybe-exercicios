const a = -1;
const b = 5;
const c = 0;

//exercice 1
  console.log(a + b, a - b, a * b, a / b, a % b);//15 5 50 2 0

//exercice 2
if (a > b) {
    console.log(a);
} else {
  console.log(b);
}

//exercice 3  
if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}

//exercice 4
if (a > 0) {
    console.log('positive');
} else if (a === 0) {
    console.log('zero');
} else {
    console.log('negative');
}

//exercice 5
if (( a || b || c) < 0) {
    console.log('valor invalido');
}else if ((a + b + c) === 180) {
    console.log('true');
} else {
    console.log('false');
}

//exercice 6
const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

//exercice 7
const nota = 70;

if (nota >= 90) {
    console.log('A');
} else if (nota >= 80) {
    console.log('B');
} else if ( nota >= 70) {
    console.log('C');
} else if ( nota >= 60) {
    console.log('D');
} else if ( nota >= 50) {
    console.log('E');
} else if ( nota < 50) {
    console.log('F');
} else if ( nota > 100) {
    console.log('erro nota superior a 100%');
} else if (nota < 0) {
    console.log('erro nota inferior a 0%');
}

//exercice 8 
const um = 1;
const dois = 1;
const tres = 3;

if (um % 2 === 0 || dois % 2 === 0 || tres % 2 === 0) {
    console.log('true');
} else {
    console.log('false');
}

//exercice 9
if (um % 2 !== 0 || dois % 2 !== 0 || tres % 2 !== 0) {
    console.log('true');
} else {
    console.log('false');
}

//exercice 10
const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};

//exercice11
let INSS;
let IR;

let salario = 3000;

if (salario <= 1556.94) {
    INSS = alario * 0.08;
} else if (salario <= 2594.92) {
    INSS = salario * 0.09;
} else if (salario <= 5189.82) {
    INSS = salario * 0.11;
} else {
    INSS = 570.88;
}

let salarioLI = salario - INSS;

if (salarioLI <= 1903.98) {
    IR = 0;
} else if (salarioLI <= 2826.65) {
    IR = (salarioLI * 0.075) - 142.80;
} else if (salarioLI <= 3751.05) {
    IR = (salarioLI * 0.15) - 354.80;
} else if (salarioLI <= 466.68) {
    IR = (salarioLI * 0.225) - 636.13;
} else {
    IR = (salarioLI * 0.275) - 869.36;
}

console.log(salarioLI - IR);