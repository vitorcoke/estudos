const fs = require('fs')

const diretorioArquivo = __dirname + '/dados.txt'

const conteudo =  fs.readFileSync(diretorioArquivo, 'utf-8')

const leitura = new Promise(resolve =>{
  
    resolve(conteudo)
    console.log('depois de ler')
})

leitura
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)