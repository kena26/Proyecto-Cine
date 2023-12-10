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


let baseUrl = "http://localhost:8080";
async function crearTicket() {
    try {
        let PasoQr = {
            sede: "Sede de Howard", 
            pelicula: "peliculazo", 
            sala: 1,
            fecha: "2024-12-12", 
            hora: "00:00", 
            boletos: JSON.parse(localStorage.boletos).ticket,
            nombreSala: "prueba"
        }

        sessionStorage.adultoCantidad = document.getElementById('adultoCantidad').innerText;
        sessionStorage.ninoCantidad = document.getElementById('ninoCantidad').innerText;
        sessionStorage.jubiladoCantidad = document.getElementById('jubiladoCantidad').innerText;
        sessionStorage.discapacitadoCantidad = document.getElementById('discapacitadoCantidad').innerText;

        const res = await fetch(baseUrl + '/Cine/crearTicket', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(PasoQr)
        });

        if (res.ok) {
            sessionStorage.codigoConfirmacion = await res.text();            
        } else {
            console.error('Error:', res.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}


