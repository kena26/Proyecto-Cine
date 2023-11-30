const urlbase = 'http://localhost:8080';
let peliculas = [];
let editarPelis = [];
let actoresData = {
    "actores":[]
};
let directoresData = {
    "directores": []
};
let sucursales = [];
let contDirectorNuevo;
let contDirectorGuardado;
let contActorNuevo;
let contActorGuardado;

let nombrePelicula;
let duracion;
let sinopsis;
let clasificacion;
let genero;
let foto_poster;
let id_tipoP;
let trailer;

function scrollEditToBottom() {
    const containerEdit = document.getElementById("containerEdit");
    containerEdit.scrollTop = containerEdit.scrollHeight;
}
//Escucha para seleccionar todos los checkbox
document.getElementById('seleccionarTodos').addEventListener('change', function() {
    let checkboxes = document.getElementsByClassName('checkboxes');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = this.checked;
    }
});


//Escucha cuando le das click al boton y muestra el desplegable
document.getElementById('boton-flecha-abajo').addEventListener('click', function(){
    document.getElementById('dropdown').classList.remove('hidden');
    document.getElementById('bgDropdown').classList.remove('hidden');

    // Agregar un escucha al documento para cerrar el dropdown al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        let dropdown = document.getElementById('dropdown');

        // Verificar si el clic no ocurrió dentro del dropdown
        if (!dropdown.contains(event.target) && event.target !== document.getElementById('boton-flecha-abajo')) {
            dropdown.classList.add('hidden');
            document.getElementById('bgDropdown').classList.add('hidden');
        }
    });
});
function ocultarClickDropdwown(){
    document.getElementById('dropdown').classList.add('hidden');
    document.getElementById('bgDropdown').classList.add('hidden');
}
//Función para cargar todas las peliculas
function cargarPeliculas(filtro){
        
    if(filtro === 'all'){//Va a imprimir todas las peliculas cuando seleccione todas las sucursales
        fetch(`${urlbase}/Cine/peliculas`)
        .then((response) => {response.json()
        .then((json) => {
                peliculas = json;
                ImprimirPeliculas();
            });
        })
        .catch(error => {
            console.error("Error al obtener las películas:", error);
        });
    }else if(filtro === 'CVLS'){//Va a imprimir la pelicula de la sucursal que ha seleccionado

    }else if(filtro === 'TOC'){//Va a imprimir la pelicula de la sucursal que ha seleccionado

    }else if(filtro === 'HOW'){//Va a imprimir la pelicula de la sucursal que ha seleccionado

    }else if(filtro === 'CPO'){//Va a imprimir la pelicula de la sucursal que ha seleccionado

    }else if(filtro === 'CBT'){//Va a imprimir la pelicula de la sucursal que ha seleccionado

    }else if(filtro === 'CHI'){//Va a imprimir la pelicula de la sucursal que ha seleccionado

    }else if(filtro === 'COL'){//Va a imprimir la pelicula de la sucursal que ha seleccionado

    }else if(filtro === 'VER'){//Va a imprimir la pelicula de la sucursal que ha seleccionado

    }else{//Va a imprimir todas las peliculas al cargar la pagina
        fetch(`${urlbase}/Cine/peliculas`)
        .then((response) => {response.json()
        .then((json) => {
                peliculas = json;
                ImprimirPeliculas();
            });
        })
        .catch(error => {
            console.error("Error al obtener las películas:", error);
        });
    }
}

