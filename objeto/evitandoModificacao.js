// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag:'promocao'
})

console.log('extensivel:',Object.isExtensible(produto))
produto.nome = 'Vitor'
produto.descricao = '12'
delete produto.tag
console.log(produto)

//Object seal

const pessoa = {
    nome:'vivian', idade:19
}
Object.seal(pessoa)

pessoa.sobrenome = 'mazzo'
pessoa.idade = 20
delete pessoa.nome
console.log(pessoa)

// Object freeze = selado + valor constante