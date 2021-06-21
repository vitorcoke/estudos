function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('testando', 0.5)
    .then(
        v => console.log(`Valor: ${v}`),
        err => console.log(`Erro: ${err}`)
    )
    // .catch(cu => console.log(`Erro: ${cu}`))
    .then(() => console.log('Fim!'))