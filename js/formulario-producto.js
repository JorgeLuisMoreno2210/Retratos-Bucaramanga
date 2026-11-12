document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar recarga de página

    const product = document.getElementById('product').value;
    const value = document.getElementById('value').value;
    const description = document.getElementById('description').value;

    const confirmationMessage = `
        Agendamiento de pedido confirmado:
        Producto: ${product}
        Valor: ${value}
        Descripcion: ${description}
        Imagen: Cargada correctamente
    `;

    guardarDatos(product, value, description);

    alert(confirmationMessage);
    window.location.href = "index.html";
});

function guardarDatos(product, value, description) {
    let img = document.getElementById('productImage').value;

    // Crear un objeto con los datos del formulario
    let producto = {
        Producto: product,
        Valor: value,
        Descripcion: description,
        Imagen: img
    };

    let listaDeProductos = JSON.parse(localStorage.getItem("listaDeProductos")) || [];

    listaDeProductos.push(producto);

    // Almacenar los datos en localStorage como un string JSON
    localStorage.setItem('listaDeProductos', JSON.stringify(listaDeProductos));
}