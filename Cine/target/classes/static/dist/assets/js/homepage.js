


 /*
let ofertas = [];



  function getRequest() {
    return fetch("http://localhost:8080/ofertas/all", {
      mode: 'no-cors'
    })
    .then(response => response.json)
    .then(data => {
    ofertas = Array.from(data, (oferta) => [(oferta.foto_inte),(oferta.detalles),(oferta.titulo)]);
    });
  }
  
*/
/*
let ofertas = [];

async function getRequest() {
  try {
    const response = await fetch("http://localhost:8080/ofertas/all", {
      mode: 'no-cors'
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();
    ofertas = Array.from(data, (oferta) => oferta.titulo);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


*/
const offers = getRequest();

let ofertas = [];



function getRequest() {
  return fetch("http://localhost:8080/ofertas/all", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json(); // Return an array instead of a single object
  })
  .then(data => {
    ofertas = data; // Now 'ofertas' will be an array
    ofertas = Array.from(data, (oferta) =>[(oferta.foto_inte),(oferta.detalles),(oferta.titulo)]);
    return ofertas; // Explicitly return the array so it's available in the resolved Promise
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    ofertas = [[], [], []];
    return ofertas; // Return an empty array on error
  });
}



function convertirObjetoEnArreglo(objeto) {
  return Object.entries(objeto);
}


function cambiarSrc(imagen, nuevoSrc) {
  imagen.setAttribute("src", nuevoSrc);
}



function readFirstDimension(array3D) {
  const firstDimension = [];
  for (const item of array3D) {
    firstDimension.push(item[0]);
  }
  return firstDimension;
}
