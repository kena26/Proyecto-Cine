function increment(type) {
    const cantidadElement = document.getElementById(`${type}Cantidad`);
    const totalElement = document.getElementById('total');

    let cantidad = parseInt(cantidadElement.innerText);
    cantidad++;
    cantidadElement.innerText = cantidad;

    let total = parseFloat(totalElement.innerText.replace('$', ''));
    if (type === 'jubilado' || type === 'discapacitado') {
        total += 2.00;
    } else {
        total += 3.00;
    }
    totalElement.innerText = `$${total.toFixed(2)}`;

    //Verifica cuantos boletos hay en el almacenamiento
	const tickeState = localStorage.getItem("boletos");
	const { ticket: storedTicket} =
		JSON.parse(tickeState);
	boletosTotal = storedTicket;
    boletosTotal++;
     //Guardar boletos en almacenamiento para usarlo en asientos
     localStorage.setItem(
        "boletos",
        JSON.stringify({ ticket: boletosTotal})
    );
}

function decrement(type) {
    const cantidadElement = document.getElementById(`${type}Cantidad`);
    const totalElement = document.getElementById('total');

    let cantidad = parseInt(cantidadElement.innerText);
    if (cantidad > 0) {
        cantidad--;
        cantidadElement.innerText = cantidad;

        let total = parseFloat(totalElement.innerText.replace('$', ''));
        if (type === 'jubilado' || type === 'discapacitado') {
            total -= 2.00;
        } else {
            total -= 3.00;
        }
        totalElement.innerText = `$${total.toFixed(2)}`;

        //Verifica cuantos boletos hay en el almacenamiento
	    const tickeState = localStorage.getItem("boletos");
	    const { ticket: storedTicket} =
		    JSON.parse(tickeState);
	    boletosTotal = storedTicket;
        boletosTotal--;
        //Guardar boletos en almacenamiento para usarlo en asientos
        localStorage.setItem(
            "boletos",
            JSON.stringify({ ticket: boletosTotal})
        );
    }
}

function reiniciarBoletos(){
    localStorage.setItem(
        "boletos",
        JSON.stringify({ ticket: 0})
    );
}

//Variables que serán usadas en la página comprafinalqr para el calculo del total
function guardarTiposBoletos() {
    sessionStorage.adultoCantidad = document.getElementById('adultoCantidad').innerText;
    sessionStorage.ninoCantidad = document.getElementById('ninoCantidad').innerText;
    sessionStorage.jubiladoCantidad = document.getElementById('jubiladoCantidad').innerText;
    sessionStorage.discapacitadoCantidad = document.getElementById('discapacitadoCantidad').innerText;
}