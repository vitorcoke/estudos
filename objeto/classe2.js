class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class pai extends Avo {
    constructor(sobrenome, profissao = 'professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class filho extends pai {
    constructor(){
        super('silva')
    }
}

const filhao = new filho
console.log(filhao)