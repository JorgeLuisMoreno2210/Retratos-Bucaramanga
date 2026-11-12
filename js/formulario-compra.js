document.getElementById('quantity').addEventListener('change', function (event) {
    event.preventDefault();
    
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const value = document.getElementById('value');

    switch (product) {
        case 'Retratos (10 fotos)':
            value.value = quantity * 39900;           
            break;
        case 'Retratos (18 fotos)':
            value.value = quantity * 46900;
            break;
        case 'Imantadas (Photostrip)':
            value.value = quantity * 15000;
            break;
        case 'Imantadas (Mini Polaroid)':
            value.value = quantity * 5000;
            break;
        case 'Imantadas (Polaroid)':
            value.value = quantity * 7000;
            break;
        case 'Imantadas (Cuadrada)':
            value.value = quantity * 7000;
            break;
        case 'Retablo (14 x 14)':
            value.value = quantity * 25000;
            break;
        case 'Retablo (20 x 20)':
            value.value = quantity * 30000;
            break;
        case 'Retablo (20 x 30)':
            value.value = quantity * 35000;
            break;
        case 'Retablo (30 x 30)':
            value.value = quantity * 42000;
            break;
        case 'Retablo (30 x 45)':
            value.value = quantity * 47000;
            break;
        case 'Retablo (49 x 49)':
            value.value = quantity * 75000;
            break;
        case 'Acrílicos':
            value.value = quantity * 45000;
            break;
        default:
            value.value = '';
            break;
    }
});

document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar recarga de página

    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const value = document.getElementById('value').value;
    const deliveryDate = document.getElementById('deliveryDate').value;

    const confirmationMessage = `
        Agendamiento de pedido confirmado:
        Producto: ${product}
        Cantidad: ${quantity}
        Imagen: Cargada correctamente
        Fecha de entrega: ${deliveryDate}
    `;

    guardarDatos(product, quantity, value, deliveryDate);

    alert(confirmationMessage);
    window.location.href = "index.html";
});

function guardarDatos(product, quantity, value, deliveryDate) {
    let img = document.getElementById('productImage').value;

    // Crear un objeto con los datos del formulario
    let compra = {
        Producto: product,
        Cantidad: quantity,
        Valor: value,
        Imagen: img,
        FechaDeEntrega: deliveryDate
    };

    let listaDeCompras = JSON.parse(localStorage.getItem("listaDeCompras")) || [];

    listaDeCompras.push(compra);

    // Almacenar los datos en localStorage como un string JSON
    localStorage.setItem('listaDeCompras', JSON.stringify(listaDeCompras));
}