const nota = [4, 5, 8, 7]

for (let i in nota) {
    console.log(i, nota[i])
}

const pessoa = {
    nome: 'ana',
    sobrenome: 'mazzo',
    idade: 18,
    peso: 120
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}