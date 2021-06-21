// usando a notação literal

const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Função construtora 
function produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('Caneta', 7.99, 0.15)
const p2 = new produto('Notebook', 2000, 0.15)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//function Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('vitor', 70000, 1)
console.log(f1.getSalario())

// Object.creat 
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

// uma função famosa que retorna Objeto
const fromJSON =JSON.parse('{"info": "vitor"}')
console.log(fromJSON.info)