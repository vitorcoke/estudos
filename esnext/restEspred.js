// operador... rest(juntar)/spred(espalhar)
// usar rest com parametro de função

// usar spred com objeto
const funcionario = {nome: 'Vitor', salario: 15000.00}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spred com array
const grupoA = ['vitor', 'ana', 'nathan']
const grupoFinal = ['rene',...grupoA, 'Fernando']
console.log(grupoFinal)