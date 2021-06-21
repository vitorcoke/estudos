const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('medalha de honra')
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 7:
        case 6:
        case 5:
        case 4:
            console.log('recuperção')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('reprovado')
            break
        default:
            console.log('nota invalida')

    }
}

imprimirResultado(10)
imprimirResultado(8.5)
imprimirResultado(5)
imprimirResultado(2.5)
imprimirResultado(-1)