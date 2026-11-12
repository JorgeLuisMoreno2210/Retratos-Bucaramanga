document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar recarga de página

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const pqrs = document.getElementById('pqrs').value;

    const confirmationMessage = `
        PQRS Registrado Éxitoso:
        Nombre: ${name}
        Correo: ${email}
        Telefono: ${phone}
        PQRS: ${pqrs}
    `;

    guardarDatos(name, email, phone, pqrs);

    alert(confirmationMessage);
    window.location.href = "index.html";
});

function guardarDatos(name, email, phone, pqrs) {
    // Crear un objeto con los datos del formulario
    let peticion = {
        nombre: name,
        correo: email,
        telefono: phone,
        pqrs: pqrs
    };

    let listaDePQRS = JSON.parse(localStorage.getItem("listaDePQRS")) || [];

    listaDePQRS.push(peticion);

    // Almacenar los datos en localStorage como un string JSON
    localStorage.setItem('listaDePQRS', JSON.stringify(listaDePQRS));
}