//ImprimirPeliculas
function ImprimirPeliculas(){
    let contenedor = document.getElementById('allMovies');
    contenedor.innerHTML = "";

    peliculas.forEach((pelicula) => {
        contenedor.innerHTML += MapearPeliculas(pelicula);
    });
}
//Mapear las peliculas
function MapearPeliculas(pelicula){
    return `
    <tr class="max-sm:relative">
        <td class="h-10 border-b border-gray-500 hover:border-black">
            <div class="table-row">
                <div class="table-cell w-8 h-5">
                    <label class="w-5 h-5 cursor-pointer overflow-hidden flex justify-center items-center rounded-sm bg-gray-600 max-sm:bg-gray-400">
                        <input type="checkbox" id="${pelicula.id_pelicula}" class="checkboxes peer hidden">
                        <img 
							class="w-5 max-sm:w-4 h-5 max-sm:h-4 rounded-sm opacity-0 peer-checked:opacity-100 scale-0 transition-all z-20 duration-300 peer-checked:transition-all top-2 left-2 peer-checked:scale-100 peer-checked:duration-300"
							src="/Cine/src/main/resources/static/dist/assets/icon/cheque.png">
                    </label>
                </div>
                <div class="table-cell">
                    <p class="max-w-[400px] font-bold text-xl max-sm:text-base">${pelicula.nombrePelicula} #${pelicula.id_pelicula}</p>
                </div>
                <div class="table-cell absolute left-[40%] max-sm:left-[90%]">
                    <button onclick="mostrarAddPeli('editarBtn', ${pelicula.id_pelicula})" id="editarBtn" class="flex justify-center items-center">
                        <img class="w-5 h-5 hover:w-6 hover:h-6 max-sm:rotate-90 transition-all duration-300 "
                        src="/Cine/src/main/resources/static/dist/assets/icon/lapiz-editar.svg" alt="">
                    </button>
                </div>
            </div>
        </td>
    </tr>
    `;
} 
//Cargar pelicula individual para editar
function cargarPeli(idPeli) {
    fetch(`${urlbase}/Cine/${idPeli}`)
        .then(response => {
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            return response.json();
        })
        .then(data => {

            editarPelis = data;
            
        })
        .catch(error => {
            console.error("Error al buscar la película:", error);
        });
}


//Logica para añadir la pelicula a la base de datos
function agregarPeli() {
    let director = "directorPrueba";

    const peli = {
        duracion,
        director,
        sinopsis,
        clasificacion,
        genero,
        nombrePelicula,
        trailer,
        id_tipoP,
        foto_poster
    };

    console.log(peli);
    
    fetch(`${urlbase}/Cine/agregar`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(peli),
    })
    .then(response => {
        
        const contentType = response.headers.get('Content-Type');
        if (response.ok && contentType && contentType.includes('application/json')) {
            return response.json();
        } else {
            return null; 
        }
    })
    .then(data => {
        if (data !== null) {
            console.log('Película guardada con éxito:', data);
        } else {
            console.log('Película guardada con éxito, pero la respuesta no es JSON o está vacía.');
        }
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
    });
    cargarPeliculas('all');
}
 
//Logica para actualizar/modificar la pelicula en la base de datos
function actualizarPeli(){
    if (!editarPelis) {
        console.error("Error: No se ha cargado la información de la película a actualizar.");
        return;
    }

    const peliculaActualizada = {
        duracion: document.getElementById('nuevaDuracion').value,
        director: document.getElementById('nuevoDirector').value,
        sinopsis: document.getElementById('nuevaSinopsis').value,
        clasificacion: document.getElementById('nuevaClasificacion').value,
        genero: document.getElementById('nuevoGenero').value,
        nombrePelicula: document.getElementById('nuevoNombrePelicula').value,
        trailer: document.getElementById('nuevoTrailer').value,
        id_tipoP: document.getElementById('nuevoIdTipoP').value,
        foto_poster: document.getElementById('nuevaFotoPoster').value,
        // Agrega otros campos según sea necesario
    };

    fetch(`${urlbase}/Cine/actualizarPelicula/${editarPelis.id_pelicula}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(peliculaActualizada),
    })
    .then(response => {
        
        if (response.ok) {
            console.log('Película actualizada con éxito');
            
            console.error('Error al actualizar la película. Código de estado:', response.status);
        }
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
    });

}
//Logica para eliminar la pelicula de la base de datos
function eliminarPelis(idPelicula) {
    fetch(`${urlbase}/Cine/eliminarPelicula/${idPelicula}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
    });
}

