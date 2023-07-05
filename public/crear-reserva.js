const formCrearReserva = document.querySelector("#formNuevaReserva")

formCrearReserva.addEventListener('submit', async (e) => {
    e.preventDefault();

    const origen = document.querySelector('#origen').value;
    const destino = document.querySelector('#destino').value;
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const fecha_salida = document.querySelector('#fecha_salida').value;
    const fecha_llegada = document.querySelector('#fecha_llegada').value;
    const precio = document.querySelector('#precio').value;
    const telefono = document.querySelector('#telefono').value;
    const email = document.querySelector('#email').value;

    const reserva = {
        origen,
        destino,
        nombre,
        apellido,
        fecha_salida,
        fecha_llegada,
        precio,
        telefono,
        email
    }


    const response = await fetch('http://localhost:5050/api', {
        method: 'POST',
        body: JSON.stringify(reserva),
        headers: {
            'Content-Type': 'application/json' // Cuando se envían datos JSON al servidor
        }
    })

    const data = await response.json();

    alert(data.message)
    window.location.href = "/"


});

