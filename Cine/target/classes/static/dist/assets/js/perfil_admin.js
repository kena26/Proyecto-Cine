function cambiarFotoPerfil(element) {
    const url = element.src;
    document.getElementById('fotoperfil').src = url;
    cerrarSelector();
}

function mostrarSelector(){
    document.getElementById("selector").style.display="block";
}

function cerrarSelector(){
    document.getElementById("selector").style.display="none";
}