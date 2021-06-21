function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        if (numerosProibidos.includes(aleatorio)) {
            reject('Numeros Repetidos!')
        } else {
            resolve(aleatorio)
        }

    })
}

async function gerarnumeros(qtdeNumeros) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        throw "Que chato!!!"
    }

}

gerarnumeros(15)
    .then(console.log)
    .catch(console.log)