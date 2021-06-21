// let e const
{
    var a =2
    let b = 3
    console.log(b)
}
console.log(a)

//template String
const produtor = 'Ipad'
console.log(`${produtor} é caro!`)

//destricturing
const[l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1,2,3]
console.log(x,y)

const {idade, nome} = {nome:'ana', idade:9}
console.log(idade, nome)