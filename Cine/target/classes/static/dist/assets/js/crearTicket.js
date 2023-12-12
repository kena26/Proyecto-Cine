async function crearTicket() {
    let baseUrl = "http://localhost:8080";

    // Input time string
    var timeString = sessionStorage.hora;

    // Trim the last two characters (":PM")
    timeString = timeString.slice(0, -3);

    // Split the time string into hours and minutes
    var timeArray = timeString.split(":");
    var hours = parseInt(timeArray[0]);
    var minutes = parseInt(timeArray[1]);

    // Convert to 24-hour format
    if (timeString.includes("PM") && hours < 12) {
        hours += 12;
    } else if (timeString.includes("AM") && hours === 12) {
        hours = 0;
    }

    // Format the result
    var result = hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0');

    try {
        let PasoQr = {
            sede: sessionStorage.sede,
            pelicula: sessionStorage.pelicula,
            sala: 1,
            fecha: sessionStorage.fecha,
            hora: result,
            boletos: JSON.parse(localStorage.boletos).ticket,
            nombreSala: sessionStorage.nombreSala
        }

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