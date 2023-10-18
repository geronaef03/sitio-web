const modal = document.getElementById("miModal");
const botonCerrar = document.querySelector(".cerrar-modal");

const productos = []; 

botonCerrar.addEventListener("click", () => {
  modal.style.display = "none";
});


const url = "https://portal.edu-apps.com.ar/api/products/?format=json";

function cargarProductos() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      mostrarProductos(data);
    })
  .catch((error) => {
      console.error("Error al cargar los datos:", error);
    });
    
}

function mostrarProductos(productos) {
  const contenedor = document.getElementById("productos-container");
  contenedor.innerHTML = '';

  const productoMasCaro = productos.reduce((max, producto) => producto.price > max.price ? producto : max);

  productos.forEach((producto) => {
    const productoElement = document.createElement("div");
    productoElement.classList.add("producto");

    if (producto.price === productoMasCaro.price) {
      productoElement.classList.add("producto-destacado");
    }

    productoElement.innerHTML = `
      <h3>${producto.name}</h3>
      <img src="${producto.image_field}" alt="Imagen del ${producto.name}" class="w-100">
      <p>Precio: ${producto.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
    `;

    productoElement.addEventListener("click", () => {
      const modal = document.getElementById("miModal");
      const imagenProducto = document.getElementById("imagen-producto");
      const descripcionProducto = document.getElementById("descripcion-producto");

      imagenProducto.src = producto.image_field;
      descripcionProducto.textContent = producto.description;

      modal.style.display = "block";
    });

    contenedor.appendChild(productoElement);
  });
}

cargarProductos();
