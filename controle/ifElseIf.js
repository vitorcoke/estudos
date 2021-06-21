Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota) {
    if (nota.entre(9, 10)) {
        console.log('Medalha de honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('aprovado!')
    } else if (nota.entre(4, 6.99)) {
        console.log('recuperação!!')
    } else if (nota.entre(0, 3.99)) {
        console.log('reprovado!')
    } else {
        console.log('nota invalida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6)
imprimirResultado(2)
imprimirResultado(-1)
imprimirResultado(11)