function botonEliminar(){
    const checkboxes = document.getElementsByClassName('checkboxes');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            const idPeliculaAEliminar = checkboxes[i].id;
            eliminarPelis(idPeliculaAEliminar);
        }
    }
}

//Mostrar la ventana de añadir/editar peliculas
function mostrarAddPeli(accion, idPeli){
    if(document.getElementById('containerEliminar').classList.contains('hidden')){
        document.getElementById('editPeli').classList.remove('hidden');
    }else{
        document.getElementById('containerEliminar').classList.add('hidden');
        document.getElementById('editPeli').classList.remove('hidden');
    }
    let containerBtn = document.getElementById('containerBtn');
    let containerDirector = document.getElementById('containerFilmDirector');
    let containerActor = document.getElementById('containerActor');
    

    //Esto rellena el formulario dependiendo si es en añadir/editar
    if(accion === 'editarBtn'){
        //Logica para traer los datos a todos los campos para editar
        cargarPeli(idPeli);
        
        setTimeout(() => {
            document.getElementById('titulo').value = editarPelis.nombrePelicula;
            document.getElementById('duracion').value = editarPelis.duracion;
            document.getElementById('sinopsis').value = editarPelis.sinopsis;
            document.getElementById('clasificacion').value = editarPelis.clasificacion;
            document.getElementById('genero').value = editarPelis.genero;
            document.getElementById('foto_poster').value = editarPelis.foto_poster;
            document.getElementById('calificacion').value = editarPelis.id_tipoP;
            document.getElementById('trailer').value = editarPelis.trailer;
            //Directores
            directoresData ={
                "directores": []
            };
            containerDirector.innerHTML = "";
            contDirectorNuevo = 1;
            //Actores
            actoresData ={
                "actores": []
            };
            containerActor.innerHTML = "";
            contActorNuevo = 1;
            
            /*mostrarSucursales(idPeli, accion);
            cargarDirectores(idPeli);
            cargarActores(idPeli);*/
        }, 700);
    }else if(accion === 'agregarBtn'){
        //Logica para traer los datos a todos los campos para añadir
        //Directores
        containerDirector.innerHTML = "";
        contDirectorNuevo = 1;
        directoresData ={
            "directores": []
        };
        containerDirector.innerHTML=`
            <input id="directorNombre${contDirectorNuevo}" onkeyup="agregarDirectoresEscribir(this.id)" type="text" placeholder="Nombre" class="px-2 py-1 mx-1 rounded-lg focus:outline-none placeholder:font-bold placeholder:text-center col-span-2">
            <input id="directorApellido${contDirectorNuevo}" onkeyup="agregarDirectoresEscribir(this.id)" type="text" placeholder="Apellido" class="px-2 py-1 mx-1 rounded-lg focus:outline-none placeholder:font-bold placeholder:text-center col-span-2">
        `;
        //Actores
        containerActor.innerHTML = "";
        contActorNuevo = 1;
        actoresData ={
            "actores": []
        };
        containerActor.innerHTML = `
            <label for="actor" class="col-span-4 text-center text-white">Actor 1:</label>
            <input id ="actorNombre${contActorNuevo}" onkeyup="agregarActoresEscribir(this.id)" type="text" placeholder="Nombre" class="px-2 py-1 rounded-lg focus:outline-none placeholder:font-bold placeholder:text-center col-span-2">
            <input id ="actorApellido${contActorNuevo}" onkeyup="agregarActoresEscribir(this.id)" type="text" placeholder="Apellido" class="px-2 py-1 rounded-lg focus:outline-none placeholder:font-bold placeholder:text-center col-span-2">
            
            <label for="foto" class="col-span-4 text-center text-white">Foto:</label>
            <input id ="foto${contActorNuevo}" onkeyup="agregarActoresEscribir(this.id)" type="url" placeholder="URL" class="px-2 py-1 rounded-lg focus:outline-none  placeholder:font-bold col-span-4">
            <button onclick="agregarActores('agregarBtn')" type="button" class="w-20 px-2 py-1 relative top-[30%] left-[35%] col-span-4 rounded-lg text-white bg-Piano-Black">+ Añadir</button>
        `;
    }
    //Este es para mapear los botones de cancelar y añadir/editar
    containerBtn.innerHTML = "";
    containerBtn.innerHTML = realizarAccion(accion);
}

