let productos = [];
let carrito = JSON.parse(localStorage.getItem("carrito_vinoteca")) || [];

const contenedor = document.getElementById("contenedor-productos");
const verCarritoBtn = document.getElementById("ver-carrito");
const carritoPanel = document.getElementById("carrito");
const itemsCarrito = document.getElementById("items-carrito");
const montoTotal = document.getElementById("monto-total");
const finalizarCompra = document.getElementById("finalizar-compra");
const menuToggle = document.getElementById("menu-toggle");
const menuOptions = document.getElementById("menu-options");
const contadorCarrito = document.getElementById("contador-carrito");

// Cargar productos 
async function cargarProductos() {
  try {
    const response = await fetch('./data.json');
    if (!response.ok) throw new Error("Error al cargar el archivo JSON");
    productos = await response.json();
    mostrarProductos(productos);
    actualizarCarrito();
  } catch (error) {
    console.error("Error al cargar productos:", error);
    contenedor.innerHTML = "<p>Error al cargar productos.</p>";
  }
}

menuToggle.addEventListener("click", () => {
  menuOptions.classList.toggle("show");
});

verCarritoBtn.addEventListener("click", () => {
  carritoPanel.classList.toggle("mostrar");
});

finalizarCompra.addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
  carritoPanel.classList.remove("mostrar");

  //Alerta SweetAlert
  Swal.fire({
    title: '¡Gracias por tu compra!',
    text: 'Tu pedido fue procesado correctamente.',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
});

menuOptions.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filtro = e.target.dataset.filter;
    if (filtro === "todos") {
      mostrarProductos(productos);
    } else {
      const filtrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(filtro)
      );
      mostrarProductos(filtrados);
    }
    menuOptions.classList.remove("show");
  });
});

function mostrarProductos(lista) {
  contenedor.innerHTML = "";
  lista.forEach((p) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-producto";
    tarjeta.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" />
      <h3>${p.nombre}</h3>
      <p>${p.descripcion}</p>
      <span>$${p.precio}</span>
      <button data-id="${p.id}">Agregar</button>
    `;
    contenedor.appendChild(tarjeta);
  });
  agregarEventosBotones();
}

function agregarEventosBotones() {
  const botones = document.querySelectorAll(".tarjeta-producto button");
  botones.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      const producto = productos.find((p) => p.id === id);
      carrito.push(producto);
      actualizarCarrito();
    });
  });
}

function actualizarCarrito() {
  itemsCarrito.innerHTML = "";
  carrito.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <strong>${item.nombre}</strong> - $${item.precio}
      <button class="quitar" data-index="${index}">❌</button>
    `;
    itemsCarrito.appendChild(div);
  });

  document.querySelectorAll(".quitar").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index);
      carrito.splice(index, 1);
      actualizarCarrito();
    });
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);
  montoTotal.innerText = `Total: $${total}`;

  // Contador en el ícono
  contadorCarrito.innerText = carrito.length;
  localStorage.setItem("carrito_vinoteca", JSON.stringify(carrito));
}

cargarProductos();

