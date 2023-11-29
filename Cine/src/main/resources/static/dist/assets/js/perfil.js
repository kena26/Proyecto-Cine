document.addEventListener('DOMContentLoaded', function () {
    const usuarioDataString = sessionStorage.getItem('usuarioData');

    if (usuarioDataString) {
        const usuarioData = JSON.parse(usuarioDataString);

        document.getElementById('nombreNavBar').innerText = usuarioData.nombre;
        document.getElementById('apellidoNavBar').innerText = usuarioData.apellido;

        document.getElementById('nombreDatos').innerText = usuarioData.nombre;
        document.getElementById('apellidoDatos').innerText = usuarioData.apellido;
        document.getElementById('fechaNacimiento').innerText = usuarioData.fechaNacimiento;

        if (usuarioData.email) {
            document.getElementById('email').innerText = usuarioData.email;
        } else {
            console.error('Error: El campo "email" en usuarioData está vacío o undefined.');
        }

        document.getElementById('telefono').innerText = usuarioData.telefono;

        console.log('Datos del usuario:', usuarioData);


        if (usuarioData.tipoUsuario === "Admin") {

            document.getElementById('reporte').style.display = 'block';
            document.getElementById('Peliculas').style.display = 'none';
        } else {

            document.getElementById('Peliculas').style.display = 'block';
        }

    } else {
        console.error('Error: Datos del usuario no encontrados en sessionStorage');
    }

    const cerrarSesionBtn = document.getElementById('cerrarSesionBtn');
    cerrarSesionBtn.addEventListener('click', function () {

        sessionStorage.removeItem('usuarioData');

        window.location.href = './index.html';
    });
});


let spanNombre = document.getElementById('nombreDatos');
let spanApellido = document.getElementById('apellidoDatos');
let spanFecha = document.getElementById('fechaNacimiento');
let spanEmail = document.getElementById('email')
let spanTel = document.getElementById('telefono')
let cambiado = false;

function Cambios(span) {
    let currentSpan;
    let input = document.createElement("input");
    if (span == 1) {
        currentSpan = spanNombre;
        input.setAttribute("type", "text");
        input.setAttribute("id", "nombreDatos")
    }
    else if (span == 2) {
        currentSpan = spanApellido;
        input.setAttribute("type", "text");
        input.setAttribute("id", "apellidoDatos")
    }
    else if (span == 3) {
        currentSpan = spanFecha;
        input.setAttribute("type", "date");
        input.setAttribute("id", "fechaNacimiento")
    }
    else if (span == 4) {
        currentSpan = spanEmail;
        input.setAttribute("type", "email");
        input.setAttribute("id", "email")
    }
    else if (span == 5) {
        currentSpan = spanTel
        input.setAttribute("type", "tel");
        input.setAttribute("id", "telefono")
    }
    input.value = currentSpan.textContent;
    input.required = true;
    currentSpan.parentNode.replaceChild(input, currentSpan)
    cambiado = true;
}

function deshacerCambios(input, text) {
    if (input.tagName === "INPUT") {
        let spanElement = document.createElement("span");
        spanElement.textContent = input.value;
        spanElement.setAttribute("id", text)
        input.parentNode.replaceChild(spanElement, input);
    }
}

function actualizar() {
    //se necesita llamado para actualizarlo desde la bd

    if (cambiado == true) {
        let spanNombre = document.getElementById('nombreDatos');
        let spanApellido = document.getElementById('apellidoDatos');
        let spanFecha = document.getElementById('fechaNacimiento');
        let spanEmail = document.getElementById('email')
        let spanTel = document.getElementById('telefono')

        deshacerCambios(spanNombre, "nombreDatos");
        deshacerCambios(spanApellido, "apellidoDatos");
        deshacerCambios(spanFecha, "fechaNacimiento");
        deshacerCambios(spanEmail, "email");
        deshacerCambios(spanTel, "telefono");
        cambiado = false;
    }
    else {
        window.alert("No hay datos por actualizar")
    }
}