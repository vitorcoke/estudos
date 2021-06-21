class lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class clicloFinaceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamento = []

    }
    addLancamento(...lancamento) {
        lancamento.forEach(l => this.lancamento.push(l))
    }

    sumario() {
        let valorConsolidade = 0
        this.lancamento.forEach(l =>{
            valorConsolidade += l.valor
        })
        return valorConsolidade
    }
}

const salario = new lancamento('salario', 45000)
const contaDeLuz = new lancamento('luz',-220)

const contas = new clicloFinaceiro(6, 2018)
contas.addLancamento(salario, contaDeLuz)
console.log(contas.sumario())