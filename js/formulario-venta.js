document.getElementById('paymentMethod').addEventListener('change', function () {
    const creditCardDetails = document.getElementById('creditCardDetails');
    if (this.value === 'Tarjeta de Crédito') {
        creditCardDetails.style.display = 'block';
    } else {
        creditCardDetails.style.display = 'none';
    }
});

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

document.getElementById('salesForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar recarga de página

    const clientName = document.getElementById('clientName').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const value = document.getElementById('value').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const cardType = document.getElementById('cardType').value || 'No aplica';
    const saleDate = document.getElementById('saleDate').value;

    const confirmationMessage = `
        Venta registrada:
        Cliente: ${clientName}
        Producto: ${product}
        Cantidad: ${quantity}
        Valor: $${value}
        Medio de Pago: ${paymentMethod}
        Tipo de Tarjeta: ${cardType}
        Fecha: ${saleDate}
    `;
    guardarDatos(clientName, product, quantity, value, paymentMethod, cardType, saleDate);
    alert(confirmationMessage);
    window.location.href = "index.html";
});

function guardarDatos(clientName, product, quantity, value, paymentMethod, cardType, saleDate) {
    // Crear un objeto con los datos del formulario
    let venta = {
        Cliente: clientName,
        Producto: product,
        Cantidad: quantity,
        Valor: value,
        MedioDePago: paymentMethod,
        TipoDeTarjeta: cardType,
        Fecha: saleDate
    };

    let listaDeVentas = JSON.parse(localStorage.getItem("listaDeVentas")) || [];

    listaDeVentas.push(venta);

    // Almacenar los datos en localStorage como un string JSON
    localStorage.setItem('listaDeVentas', JSON.stringify(listaDeVentas));
}