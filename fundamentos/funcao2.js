// armazenando uma funcao em uma variavel
const imprimiSoma = function(a, b) {
    console.log(a + b)
}

imprimiSoma(2, 3)

//armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))