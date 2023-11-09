// ¿En qué casos resulta mejor usar let o var para definir variables?
// respuesta: en la variable LET es mejor usarla al representara en un bloque de codigo en concreto y realizar su invocacion en consola dentro del mismo bloque, asi consume menos espacio en el propio proyecto, el la variabel VAR se puede usar en casos mas generigos ya que sera una variable vista en gran parte de un proyecto.

let variableslocales = "datos"
{
    var nombre="juan"
    var apellido="apellido"
    console.log(nombre)
    console.log(apellido)
    let edad="18"
    let comida="comida"
    console.log(edad)
    console.log(comida)
}
    console.log(nombre)
    console.log(apellido)
