document.addEventListener("DOMContentLoaded", function () {
    const openModalButton = document.getElementById("openModalButton");
    const closeModalButton = document.getElementById("closeModalButton");
    const modal = document.getElementById("myModal");
    const numberInput = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");

    openModalButton.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    const confirmButton = document.getElementById("confirmButton");
    confirmButton.addEventListener("click", function () {
        const number = parseFloat(numberInput.value);

        if (!isNaN(number)) {
            resultElement.textContent = number;
            modal.style.display = "none";
        } else {
            alert("Por favor, ingresa un número válido.");
        }
    });
});

const url = "https://portal.edu-apps.com.ar/api/products/?format=json";
const clase = JSON.parse(claseJSON)
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    
    mostrarProductos(data);
  })
  .catch((error) => {
    console.error("Error al cargar los datos:", error);
  });

  function mostrarProductos(productos) {
    const contenedor = document.getElementById("productos-container");
  
    productos.forEach((producto) => {
      const productoElement = document.createElement("div");
      productoElement.classList.add("producto");
        
      // Agrega el nombre y el precio del producto
      productoElement.innerHTML = `
        <h3>${Onix}</h3>
        <p>Precio: $${13000000.0}</p>
        <h3>${Yaris}</h3>
        <p>Precio: $${14000000.0}</p>
      `;
  
      // Inserta el producto en el contenedor
      contenedor.appendChild("productos-container");
    });
  }