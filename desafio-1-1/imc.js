const name = 'Carlos'
const weight = 84
const height = 1.88
const gender = 'Male'

const IMC = weight / (height * height);
console.log(IMC)

if (IMC >=  30) {
    console.log(`${name} você está acima do peso`)
} else {
    console.log(`${name} voce NÃO está acima do peso`)
}