function cargarDirectores(idPeli){
    let containerDirector = document.getElementById('containerFilmDirector');
    contDirectorGuardado = editarPelis[idPeli].directores.length;
    editarPelis[idPeli].directores.forEach(director => {
        let nuevoDirector = {
            "nombre": director.nombre ,
            "apellido": director.apellido
        };
        directoresData.directores.push(nuevoDirector);
    });

    containerDirector.innerHTML=`
        <input value="${directoresData.directores[0].nombre}" id="directorNombre${contDirectorNuevo}" onkeyup="agregarDirectoresEscribir(this.id)" type="text" placeholder="Nombre" class="px-2 py-1 mx-1 rounded-lg focus:outline-none placeholder:font-bold placeholder:text-center col-span-2">
        <input value="${directoresData.directores[0].apellido}" id="directorApellido${contDirectorNuevo}" onkeyup="agregarDirectoresEscribir(this.id)" type="text" placeholder="Apellido" class="px-2 py-1 mx-1 rounded-lg focus:outline-none placeholder:font-bold placeholder:text-center col-span-2">
    `;

    for(let i =  1 ; i < contDirectorGuardado ; i++){
        containerDirector.innerHTML+=`
            <input value="${directoresData.directores[i].nombre}" id="directorNombre${i+1}" onkeyup="agregarDirectoresEscribir(this.id)" type="text" placeholder="Nombre" class="px-2 py-1 mx-1 rounded-lg focus:outline-none placeholder:font-bold placeholder:text-center col-span-2">
            <input value="${directoresData.directores[i].apellido}" id="directorApellido${i+1}" onkeyup="agregarDirectoresEscribir(this.id)" type="text" placeholder="Apellido" class="px-2 py-1 mx-1 rounded-lg focus:outline-none placeholder:font-bold placeholder:text-center col-span-2">
            `;
    }
}

function cargarActores(idPeli){
    let containerActor = document.getElementById('containerActor');
    contActorGuardado = editarPelis[idPeli].actores.length;
    editarPelis[idPeli].actores.forEach(actor => {
        let nuevoActor = {
            "nombre": actor.nombreActor ,
            "apellido": actor.apellidoActor,
            "perfil": actor.perfil
        };
        actoresData.actores.push(nuevoActor);
    });


    for(let i =  0 ; i < contActorGuardado ; i++){
        containerActor.innerHTML+=`
            <label for="actor" class="col-span-4 text-center text-white">Actor ${i+1}:</label>
            <input value="${actoresData.actores[i].nombre}" id="actorNombre${i+1}" onkeyup="agregarActoresEscribir(this.id)" type="text" placeholder="Nombre" class="px-2 py-1 rounded-lg focus:outline-none placeholder:font-bold placeholder:text-center col-span-2">
            <input value="${actoresData.actores[i].apellido}" id="actorApellido${i+1}" onkeyup="agregarActoresEscribir(this.id)" type="text" placeholder="Apellido" class="px-2 py-1 rounded-lg focus:outline-none placeholder:font-bold placeholder:text-center col-span-2">
            
            <label for="foto" class="col-span-4 text-center text-white">Foto:</label>
            <input value="${actoresData.actores[i].foto}" onkeyup="agregarActoresEscribir(this.id)" id="foto${i+1}" type="url" placeholder="URL" class="px-2 py-1 rounded-lg focus:outline-none  placeholder:font-bold col-span-4">
            <button onclick="agregarActores('editarBtn')" type="button" class="w-20 px-2 py-1 relative top-[30%] left-[35%] col-span-4 rounded-lg text-white bg-Piano-Black">+ Añadir</button>
        `;
    }
}

function agregarTituloEscribir(idInputs){
    nombrePelicula=document.getElementById(idInputs).value;
    
    estilosInput(idInputs);
}

