const fs = require('fs')

const caminho =__dirname + '/arquivo.json'

//sicrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

//assicrona...
fs.readFile(caminho, 'utf-8', (err, conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})
