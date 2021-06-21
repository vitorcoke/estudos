//tagged tamplate = processa o tamplate de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}
const aluno = 'gui'
const situacao = 'Aprovado'
console.log( `${aluno} esta ${situacao}.`)