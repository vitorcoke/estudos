const resultado = function(nota) {

    return nota >= 7 ? 'aprovado' : 'reprovado'
}

console.log(resultado(7.1))


const resultados = nota => nota >= 7 ? 'aprovado' : 'reprovado'

console.log(resultados(7.1))
console.log(resultados(6))