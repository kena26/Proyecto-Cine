let asientos = [];
let cantBoletos;

// Verifica si antes habia segundos o minutos
const storedState = localStorage.getItem("timerState");
if (storedState) {
	const { minutes: storedMinutes, seconds: storedSeconds } =
		JSON.parse(storedState);
	minutos = storedMinutes;
	segundos = storedSeconds;
} else {
	iniciar();
}
//Definimos los minutos y segundos
function iniciar() {
	minutos = 5;
	segundos = 0;
}
// Definimos y ejecutamos los segundos
function cargarSegundo() {
	let txtSegundos;

	if (segundos < 0) {
		segundos = 59;
		minutos--;
	}

	// Mostrar segundos en pantalla
	if (segundos < 10) {
		txtSegundos = `0${segundos}`;
	} else {
		txtSegundos = segundos;
	}
	document.getElementById("container-segundos").innerHTML = txtSegundos;

	// Mostrar minutos en pantalla
	let txtMinutos;
	if (minutos < 10) {
		txtMinutos = `0${minutos}`;
	} else {
		txtMinutos = minutos;
	}
	document.getElementById("container-minutos").innerHTML = txtMinutos;

	if (minutos === 0 && segundos === 0) {
		clearInterval(timer); // Detiene el temporizador
		localStorage.removeItem("timerState"); //Limpia el almacenamiento local
		document.getElementById("tiempoExcedido").classList.remove("hidden"); //Oculta el mensaje por inactividad
	} else {
		// Almacena el estado actual del temporizador en el almacenamiento local
		localStorage.setItem(
			"timerState",
			JSON.stringify({ minutes: minutos, seconds: segundos })
		);
	}

	segundos--;
}

//Para que muestre el siguiente mensaje de inactividad
function siguienteMensaje() {
	document.getElementById("container-message1").classList.add("hidden");
	document.getElementById("container-message2").classList.remove("hidden");
}

// Ejecutamos cada segundo
let timer = setInterval(cargarSegundo, 1000);

//Verifica cuantos boletos hay en el almacenamiento
const tickeState = localStorage.getItem("boletos");
const { ticket: storedTicket} =
	JSON.parse(tickeState);
cantBoletos = storedTicket;// (cantBoletos) es la cantidad de boletos que seleccionó, osea que no puede seleccionar más de esa cantidad


let baseUrl = "http://localhost:8080";
async function crearTicket() {
	try {
		let PasoQr = {
			sede: sessionStorage.sede,
			pelicula: sessionStorage.pelicula,
			sala: 1,
			fecha: sessionStorage.fecha,
			hora: sessionStorage.hora,
			boletos: JSON.parse(localStorage.boletos).ticket,
			nombreSala: sessionStorage.nombreSala
		}   
		sessionStorage.adultoCantidad = document.getElementById('adultoCantidad').innerText;
		sessionStorage.ninoCantidad = document.getElementById('ninoCantidad').innerText;
		sessionStorage.jubiladoCantidad = document.getElementById('jubiladoCantidad').innerText;
		sessionStorage.discapacitadoCantidad = document.getElementById('discapacitadoCantidad').innerText;

		/* let PasoQr = {
			sede: "Sede de Howard", 
			pelicula: "peliculazo", 
			sala: 1,
			fecha: "2024-12-12", 
			hora: "00:00", 
			boletos: JSON.parse(localStorage.boletos).ticket,
			nombreSala: "prueba"
		}*/

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
crearTicket();