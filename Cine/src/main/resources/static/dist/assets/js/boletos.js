function increment(type) {
    const cantidadElement = document.getElementById(`${type}Cantidad`);
    const totalElement = document.getElementById('total');

    let cantidad = parseInt(cantidadElement.innerText);
    cantidad++;
    cantidadElement.innerText = cantidad;

    let total = parseFloat(totalElement.innerText.replace('$', ''));
    if (type === 'jubilado') {
        total += 2.00;
    } else {
        total += 3.00;
    }
    totalElement.innerText = `$${total.toFixed(2)}`;
}

function decrement(type) {
    const cantidadElement = document.getElementById(`${type}Cantidad`);
    const totalElement = document.getElementById('total');

    let cantidad = parseInt(cantidadElement.innerText);
    if (cantidad > 0) {
        cantidad--;
        cantidadElement.innerText = cantidad;

        let total = parseFloat(totalElement.innerText.replace('$', ''));
        if (type === 'jubilado') {
            total -= 2.00;
        } else {
            total -= 3.00;
        }
        totalElement.innerText = `$${total.toFixed(2)}`;
    }
}