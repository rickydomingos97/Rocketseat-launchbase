const nome = 'Silvana'
const sexo = 'F'
const idade = 50
const contribuicao = 39

const tempo = idade + contribuicao

console.log(`${nome}, voce tem ${idade} anos e contribuiu por ${contribuicao}`)
console.log(`Voce tem ${tempo} anos. somados idade e contribuicao`)

if (sexo === 'F') {
    if(tempo >= 85) {
        console.log(`${nome}, voce pode se aposentar!`)
    } else {
        console.log(`${nome}, voce ainda nao pode se aposentar!`)
    }
} else {
    if (sexo === 'M') {
        if(tempo >= 95) {
            console.log(`${nome}, Voce pode se aposentar!`)
        } else {
            console.log(`${nome}, voce ainda nao pode se aposentar!`)
        }
    }
}