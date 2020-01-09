var jesus = {
    nombre: 'Jesus',
    apellido: 'Rosas',
    edad: 23
  }
  
  var dario = {
    nombre: 'Darío',
    apellido: 'Susnisky',
    edad: 27
  }
  
  function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
  }
  
  imprimirNombreEnMayusculas(jesus)
  imprimirNombreEnMayusculas(dario)
  // imprimirNombreEnMayusculas({ nombre: 'Pepito' })
  // imprimirNombreEnMayusculas({ apellido: 'Gomez' })
  
  function imprimirNombreYEdad() {
    // Hola, me llamo Jesus y tengo 28 años
    // Hola, me llamo Darío y tengo 27 años
  }