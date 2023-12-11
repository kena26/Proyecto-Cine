let baseUrl = "http://localhost:8080";

let asiento = new Array(4).fill(0);
let asientos = [];     
const peliculas = getRequest(); 
let seatvalue = getSeatValues();

//esta funcion hace el post request de los asientos en la base de datos 
function selectAsiento(){
	var checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
	var cajas = [];
	
	if (!checkbox) {
		console.log('No se ha seleccionado ningún asiento.');
		return;
	}
	
	checkbox.forEach(seleccion => {
		if (seleccion.checked){
			console.log('Seleccionado:', seleccion.id);
			cajas.push({
				id_Asiento: seleccion.id,
				Estado: parseInt(1),
			});
		}
	});
  
	fetch(baseUrl + "/asientos/ocupar", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
			body: JSON.stringify(cajas),
		});
  }










//estas eran las funciones destinadas para las salas y peliculas de el conjunto de butacas 

/*
function getMovieIDs() {
 const movieIDs = [];
 const selectElement = document.getElementById('pelis');
 const options = selectElement.options;

 for (let i = 0; i < options.length; i++) {
  movieIDs.push(options[i].id);
 }

 return movieIDs;
}

function findMovieID(targetID) {
 const movieIDs = getMovieIDs();
  const movie = movieIDs.find(id => id === targetID);
  return movie;
}
*/

//las dejo aqui comentadas por si acaso haran lo de las sucursales y salas









//esta funcion es la que muestra los asientos seleccionados en el html con el evento onclick
function bloquear(){
  usardato();
} 




function getRequest() {
  return fetch("http://localhost:8080/asientos/disponibilidad")
    .then(response => response.json())
    .then(data => {
      asientos = Array.from(data, (asiento) => asiento.id_Asiento);
    });
}


//este  algoritmo lee los asientos del html y los guarda en un array (tambien los retorna)

function getSeatValues() {
  const seatElements = document.querySelectorAll('.seat');
  const seatValues = [];

  for (const seatElement of seatElements) {
    const seatValue = seatElement.querySelector('input').id;
    seatValues.push(seatValue);
  }

  return seatValues;
}



//este algoritmo compara y guarda las coincidencias en un array y lo retorna
function buscarDato() {
  const datos = [];
  for (let i = 0; i < asientos.length; i++) {
    if (seatvalue.includes(asientos[i])) {
      datos.push(asientos[i]);
    }
  }
return datos; 
}



   //este funciona
function usardato(){
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < checkboxes.length; i++) {
    if (buscarDato().includes(checkboxes[i].id)) { 
      checkboxes[i].disabled = true;
    }
  }

}

/*
//esta funcion hace el post request de los asientos en la base de datos 
function selectAsiento(){
	var checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
	var cajas = [];
	
	if (!checkbox) {
		console.log('No se ha seleccionado ningún asiento.');
		return;
	}
	
	checkbox.forEach(seleccion => {
		if (seleccion.checked){
			console.log('Seleccionado:', seleccion.id);
			cajas.push({
				id_Asiento: seleccion.id,
				Estado: parseInt(0)
			});
		}
	});
  
	fetch(baseUrl + "/asientos/ocupar", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
			body: JSON.stringify(cajas),
		});
  	}
*/


    function selectAsiento() {
      var checkbox = document.querySelector('input[type="checkbox"]:checked');
    
      if (!checkbox) {
          console.log('No se ha seleccionado ningún asiento.');
          return;
      }
    
      var asientoSelect = {
        id_Asiento: checkbox.id,
        estado: 1
      };
    
      fetch(baseUrl + "/asientos/ocupar", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(asientoSelect),
      });
    }


