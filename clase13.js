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
const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random()

  if (random < 0.25) {
    aumentarDePeso(jesus)
  } else if (random < 0.5) {
    adelgazar(jesus)
  }
}

console.log(`Al final del año ${jesus.nombre} pesa ${jesus.peso.toFixed(1)}kg`)
