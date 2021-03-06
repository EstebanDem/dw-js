/*
    C: Create
    R: Read
    U: Update
    D: delete
*/


class Perro {
    
    constructor(nombre, color, edad){
        this.nombre = nombre.toLowerCase();
        this.color = color.toLowerCase();
        this.edad = edad;
    }
    

}

// Lista de perritos
let perritos = JSON.parse(localStorage.getItem('perritos')) || [];


//Devuelve todo los perritos
const getAll = () => {
    return perritos;
}

// Metodo para agregar un perro a la lista
const create = (perrito) => {
    perritos.push(perrito);
    localStorage.setItem('perritos', JSON.stringify(perritos));
}

// Metodo para hallar un perro
const findOne = (nombre) => {
    nombre = nombre.toLowerCase();
    const perro = perritos.find( perro => perro.nombre === nombre) 

        if (!perro) {
            throw new Error(`No existe ${nombre}`)
        }

        return perro;
    
}

// Metodo para eliminar un perrito

const remove = (nombre) => {
    const perro = findOne(nombre);

    const index = perritos.indexOf(perro);
    perritos.splice(index, 1);
    localStorage.setItem('perritos', JSON.stringify(perritos));
/*     const index = perritos.findIndex(perro => perro.nombre === nombre);
    if(index >= 0) {
        perritos.splice(index, 1);
    } */
}

// Metodo para modificar un dato
const update = (nombre, color) => {
    const perro = findOne(nombre);
    perro.color = color;
}

//Paso 1
// Crear un nuevo perro

const perro1= new Perro('Molo','marrón',1);
const perro2= new Perro('Malena','negra',7);
const perro3= new Perro('Argos','azul',5);
const perro4= new Perro('Pacha','gris',15);


//Paso 2
// agregar perro1 a la lista

/*
create(perro1);
create(perro2);
create(perro3);
create(perro4); 
*/

//Paso 3
// busco a un perro por su noimbre
//console.log(findOne('molo'));
//console.log(getAll());
//remove('molo');
//console.log(getAll());

//console.log(getAll());

// Obtener elementos del DOM

const listaPerros = document.getElementById('lista-perros');
const formPerro = document.getElementById('form-perro');
const inputNombre = document.getElementById('input-nombre-perro');
const inputColor = document.getElementById('input-color-perro');
const inputEdad = document.getElementById('input-edad-perro');

// Agregar perritos a la lista de perros del browser


for (let i = 0; i < perritos.length; i++) {
    let itemPerro = document.createElement('li');
    itemPerro.innerHTML = `${perritos[i].nombre} 
    <span style="cursor:pointer" id="${i}"> x </span>`;

    itemPerro.onclick = () => {
        console.log(perritos[i]);
        remove(perritos[i].nombre);
    }
    listaPerros.appendChild(itemPerro);
}

// Escuchar el evento submit del formulario 

formPerro.addEventListener('submit', (event) => {
    // event.preventDefault(); // Hace que no se me recargue la página
    const nombre = inputNombre.value;
    const color = inputColor.value;
    const edad = inputEdad.value;

    const perro = new Perro(nombre,color,edad);
    create(perro);
})

/* module.exports = {
    renderMessage
}

export {

}

scr src type module */