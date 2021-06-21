function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`opção escolhido foi ${opcao}.`)
}

console.log('até a proxima aula')