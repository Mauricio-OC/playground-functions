// Desafio 1
function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  let palavra = string.split(' ');
  return palavra;
}

// Desafio 4
function concatName(array) {
  let string = '';
  string += array.pop();
  string += ', ';
  string += array.shift();
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = (cat1 - mouse);
  let gato2 = (cat2 - mouse);
  if ((gato1) + (gato2) === 0) {
    return 'os gatos trombam e o rato foge';
  } if (gato1 < gato2) {
    return 'cat1';
  } if (gato2 < gato1) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
let texto = []
for (let i = 0; i <array.length; i++){
  
}
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
