function tratarErroELancar(erro) {
    //throw new Error('....)
    //throw 10
    //throw true
    //throw 'mensagem' 
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritante(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }
}

const obj = { nome: 'roberto' }
imprimirNomeGritante(obj)