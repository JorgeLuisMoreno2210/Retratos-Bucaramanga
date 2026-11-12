document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar recarga de página

    const direction = document.getElementById('direction').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    const timeMin = document.getElementById('time-min').value;
    const timeMax = document.getElementById('time-max').value;

    const confirmationMessage = `
        Solicitud de Envio Éxitoso:
        Direccion: ${direction}
        Fecha: ${deliveryDate}
        Horario: ${timeMin} - ${timeMax}
    `;

    guardarDatos(direction, deliveryDate, timeMin, timeMax);

    alert(confirmationMessage);
    window.location.href = "index.html";
});

function guardarDatos(direction, deliveryDate, timeMin, timeMax) {
    // Crear un objeto con los datos del formulario
    let envio = {
        direccion: direction,
        fecha: deliveryDate,
        horaMinima: timeMin,
        horaMaxima: timeMax
    };

    let listaDeEnvios = JSON.parse(localStorage.getItem("listaDeEnvios")) || [];

    listaDeEnvios.push(envio);

    // Almacenar los datos en localStorage como un string JSON
    localStorage.setItem('listaDeEnvios', JSON.stringify(listaDeEnvios));
}