const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13

}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '26/04/2002'
})

console.log(pessoa.dataNascimento)

// Object.assing 
const dest = { a: 1 }
const o1 = { b: 2, c: 3 }
const o2 = { c: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)


