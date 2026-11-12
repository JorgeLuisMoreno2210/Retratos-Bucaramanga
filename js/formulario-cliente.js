document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar recarga de página

    const name = document.getElementById('name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    const confirmationMessage = `
        Registro Éxitoso:
        Nombre Completo: ${name} ${lastName}
        Correo: ${email}
        Telefono: ${phone}
        Direccion: ${address}
    `;

    guardarDatos(name, lastName, email, phone, address);

    alert(confirmationMessage);
    window.location.href = "index.html";
});

function guardarDatos(name, lastName, email, phone, address) {
        // Crear un objeto con los datos del formulario
    let cliente = {
        nombreCompleto: name + ' ' + lastName,
        correo: email,
        telefono: phone,
        direccion: address
    };

    let listaDeClientes = JSON.parse(localStorage.getItem("listaDeClientes")) || [];

    listaDeClientes.push(cliente);

    // Almacenar los datos en localStorage como un string JSON
    localStorage.setItem('listaDeClientes', JSON.stringify(listaDeClientes));
}