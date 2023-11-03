function calcularTotal() {
    var cantidad = document.getElementById('cantidad').value;
    var categoria = document.getElementById('categorias').value;

    if (cantidad.trim() === '' || isNaN(cantidad)) {
        cantidad = 0;
    } else {
        cantidad = parseFloat(cantidad);
    }

    var precioEntrada = 500;
    var descuento = 0;

    if (categoria === '1') {
        descuento = 15;
    } else if (categoria === '2') {
        descuento = 40;
    } else if (categoria === '3') {
        descuento = 80;
    }

    var total = cantidad * precioEntrada * (1 - descuento / 100);

    document.getElementById('total-valor').innerText = total.toFixed(2);
}

document.getElementById('formulario').addEventListener('submit', function (event) {
    if (!validarFormulario()) {
        event.preventDefault();
    }
});

document.getElementById('categorias').addEventListener('change', calcularTotal);
document.getElementById('cantidad').addEventListener('input', calcularTotal);

calcularTotal();