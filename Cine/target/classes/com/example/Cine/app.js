// Variable para almacenar los productos
let productos = [];

// Función para cargar y mostrar los datos en la tabla
function cargarProductos() {
    console.log('La función cargarProductos se está ejecutando...');
    fetch('http://localhost:8080/Cine/all') // Reemplaza con la ruta correcta de tu API
        .then(response => response.json())
        .then(data => {
            productos = data;
            ImprimirProductos();
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

// Función para imprimir los productos en la tabla
function ImprimirProductos() {
    let contenedor = document.getElementById("product-table-body");
    contenedor.innerHTML = ""; // Borra cualquier contenido anterior

    productos.forEach(producto => {
        const productoHtml = MapearProducto(producto);
        contenedor.innerHTML += productoHtml;
    });
}

// Función para mapear un producto a una fila HTML
function MapearProducto(producto) {
    return `<tr>
        <td style="border: 1px solid red; padding: 8px;">${producto.id_producto}</td>
        <td style="border: 1px solid red; padding: 8px;">${producto.nombre}</td>
        <td style="border: 1px solid red; padding: 8px;">${producto.id_Prov}</td>
    </tr>`;
}

// Llama a la función para cargar los datos cuando se cargue la página
cargarProductos();