function agregarDuracionEscribir(idInputs){
    duracion=document.getElementById(idInputs).value;
    
    estilosInput(idInputs);
}

function agregarDescripcionEscribir(idInputs){
    sinopsis=document.getElementById(idInputs).value;
    
    estilosInput(idInputs);
}
function agregarClasificacionEscribir(idInputs){
    clasificacion=document.getElementById(idInputs).value;
    
    estilosInput(idInputs);
}
function agregarGeneroEscribir(idInputs){
    genero=document.getElementById(idInputs).value;
    
    estilosInput(idInputs);
}
function agregarPosterEscribir(idInputs){
    foto_poster=document.getElementById(idInputs).value;
    
    estilosInput(idInputs);
}
function agregarCalificacionEscribir(idInputs){
    id_tipoP=document.getElementById(idInputs).value;
    
    estilosInput(idInputs);
}
function agregarTrailerEscribir(idInputs){
    trailer=document.getElementById(idInputs).value;
    
    estilosInput(idInputs);
}

function agregarDirectoresEscribir(idInputs){
    directoresData ={
        "directores": []
    };

    for(let i = 0 ; i < contDirectorNuevo ; i++){
        let nombre = document.getElementById(`directorNombre${i+1}`).value;
        let apellido = document.getElementById(`directorApellido${i+1}`).value;
        let nuevoDirector = {
        "nombre": nombre || "" ,
        "apellido": apellido || ""
        };
        directoresData.directores.push(nuevoDirector);
    }

    estilosInput(idInputs);
}

function agregarActoresEscribir(idInputs){
    actoresData ={
        "actores": []
    };

    for(let i = 0 ; i < contActorNuevo ; i++){
        let nombreActor = document.getElementById(`actorNombre${i+1}`).value;
        let apellidoActor = document.getElementById(`actorApellido${i+1}`).value;
        let perfil = document.getElementById(`foto${i+1}`).value;
        let nuevoActor = {
        "nombreActor": nombreActor || "" ,
        "apellidoActor": apellidoActor || "",
        "perfil": perfil || ""
        };
        actoresData.actores.push(nuevoActor);
    }
    estilosInput(idInputs);
}

function estilosInput(idInputs){
    document.getElementById(idInputs).classList.add('ring');
    document.getElementById(idInputs).classList.add('ring-green-500');
    document.getElementById(idInputs).classList.add('ring-inset');
    setTimeout(() => {
        document.getElementById(idInputs).classList.remove('ring');
        document.getElementById(idInputs).classList.remove('ring-green-500');
        document.getElementById(idInputs).classList.remove('ring-inset');
    }, 500);
}

function agregarDirectores(accion){
    let containerDirector = document.getElementById('containerFilmDirector');
    
    directoresData ={
      "directores": []
    };

    if(accion === 'editarBtn'){
        for(let i = 0 ; i < contDirectorGuardado ; i++){
            let nombre = document.getElementById(`directorNombre${i+1}`).value;
            let apellido = document.getElementById(`directorApellido${i+1}`).value;
            let nuevoDirector = {
            "nombre": nombre || "" ,
            "apellido": apellido || ""
            };
            directoresData.directores.push(nuevoDirector);
        }

        for(let i = 0; i < 1 ; i++){
            containerDirector.innerHTML += `
                <input id="directorNombre${contDirectorGuardado+1}" onkeyup="agregarDirectoresEscribir(this.id)"  type="text" placeholder="Nombre" class="px-2 py-1 mx-1 rounded-lg focus:outline-none placeholder:font-bold placeholder:text-center col-span-2">
                <input id="directorApellido${contDirectorGuardado+1}" onkeyup="agregarDirectoresEscribir(this.id)"  type="text" placeholder="Apellido" class="px-2 py-1 mx-1 rounded-lg focus:outline-none placeholder:font-bold placeholder:text-center col-span-2">
            `;
        }
        contDirectorGuardado++;
    }else{
        for(let i = 0 ; i < contDirectorNuevo ; i++){
            let nombre = document.getElementById(`directorNombre${i+1}`).value;
            let apellido = document.getElementById(`directorApellido${i+1}`).value;
            let nuevoDirector = {
            "nombre": nombre || "" ,
            "apellido": apellido || ""
            };
            directoresData.directores.push(nuevoDirector);
        }

        for(let i = 0; i < 1 ; i++){
            containerDirector.innerHTML += `
                <input id="directorNombre${contDirectorNuevo+1}" onkeyup="agregarDirectoresEscribir(this.id)"  type="text" placeholder="Nombre" class="px-2 py-1 mx-1 rounded-lg focus:outline-none placeholder:font-bold placeholder:text-center col-span-2">
                <input id="directorApellido${contDirectorNuevo+1}" onkeyup="agregarDirectoresEscribir(this.id)"  type="text" placeholder="Apellido" class="px-2 py-1 mx-1 rounded-lg focus:outline-none placeholder:font-bold placeholder:text-center col-span-2">
            `;
        }
    }

    for(let i = 0 ; i < directoresData.directores.length ; i++){
        document.getElementById(`directorNombre${i+1}`).value = directoresData.directores[i].nombre;
        document.getElementById(`directorApellido${i+1}`).value = directoresData.directores[i].apellido;
    }
    
    contDirectorNuevo++;
}

