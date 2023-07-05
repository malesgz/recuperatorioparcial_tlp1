const formReserva = document.querySelector('#formNuevaReserva');
const reservaId = formReserva.dataset.id;

const origen = document.querySelector('#origen').value;
const destino = document.querySelector('#destino').value;
const nombre = document.querySelector('#nombre').value;
const apellido = document.querySelector('#apellido').value;
const fecha_salida = document.querySelector('#fecha_salida').value;
const fecha_llegada = document.querySelector('#fecha_llegada').value;
const precio = document.querySelector('#precio').value;
const telefono = document.querySelector('#telefono').value;
const email = document.querySelector('#email').value;
    


document.addEventListener('DOMContentLoaded', async () => {
    // Traemos la reserva que se va a editar
    const response = await fetch(`/api/${reservaId}`);
    const data = await response.json();

    // Mostrar en el formulario los datos de la reserva que se quiere actualizar
    origen.value = data.origen;
    destino.value = data.destino;
    nombre.value = data.nombre;
    apellido.value = data.apellido;
    fecha_salida.value = data.fecha_salida;
    fecha_llegada.value = data.fecha_llegada;
    precio.value = data.precio;
    telefono.value = data.telefono;
    email.value = data.email;
});


formReserva.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    reservaActualizada = {
        origen: origen.value,
        destino:  destino.value,
        nombre:  nombre.value,
        apellido: apellido.value,
        fecha_salida: fecha_salida.value,
        fecha_llegada: fecha_llegada.value,
        precio: precio.value,
        telefono: telefono.value,
        email: email.value,
    }


    // Se envían los nuevos datos al servidor express
    const response = await fetch(`/api/${reservaId}`, {
        method: 'PUT',
        body: JSON.stringify(reservaActualizada),
        headers: {
            'Content-Type':'application/json'
        }
    })

    // const data = await response.json();

    // Mostrar mensajes al usuario
    alert(data.message);

    // Redireccionar al usuario

})