let mediaSimples = () => {
    let notas = [12, 3, 4, 5, 6];
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    let media = soma / notas.length;
    console.log(media);
    return media;
}


let mediaPonderada = () => {

    let notas = [12, 3, 4, 5, 6];
    let pesos = [1, 2, 3, 4, 5];
    let soma = 0;
    let somaPesos = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i] * pesos[i];
        somaPesos += pesos[i];
    }
    let media = soma / somaPesos;
    console.log(media);
    return media;
}

let mediana = () => {
    let notas = [10, 10, 7, 7, 7, 7, 4, 4, 4, 3, 7, 7];
    notas.sort(); // Ordena o array em ordem crescente

    let tamanho = notas.length;
    let mediana;

    if (tamanho % 2 === 0) {
        // Se o tamanho do array for par, calcula a média dos dois valores centrais
        let indice1 = tamanho / 2;
        let indice2 = indice1 - 1;
        mediana = (notas[indice1] + notas[indice2]) / 2;
    } else {
        // Se o tamanho do array for ímpar, a mediana é o valor central
        let indice = Math.floor(tamanho / 2);
        mediana = notas[indice];
    }

    console.log(mediana);
    return mediana;
}



let moda = () => {
    let notas = [10, 10, 7, 7, 7, 7, 4, 4, 4, 3, 7, 7];
    notas.sort(); // Ordena o array em ordem crescente

    let frequencias = {};
    let maxFrequencia = 0;
    let modas = [];

    for (let i = 0; i < notas.length; i++) {
        if (frequencias[notas[i]] === undefined) {
            frequencias[notas[i]] = 1;
        } else {
            frequencias[notas[i]]++;
        }

        if (frequencias[notas[i]] > maxFrequencia) {
            maxFrequencia = frequencias[notas[i]];
            modas = [notas[i]];
        } else if (frequencias[notas[i]] === maxFrequencia) {
            modas.push(notas[i]);
        }
    }

    return modas;
}

let resultadoModa = moda();
console.log("Moda: ", resultadoModa);





console.log("Moda");
console.log(`A moda é ${moda()}`);




console.log("Media Simples");
console.log(`A média é ${mediaSimples()}`);

console.log("Media Ponderada");
console.log(`A média é ${mediaPonderada()}`);

console.log("Mediana");
console.log(`A mediana é ${mediana()}`);



// const average = (...numbers) => {
//     const sum = numbers.reduce((accum, num) => accum + num, 0)
//     return sum / numbers.length
//   }
  
//   console.log(`Média Aritmética Simples: ${average(3, 6, 10, 9)}`)


// const weightedAverage = (...entries) => {
//     const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
//     const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
//     return sum / weightSum
//   }
  
//   console.log(`Média Ponderada: ${weightedAverage(
//     { number: 9, weight: 3 },
//     { number: 7 },
//     { number: 10, weight: 1 },
//   )}`)

// const median = (...numbers) => {
//     const orderedNumbers = [...numbers].sort((a, b) => a - b)
//     const middle = Math.floor(orderedNumbers.length / 2)
//     if (orderedNumbers.length % 2 !== 0) {
//       return orderedNumbers[middle]
//     }
//     const firstMedian = orderedNumbers[middle - 1]
//     const secondMedian = orderedNumbers[middle]
//     return average(firstMedian, secondMedian)
//   }
  
//   console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
//   console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)


// const mode = (...numbers) => {
//     // [ [n, qtd], [n, qtd], [n, qtd] ]
//     const quantities = numbers.map(num => [
//       num,
//       numbers.filter(n => num === n).length
//     ])
//     quantities.sort((a, b) => b[1] - a[1])
//     return quantities[0][0]
//   }
  
//   console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)