function agregarActores(accion){
    let containerActor = document.getElementById('containerActor');
    
    actoresData ={
      "actores": []
    };

    if(accion === 'editarBtn'){
        for(let i = 0 ; i < contActorGuardado ; i++){
            let nombreActor = document.getElementById(`actorNombre${i+1}`).value;
            let apellidoActor = document.getElementById(`actorApellido${i+1}`).value;
            let perfil = document.getElementById(`foto${i+1}`).value;
            let nuevoActor = {
            "nombreActor": nombreActor || "" ,
            "apellidoActor": apellidoActor || "",
            "perfil": perfil || ""
            };
            actoresData.actores.push(nuevoActor);
        }

        for(let i = 0; i < 1 ; i++){
            containerActor.innerHTML += `
            <label for="actor" class="col-span-4 text-center text-white">Actor ${contActorGuardado+1}:</label>
            <input id="actorNombre${contActorGuardado+1}" onkeyup="agregarActoresEscribir(this.id)" type="text" placeholder="Nombre" class="px-2 py-1 rounded-lg focus:outline-none placeholder:font-bold placeholder:text-center col-span-2">
            <input id="actorApellido${contActorGuardado+1}" onkeyup="agregarActoresEscribir(this.id)" type="text" placeholder="Apellido" class="px-2 py-1 rounded-lg focus:outline-none placeholder:font-bold placeholder:text-center col-span-2">
            
            <label for="foto" class="col-span-4 text-center text-white">Foto:</label>
            <input id="foto${contActorGuardado+1}" onkeyup="agregarActoresEscribir(this.id)" type="url" placeholder="URL" class="px-2 py-1 rounded-lg focus:outline-none  placeholder:font-bold col-span-4">
            <button onclick="agregarActores('editarBtn')" type="button" class="w-20 px-2 py-1 relative top-[30%] left-[35%] col-span-4 rounded-lg text-white bg-Piano-Black">+ Añadir</button>
            `;
        }
        contActorGuardado++;
    }else if(accion === 'agregarBtn'){
        for(let i = 0 ; i < contActorNuevo ; i++){
            let nombreActor = document.getElementById(`actorNombre${i+1}`).value;
            let apellidoActor = document.getElementById(`actorApellido${i+1}`).value;
            let perfil = document.getElementById(`foto${i+1}`).value;
            let nuevoActor = {
            "nombreActor": nombreActor || "" ,
            "apellidoActor": apellidoActor || "",
            "perfil": perfil || ""
            };
            actoresData.actores.push(nuevoActor);
        }

        for(let i = 0; i < 1 ; i++){
            containerActor.innerHTML += `
            <label for="actor" class="col-span-4 text-center text-white">Actor ${contActorNuevo+1}:</label>
            <input id="actorNombre${contActorNuevo+1}" onkeyup="agregarActoresEscribir(this.id)" type="text" placeholder="Nombre" class="px-2 py-1 rounded-lg focus:outline-none placeholder:font-bold placeholder:text-center col-span-2">
            <input id="actorApellido${contActorNuevo+1}" onkeyup="agregarActoresEscribir(this.id)" type="text" placeholder="Apellido" class="px-2 py-1 rounded-lg focus:outline-none placeholder:font-bold placeholder:text-center col-span-2">
            
            <label for="foto" class="col-span-4 text-center text-white">Foto:</label>
            <input id="foto${contActorNuevo+1}" onkeyup="agregarActoresEscribir(this.id)" type="url" placeholder="URL" class="px-2 py-1 rounded-lg focus:outline-none  placeholder:font-bold col-span-4">
            <button onclick="agregarActores('agregarBtn')" type="button" class="w-20 px-2 py-1 relative top-[30%] left-[35%] col-span-4 rounded-lg text-white bg-Piano-Black">+ Añadir</button>
            `;
        }
    }

    for(let i = 0 ; i < actoresData.actores.length ; i++){
        document.getElementById(`actorNombre${i+1}`).value = actoresData.actores[i].nombreActor;
        document.getElementById(`actorApellido${i+1}`).value = actoresData.actores[i].apellidoActor;
        document.getElementById(`foto${i+1}`).value = actoresData.actores[i].perfil;
    }
    contActorNuevo++;
    scrollEditToBottom();
}

