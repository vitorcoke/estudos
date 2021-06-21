function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('aprovado ' + nota)
    }
}

soBoaNoticia(8)
soBoaNoticia(6)

function seForVerdadEuFalo(valor) {
    if (valor) {
        console.log('É vdd ... ' + valor)
    }
}

seForVerdadEuFalo()
seForVerdadEuFalo(null)
seForVerdadEuFalo(NaN)
seForVerdadEuFalo('')
seForVerdadEuFalo(0)
seForVerdadEuFalo(-1)
seForVerdadEuFalo(' ')
seForVerdadEuFalo('vitor')
seForVerdadEuFalo([])
seForVerdadEuFalo({})