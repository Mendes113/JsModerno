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
