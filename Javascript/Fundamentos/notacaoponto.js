console.log(typeof console)
console.log(typeof console.log)

console.log(Math.ceil(6.1))

const obj = {}
obj.nome = 'Bola'
//obj['nome'] = 'Bola2'
console.log(obj.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}