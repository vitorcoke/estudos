let a = 1
console.log(a)

let p = new Promise(function (resolve) {
    resolve(['Vitor', 'Ana', 'Nathan', 'João'])
       
})

p
    .then((valor) => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))
