var jesus = {
  nombre: 'Jesus',
  apellido: 'Rosas',
  edad: 23,
  peso: 100
}

console.log(`Al inicio del año ${jesus.nombre} pesa ${jesus.peso}kg`)

// function aumentarDePeso (persona) {
//   return persona.peso += 200
// }
const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = jesus.peso - 3
var dias = 0

while (jesus.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(jesus)
  }
  if (realizaDeporte()) {
    adelgazar(jesus)
  }
  dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${jesus.nombre} adelgazó 3kg`)
