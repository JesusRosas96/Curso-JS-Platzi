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
  
  function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
  }
  
  imprimirNombreEnMayusculas(jesus)
  imprimirNombreEnMayusculas(dario)
  // imprimirNombreEnMayusculas({ nombre: 'Pepito' })
  imprimirNombreEnMayusculas({ apellido: 'Gomez' })