// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto['marcado produto'] = 'generica'
produto.preço = 220

console.log(produto)
delete produto.preço
delete produto['marcado produto']

console.log(produto)

const carro = {
    modelo: 'BMW',
    ano: 2020,
    valor: 200000,
    proprietario:{
        nome: 'Vitor Coke',
        idade: 19,
        endereco: {
            logadouro:'Rua ABC',
            numero: 140,
            complemento: '24 A'
        }
    },
    condutores: {
        nome: 'Vivian Coke',
        idade: 19
    }
}

carro.proprietario.endereco.numero = 100

console.log(carro)

delete carro.proprietario.endereco
delete carro.condutores

console.log(carro)