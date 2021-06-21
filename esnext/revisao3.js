// ES8: Object.values/ Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notação literal
const nome = 'carla'
const pessoa = {
    nome,
    ola(){
        return 'oi gente !'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class animal{}
class cachorro extends animal{
    falar(){
        return 'Au au!'
    }
}
console.log(new cachorro().falar())