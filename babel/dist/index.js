"use strict";

// let mediaSimples = () => {
//     let notas = [12, 3, 4, 5, 6];
//     let soma = 0;
//     for (let i = 0; i < notas.length; i++) {
//         soma += notas[i];
//     }
//     let media = soma / notas.length;
//     console.log(media);
//     return media;
// }

// let mediaPonderada = () => {

//     let notas = [12, 3, 4, 5, 6];
//     let pesos = [1, 2, 3, 4, 5];
//     let soma = 0;
//     let somaPesos = 0;
//     for (let i = 0; i < notas.length; i++) {
//         soma += notas[i] * pesos[i];
//         somaPesos += pesos[i];
//     }
//     let media = soma / somaPesos;
//     console.log(media);
//     return media;
// }

// let mediana = () => {
//     let notas = [10, 10, 7, 7, 7, 7, 4, 4, 4, 3, 7, 7];
//     notas.sort(); // Ordena o array em ordem crescente

//     let tamanho = notas.length;
//     let mediana;

//     if (tamanho % 2 === 0) {
//         // Se o tamanho do array for par, calcula a média dos dois valores centrais
//         let indice1 = tamanho / 2;
//         let indice2 = indice1 - 1;
//         mediana = (notas[indice1] + notas[indice2]) / 2;
//     } else {
//         // Se o tamanho do array for ímpar, a mediana é o valor central
//         let indice = Math.floor(tamanho / 2);
//         mediana = notas[indice];
//     }

//     console.log(mediana);
//     return mediana;
// }

// let moda = () => {
//     let notas = [10, 10, 7, 7, 7, 7, 4, 4, 4, 3, 7, 7];
//     notas.sort(); // Ordena o array em ordem crescente

//     let frequencias = {};
//     let maxFrequencia = 0;
//     let modas = [];

//     for (let i = 0; i < notas.length; i++) {
//         if (frequencias[notas[i]] === undefined) {
//             frequencias[notas[i]] = 1;
//         } else {
//             frequencias[notas[i]]++;
//         }

//         if (frequencias[notas[i]] > maxFrequencia) {
//             maxFrequencia = frequencias[notas[i]];
//             modas = [notas[i]];
//         } else if (frequencias[notas[i]] === maxFrequencia) {
//             modas.push(notas[i]);
//         }
//     }

//     return modas;
// }

// let resultadoModa = moda();
// console.log("Moda: ", resultadoModa);

// console.log("Moda");
// console.log(`A moda é ${moda()}`);

// console.log("Media Simples");
// console.log(`A média é ${mediaSimples()}`);

// console.log("Media Ponderada");
// console.log(`A média é ${mediaPonderada()}`);

// console.log("Mediana");
// console.log(`A mediana é ${mediana()}`);

var average = function average() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  return sum / numbers.length;
};
console.log("M\xE9dia Aritm\xE9tica Simples: ".concat(average(3, 6, 10, 9)));
var weightedAverage = function weightedAverage() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var weightSum = entries.reduce(function (accum, entry) {
    var _entry$weight;
    return accum + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return sum / weightSum;
};
console.log("M\xE9dia Ponderada: ".concat(weightedAverage({
  number: 9,
  weight: 3
}, {
  number: 7
}, {
  number: 10,
  weight: 1
})));
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  var firstMedian = orderedNumbers[middle - 1];
  var secondMedian = orderedNumbers[middle];
  return average(firstMedian, secondMedian);
};
console.log("Mediana: ".concat(median(2, 5, 99, 4, 42, 7)));
console.log("Mediana: ".concat(median(15, 14, 8, 7, 3)));
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("Moda: ".concat(mode(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));