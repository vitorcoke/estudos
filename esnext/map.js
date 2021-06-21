const tecnologia = new Map()
tecnologia.set('react', {framwork: false})
tecnologia.set('angular', {framwork: true})

console.log(tecnologia.react)
console.log(tecnologia.get('react').framwork)

const chavesVariados = new Map([
    [function() { }, 'função'],
    [{} = 'Objeto'],
    [123, 'Número']
])

chavesVariados.forEach((vl, ch) =>{
    console.log(ch, vl)
})

console.log(chavesVariados.has(123))
chavesVariados.delete(123)
console.log(chavesVariados.has(123))
console.log(chavesVariados.size)
chavesVariados.set('vitor', 'lindo')
console.log(chavesVariados.get('vitor'))