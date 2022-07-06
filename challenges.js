/* eslint-disable no-cond-assign */
/* eslint-disable guard-for-in */
/* eslint-disable default-case */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
// Desafio 1
function compareTrue(p1, p2) {
  if (p1 && p2 === true) return true;
  return false;
}

// Desafio 2

function calcArea(base, height) {
  return (base * height) / 2 ** 1;
}

// Desafio 3
function splitSentence(separacao) {
  return separacao.split(' ');
}

// Desafio 4
function concatName(conca) {
  let array = [conca[conca.length - 1], ', ', conca[0]];
  return array.join('');
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
// eslint-disable-next-line sonarjs/cognitive-complexity
function highestCount(numeros) {
  const highestNumber = Math.max.apply(null, numeros);
  const counter = numeros.filter((f) => f === highestNumber);
  return counter.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distanciaCat1 = Math.abs(cat1 - mouse);
  const distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 > distanciaCat2) return 'cat2';
  if (distanciaCat1 < distanciaCat2) return 'cat1';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arraynumeros) {
  return arraynumeros.reduce((acc, curr) => {
    let defineFizzOrBuzz = 'bug!';
    if (curr % 3 === 0) defineFizzOrBuzz = 'fizz';
    if (curr % 5 === 0) defineFizzOrBuzz = 'buzz';
    if (curr % 5 === 0 && curr % 3 === 0) defineFizzOrBuzz = 'fizzBuzz';
    acc.push(defineFizzOrBuzz);
    return acc;
  }, []);
}

// Desafio 9

function encode(letrapornumero) {
  let arraynumero = letrapornumero.split('');
  for (let index in arraynumero) {
    switch (arraynumero[index]) {
    case 'a':
      arraynumero[index] = '1';
      break;
    case 'e':
      arraynumero[index] = '2';
      break;
    case 'i':
      arraynumero[index] = '3';
      break;
    case 'o':
      arraynumero[index] = '4';
      break;
    case 'u':
      arraynumero[index] = '5';
      break;
    }
  }
  arraynumero = arraynumero.join('');
  return arraynumero;
}

function decode(numeroporletra) {
  let arrayletra = numeroporletra.split('');
  for (let index in arrayletra) {
    switch (arrayletra[index]) {
    case '1':
      arrayletra[index] = 'a';
      break;
    case '2':
      arrayletra[index] = 'e';
      break;
    case '3':
      arrayletra[index] = 'i';
      break;
    case '4':
      arrayletra[index] = 'o';
      break;
    case '5':
      arrayletra[index] = 'u';
      break;
    }
  }
  arrayletra = arrayletra.join('');
  return arrayletra;
}

// Desafio 10
function techList(tecnologias, nome) {
  let objetos = [];
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }
  if ((tecnologias = tecnologias.sort())) {
    for (let index = 0; index < tecnologias.length; index += 1) {
      objetos[index] = {
        tech: tecnologias[index],
        name: nome,
      };
    }
    return objetos;
  }
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
