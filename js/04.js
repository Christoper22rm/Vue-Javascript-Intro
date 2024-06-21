const nombreProducto = "Tablet";
const precioProducto = 300;
const disponible = true;

//Objetos
 const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
 }

 console.log(producto);

// destructuring

const {nombre} = producto

console.log(nombre);


// Objet literal 
const autenticado = true;
const usuario = "juan";

const nuevoObjeto = {
    autenticado,
    usuario
}

console.log(nuevoObjeto);