function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 - imposto)}`
}

const produto = {
    nome:'notebook',
    preco:4999,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = {
    preco:50000,
    desc: 0.20
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, .017, '$'))
console.log(getPreco.apply(carro, [0.20, "$"]))