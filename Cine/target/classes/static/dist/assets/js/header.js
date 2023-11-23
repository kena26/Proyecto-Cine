// cambiar texto placeholder de busqueda
let busquedaInput = document.getElementById('busqueda')
function cambios() {
    if (window.innerWidth < 640) {
        busquedaInput.placeholder = 'Buscar'
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

// los de backend, necesitan a ayuda del bd para esta parte

function userLogged(){
    let logged = false;
    if(logged===false){
        guestNavBar()
    }
    else{
        userNavBar()
    }
}