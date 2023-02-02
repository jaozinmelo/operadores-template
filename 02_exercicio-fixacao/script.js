// EXERCICIO 01
/* 
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')
console.log(`Minha idade: ${minhaIdade}`)
console.log(`Idade Amiga: ${idadeAmiga}`)

const respostaIdade = minhaIdade > idadeAmiga
const diferencaDeIdade = minhaIdade - idadeAmiga
console.log(`
Sua idade é maior que a da sua melhor amiga? ${respostaIdade}
`)

console.log(`A diferença de idade é de : ${diferencaDeIdade}`)
 */

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

/* 1) Não sou maior de idade e quero passear de carro
2) Sou maior de idade e vou para a praia, e não quero passear de carro
3) Vou para a praia ou quero passear de carro
4) Posso tomar uma cervejinha e não vou passear de carro */
const op1 = (!b && d)
const op2 = (b && a) && !d
const op3 = (a || d)
const op4 = (c && !d)

console.log(`
Não sou maior de idade e quero passear de carro: ${op1}
Sou maior de idade e vou para a praia, e não quero passear de carro: ${op2}
Vou para a praia ou quero passear de carro: 
Posso tomar uma cervejinha e não vou passear de carro: ${op4}
`)