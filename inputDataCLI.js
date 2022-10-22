//console.log(process.argv)

const [,,parametro1,parametro2]=process.argv

// String.split('=') esta busca texto despues del caracter ingresado

const [,nombre=""] = parametro1.split('=')
const [,edad=0] = parametro2.split('=')

console.log(nombre,edad)