// Desafio 11
function generatePhoneNumber(numerodetelefone, numero) {
  // queremos ver quantas vezes os n° se repetem.
  let acc = 0;
  for (let index = 0; index < numerodetelefone.length; index += 1) {
    if (numero === numerodetelefone[index]) acc += 1;
  }
  return acc;
}
//
function generateErrosPhoneNumber(numerodetelefone) {

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let condicaoA = ((lineA < (lineB + lineC))
    * (lineA > Math.abs(lineB - lineC)));
  let condicaoB = ((lineB < (lineA + lineC))
    * (lineB > Math.abs(lineA - lineC)));
  let condicaoC = ((lineC < (lineA + lineB))
    * (lineC > Math.abs(lineA - lineB)));
  if (condicaoA === 1 || condicaoB === 1 || condicaoC === 1) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(zeroAlcool) {
  let numerosSomados = 0;
  let numeros = zeroAlcool.match(/\d+/g);
  for (let i = 0; i < numeros.length; i += 1) {
    numerosSomados += parseInt(numeros[i], 10);
  } if (numerosSomados === 1) {
    numerosSomados += ' copo de água';
  } else {
    numerosSomados += ' copos de água';
  }
  return numerosSomados;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