function agregarActoresEnBaseDeDatos(){

    for (let i = 0; i < actoresData.actores.length; i++) {
        let nombreActor = actoresData.actores[i].nombreActor;
        let apellidoActor = actoresData.actores[i].apellidoActor;
        let perfil = actoresData.actores[i].perfil;

        const actor ={
            nombreActor,
            apellidoActor,
            perfil
        }
        console.log(actor);
        fetch(`${urlbase}/Cine/agregarActor`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(actor),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
        });
    }

    
}


//Ocultar la ventana de añadir/editar peliculas
function ocultarEditPeli(){
    document.getElementById('editPeli').classList.add('hidden');
    let formPeli = document.querySelectorAll('#formPeli input');
    document.getElementById('sinopsis').value="";
    //Limpiamos todos los input al cancelar
    formPeli.forEach(input => {
        input.value = "";
    });
    sucursales=[];
    let buttonSucursal = document.getElementsByClassName('buttonSucursal');
    Array.from(buttonSucursal).forEach(boton => {
        boton.classList.add('hidden');
    });
}

//Escucha cuando un checkbox cambia
let checkSucursales = document.querySelectorAll('.checkSucursales');
// Itera sobre cada checkbox y agrega el eventListener
Array.from(checkSucursales).forEach(check => {
    check.addEventListener('change', function() {
        let buttonSucursal = document.getElementsByClassName('buttonSucursal');

            if (check.checked) {//Cuando un checbox esta marcado busca cual y lo muestra
                Array.from(buttonSucursal).forEach(button => {
                    if (check.getAttribute('name') === button.getAttribute('name')) {
                        button.classList.remove('hidden');
                    }
                });
            } else {//Cuando un checbox esta desmarcado busca cual y lo oculta
                Array.from(buttonSucursal).forEach(button => {
                    if (check.getAttribute('name') === button.getAttribute('name')) {
                        button.classList.add('hidden');
                    }
                });
            }
    });
});
//Funcion para mostrar las sucursales
function mostrarSucursales(idPeli, accion){
    document.getElementById('editSucursales').classList.remove('hidden');
    let checkSucursales = document.getElementsByClassName('checkSucursales');
    
    for (let i = 0; i < checkSucursales.length; i++) {
        if(accion === 'editarBtn'){//Si le da a editar carga las sucursales de la pelicula
            document.getElementById('editSucursales').classList.add('hidden');
            peliculas[idPeli].sucursales.forEach(sucursal => {
                sucursales.push(sucursal);
                for(let i = 0 ; i < checkSucursales.length ; i++){
                    if(checkSucursales[i].getAttribute('name') === sucursal){
                        checkSucursales[i].checked = true;
                        mostrarBtnSucursal(sucursal);
                    }
                }
            });
        }else{//Sino demarca todos los checkbox
            checkSucursales[i].checked = false;
        }
    }
    //Carga las sucursales
    for(let i = 0; i < sucursales.length;i++){
        for(let j = 0; j < checkSucursales.length;j++){
            if(checkSucursales[j].getAttribute('name') === sucursales[i]){
                checkSucursales[j].checked = true;
            }
        }

    }
}
function mostrarBtnSucursal(data){
    checkSucursales.forEach(check => {
        if(check.getAttribute('name') === data){
            check.checked = true;
            ocultarSucursales();
            let buttonSucursal = document.getElementsByClassName('buttonSucursal');
            Array.from(buttonSucursal).forEach(button => {
                if (check.getAttribute('name') === button.getAttribute('name')) {
                    button.classList.remove('hidden');
                }
            });
        }
    });
}
//Funcion para ocultar las sucursales
function ocultarSucursales(){
    document.getElementById('editSucursales').classList.add('hidden');

    let checkSucursales = document.getElementsByClassName('checkSucursales');
    for (let i = 0; i < checkSucursales.length; i++) {
        if(checkSucursales[i].checked){
            sucursales.push(checkSucursales[i].getAttribute('name'));
        }else{
            sucursales = sucursales.filter((eliminar) => eliminar !== checkSucursales[i].getAttribute('name'));
        }
    }
}
//Funcion para ocultar el boton de las sucursales por individual
function ocultarBtnSucursal(data){
    checkSucursales.forEach(check => {
        if(check.getAttribute('name') === data){
            check.checked = false;
            ocultarSucursales();
            let buttonSucursal = document.getElementsByClassName('buttonSucursal');
            Array.from(buttonSucursal).forEach(button => {
                if (check.getAttribute('name') === button.getAttribute('name')) {
                    button.classList.add('hidden');
                }
            });
        }
    });
}

