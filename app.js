// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array o arreglo con nombres
let amigos = [];

// Function para agregar amigos - Envía una alerta si no se ingresa un nombre válido, de lo contrario lo suma a la lista 'amigos'
function agregarAmigo() {
    let nombreAmigo = document.querySelector('input').value.trim();

    if (nombreAmigo === '') {
        alert('Por favor ingrese un nombre');
        return;
    }
    if (amigos.includes(nombreAmigo)) {
        alert('Ese nombre ya está en la lista, agregue un segundo nombre o apellido');
        return;
    }
    amigos.push(nombreAmigo);

    actualizarLista();
    limpiarCaja();
}

// Function para limpiar el cuadro del input
function limpiarCaja() {
    document.querySelector('input').value = '';
}

// Function para actualizar la lista de amigos en pantalla
function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let nuevoNombre = document.createElement('li');
        nuevoNombre.textContent = amigos[i];
        listaAmigos.appendChild(nuevoNombre);
    }
}

// Function para realizar un sorteo y seleccionar un ganador
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para realizar el sorteo');
        return;
    }

    let indiceGanador = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indiceGanador];

    // Limpiar la lista y mostrar solo el nombre del ganador
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista
    let nombreGanador = document.createElement('li');
    nombreGanador.textContent = ganador;
    listaAmigos.appendChild(nombreGanador);


}

// Agregar evento al botón de sorteo
document.getElementById('button-draw').addEventListener('click', sortearGanador);