//função sem retorno
function imprimirSoma(a, b) { //colocar bons nomes para sua função
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

//fução com retorno
function soma(a, b = 1) { // b = 0 valor definido se não for passado nem parametro quando chamar a função
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log()