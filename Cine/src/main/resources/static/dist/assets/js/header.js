
// Deslizable del usuario
// logeado en su cuenta
function userNavBar(){
    let userNav = document.getElementById('user-slide')
    if(userNav.classList.contains('hidden')){
        userNav.classList.remove('hidden')
    }
    else{
        userNav.classList.add('hidden')
    }
}

//no logeado en su cuenta
function guestNavBar(){
    let guestNav = document.getElementById('guest-slide')
    if(guestNav.classList.contains('hidden')){
        guestNav.classList.remove('hidden')
    }
    else{
        guestNav.classList.add('hidden')
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const usuarioDataString = sessionStorage.getItem('usuarioData');
    const guestSlide = document.getElementById('guest-slide');
    const userSlide = document.getElementById('user-slide');

    if (usuarioDataString) {
        const usuarioData = JSON.parse(usuarioDataString);
        const usernamePlaceholder = document.getElementById('usernamePlaceholder');
        if (usernamePlaceholder) {
            usernamePlaceholder.innerText = `${usuarioData.nombre} ${usuarioData.apellido}`;
        }

        const rutaImagenPerfil = localStorage.getItem('rutaImagenPerfil');
        const perfilUsuario = document.getElementById('perfilUsuario');
        if (perfilUsuario && rutaImagenPerfil) {
            perfilUsuario.src = rutaImagenPerfil;
        }
    }
});

function userLogged() {
    const usuarioDataString = sessionStorage.getItem('usuarioData');
    const usuarioData = JSON.parse(usuarioDataString);
    console.log(usuarioData)
    if(usuarioData && Object.keys(usuarioData).length > 0){
        userNavBar()
    }
    else{
        guestNavBar()
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logoutButton');

    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            sessionStorage.removeItem('usuarioData');
            window.location.href = './home.html';
        });
    }

    const irPerfilUsuarioBtn = document.getElementById('perfilUsuarioBtn');
    if (irPerfilUsuarioBtn) {
        irPerfilUsuarioBtn.addEventListener('click', function () {
            irAPerfilUsuario();
        });
    }
});

function irAPerfilUsuario() {
    const usuarioDataString = sessionStorage.getItem('usuarioData');

    if (usuarioDataString) {
        window.location.href = './perfil-usuario.html';
    } else {
        window.location.href = './inicio-sesion.html';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const rutaImagenPerfil = localStorage.getItem('rutaImagenPerfil');
    const perfilUsuario = document.getElementById('perfilUsuario');

    if (perfilUsuario && rutaImagenPerfil) {
        perfilUsuario.src = rutaImagenPerfil;
    }
});




// cambiar texto placeholder de busqueda
let busquedaInput = document.getElementById('busqueda')
function cambios() {
    if (window.innerWidth < 640) {
        busquedaInput.placeholder = 'Buscar'
    }
    else{
        busquedaInput.placeholder = 'Busca tu Película'
    }
}
cambios()
window.addEventListener('resize', function () {
    cambios()
})


//Funcionalidad para la seleccion de localizacion de cine
document.getElementById('provincia').addEventListener('change', function () {
    console.log('Change event triggered');
    var provinciaSelect = document.getElementById('provincia');
    var cineSelect = document.getElementById('cine');
    var selectedProvincia = provinciaSelect.value;
    cineSelect.innerHTML = '';
    if (selectedProvincia === 'panamaEste') {
        addOption(cineSelect, 'CVLS', 'Campus Victor Levi Sasso');
        addOption(cineSelect, 'TOC', 'Sede de Tocumen');
        addOption(cineSelect, 'HOW', 'Sede de Howard')
    }
    else if (selectedProvincia === 'panamaOeste') {
        addOption(cineSelect, 'CPO', 'Centro Regional de Panamá Oeste');
    }
    else if (selectedProvincia === 'bocas') {
        addOption(cineSelect, 'CBT', 'Centro Regional de Bocas del Toro');
    }
    else if (selectedProvincia === 'chiriqui') {
        addOption(cineSelect, 'CHI', 'Centro Regional de Chiriquí');
    }
    else if (selectedProvincia === 'colon') {
        addOption(cineSelect, 'COL', 'Centro Regional de Colón');
    }
    else if (selectedProvincia === 'veraguas') {
        addOption(cineSelect, 'VER', 'Centro Regional de Veraguas');
    }
});

function addOption(selectElement, value, text) {
    var option = document.createElement('option');
    option.value = value;
    option.text = text;
    selectElement.add(option);
}