//Dependiendo si le da al boton de agregar o editar llama a una funcion diferente
function realizarAccion(accion){
    if (accion === 'agregarBtn') {
        return `
        <div class="w-full h-[50%] flex justify-around relative">
            <button onclick="ocultarEditPeli(), scrollASeccion('containerPeliculas')" type="button" class="w-36 px-2 py-1 mx-1 relative top-8 rounded-2xl font-bold text-white bg-Buckeye-brown hover:bg-Brown-Sugar">Cancelar</button>
            <button onclick="agregarPeli(), agregarActoresEnBaseDeDatos('agregarBtn'), ocultarEditPeli(), scrollASeccion('containerPeliculas')" type="button" class="w-36 px-2 py-1 mx-1 relative top-8 rounded-2xl font-bold text-white bg-Buckeye-brown hover:bg-Brown-Sugar">Añadir</button>
        </div>
        `;
      } else if (accion === 'editarBtn') {
        return `
        <div class="w-full h-[50%] flex justify-around relative">
            <button onclick="ocultarEditPeli(), scrollASeccion('containerPeliculas')" type="button" class="w-36 px-2 py-1 mx-1 relative top-8 rounded-2xl font-bold text-white bg-Buckeye-brown hover:bg-Brown-Sugar">Cancelar</button>
            <button onclick="actualizarPeli(), ocultarEditPeli(), scrollASeccion('containerPeliculas')" type="button" class="w-36 px-2 py-1 mx-1 relative top-8 rounded-2xl font-bold text-white bg-Buckeye-brown hover:bg-Brown-Sugar">Editar</button>
        </div>
        `;
      };
}

function mostrarContainerEliminar(){
    document.getElementById('containerEliminar').classList.remove('hidden');
}
function ocultarContainerEliminar(){
    document.getElementById('containerEliminar').classList.add('hidden');
}

function scrollASeccion(idSeccion) {
    const section = document.getElementById(idSeccion);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}