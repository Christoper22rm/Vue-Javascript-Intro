const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
 }

Object.freeze(producto) // congela un objeto para que no se elimine ni se agregue elemnetos
//si te deja reescribir o cambiar el nombre

// reescribir un valor
producto.nombre = "Monitor curvo"

// Añadir un valor
producto.imagen = "imagen.jpg"

// Eliminar 
delete producto.disponible

//eliminar de una manera mas moderna
const {disponible, ...producto2} = producto

console.log(producto)


console.log(producto)