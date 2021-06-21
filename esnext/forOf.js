for(let letra of "Cod3") {
    console.log(letra)
}

const assuntoEcma = ['map', 'set', 'promise']

for(let i in assuntoEcma){
    console.log(i)
}

for(let assunto of assuntoEcma){
    console.log(assunto)
}

const assuntoMap = new Map([
    ['map', {abordado: true}],
    ['ser', {abordado: true}],
    ['promise', {abordado: false}]
])

for(let assunto of assuntoMap){
    console.log(assunto)
}

for(let chave of assuntoMap.keys()){
    console.log(chave)
}

for(let valor of assuntoMap.values()){
    console.log(valor)
}

for (let [ch, vl] of assuntoMap.entries()){
    console.log(ch,vl)
}