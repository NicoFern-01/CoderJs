const productos = [
  {
    id: "vino1",
    nombre: "Vino Malbec Reserva",
    descripcion: "Vino tinto argentino con cuerpo y notas frutales.",
    precio: 3200,
    imagen: "https://www.clarin.com/img/2023/06/08/YRSz8s035_1256x620__1.jpg"
  },
  {
    id: "espumante1",
    nombre: "Espumante Brut Nature",
    descripcion: "Elegante espumante seco, ideal para celebraciones.",
    precio: 4100,
    imagen: "https://www.clarin.com/img/2020/12/19/dp0Vgjmvy_720x0__1.jpg"
  },
  {
    id: "licor1",
    nombre: "Licor de Dulce de Leche",
    descripcion: "Clásico licor argentino con sabor dulce y suave.",
    precio: 2900,
    imagen: "https://acdn-us.mitiendanube.com/stores/798/865/products/589734-8cee8b26d1c431d0d515421439856463-1024-1024.jpg"
  },
  {
  id: "vino2",
  nombre: "Vino C. Sauvignon",
  descripcion: "Vino tinto intenso con notas de roble y frutos negros.",
  precio: 3500,
  imagen: "https://cdn.shopify.com/s/files/1/0005/4634/0925/files/Foto_-_Marlo_480x480.jpg?v=1611578139"
},
{
  id: "vino3",
  nombre: "Vino Syrah Premium",
  descripcion: "Vino elegante con aroma a violetas y sabor especiado.",
  precio: 3800,
  imagen: "https://familiamartinezbujanda.com/wp-content/uploads/2019/01/Vino-blanco.jpg"
},
{
  id: "vino4",
  nombre: "Vino Pinot Noir",
  descripcion: "Ligero y frutado, ideal para maridar con carnes blancas.",
  precio: 3900,
  imagen: "https://luigiboscaar.vtexassets.com/arquivos/ids/157827-1200-1200?v=638615083399330000&width=1200&height=1200&aspect=true"
},
{
  id: "vino5",
  nombre: "Vino Bonarda Clásico",
  descripcion: "Variedad suave con buen equilibrio entre dulzor y acidez.",
  precio: 3100,
  imagen: "https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_520,h_420/https://api.winesofargentina.org/uploads/2022/04/oWgNuEerYW_Dante_Robino_Varietales_Bonarda.jpeg"
},
{
  id: "vino6",
  nombre: "Vino Merlot Joven",
  descripcion: "Joven, fresco y de taninos suaves. Ideal para tapas.",
  precio: 3300,
  imagen: "https://shop.norton.com.ar/cdn/shop/files/Norton_reserva_merlot_2022_1000x1000_2e27f310-e9a2-477a-8e08-bbbf51d9d340_2048x2048_crop_center@2x.png?v=1696942560"
},
{
  id: "vino7",
  nombre: "Vino Blanco Torrontés",
  descripcion: "Aromático, con notas florales y cítricas. Bien frío.",
  precio: 3200,
  imagen: "https://casadevinosmendoza.com.ar/wp-content/uploads/2025/06/Vino-Singular-Torrontes-Macerado-Chakana-750ml.jpg"
},
{
  id: "espumante2",
  nombre: "Espumante Extra Brut",
  descripcion: "Fresco, seco y de burbuja fina. Ideal para aperitivos.",
  precio: 4300,
  imagen: "https://acdn-us.mitiendanube.com/stores/001/211/660/products/photoroom_20240315_090648-34efec88e6e84e6aa617105044489531-640-0.jpeg"
},
{
  id: "espumante3",
  nombre: "Espumante Rosé",
  descripcion: "Delicado rosado, ideal para celebraciones románticas.",
  precio: 4400,
  imagen: "https://acdn-us.mitiendanube.com/stores/001/211/660/products/navarro-grand-cuvee-ok1-ab0f8a389cd84104c016352537245046-640-0.png"
},
{
  id: "licor2",
  nombre: "Licor de Hierbas",
  descripcion: "Digestivo artesanal con notas herbales y toque dulce.",
  precio: 3700,
  imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_644946-MLU77737319950_072024-F.webp"
},
{
  id: "licor3",
  nombre: "Licor de Naranja",
  descripcion: "Sabor cítrico y dulce, ideal para cócteles o postres.",
  precio: 3600,
  imagen: "https://www.tipos.co/wp-content/uploads/2015/02/Licores.png"
},
{
  id: "licor4",
  nombre: "Amaretto Italiano",
  descripcion: "Licor de almendras, suave y aromático.",
  precio: 4200,
  imagen: "https://www.tipos.co/wp-content/uploads/2015/02/Licores.png"
},
{
  id: "vino8",
  nombre: "Vino Blanco Chardonnay",
  descripcion: "Vino con notas a manzana verde y manteca.",
  precio: 3600,
  imagen: "https://casadevinosmendoza.com.ar/wp-content/uploads/2023/04/Mix-dia-del-padre-Bodegas-Populares-de-Mendoza-x-6-unidades.jpg"
},
{
  id: "vino9",
  nombre: "Vino Rosado de Malbec",
  descripcion: "Refrescante, afrutado, perfecto para verano.",
  precio: 3100,
  imagen: "https://casadevinosmendoza.com.ar/wp-content/uploads/2023/04/Mix-dia-del-padre-Bodegas-Populares-de-Mendoza-x-6-unidades.jpg"
},
{
  id: "vino10",
  nombre: "Vino Blend Reserva",
  descripcion: "Corte de varietales seleccionados, con crianza en roble.",
  precio: 4500,
  imagen: "https://casadevinosmendoza.com.ar/wp-content/uploads/2023/04/Mix-dia-del-padre-Bodegas-Populares-de-Mendoza-x-6-unidades.jpg"
},
{
  id: "vino11",
  nombre: "Vino Malbec Orgánico",
  descripcion: "Producción orgánica, con taninos suaves y frutados.",
  precio: 3700,
  imagen: "https://casadevinosmendoza.com.ar/wp-content/uploads/2023/04/Mix-dia-del-padre-Bodegas-Populares-de-Mendoza-x-6-unidades.jpg"
},
{
  id: "vino12",
  nombre: "Vino Tinto Gran Reserva",
  descripcion: "De guarda prolongada y gran complejidad.",
  precio: 5200,
  imagen: "https://casadevinosmendoza.com.ar/wp-content/uploads/2023/04/Mix-dia-del-padre-Bodegas-Populares-de-Mendoza-x-6-unidades.jpg"
},
{
  id: "espumante4",
  nombre: "Espumante Moscato",
  descripcion: "Dulce, suave y de baja graduación. Ideal postres.",
  precio: 4000,
  imagen: "https://casadevinosmendoza.com.ar/wp-content/uploads/2023/04/Mix-dia-del-padre-Bodegas-Populares-de-Mendoza-x-6-unidades.jpg"
},
{
  id: "licor5",
  nombre: "Licor de Café",
  descripcion: "Aromático y persistente. Ideal con hielo o en postres.",
  precio: 3900,
  imagen: "https://www.tipos.co/wp-content/uploads/2015/02/Licores.png"
}


];

// Elementos del DOM
const contenedor = document.getElementById("contenedor-productos");
const verCarritoBtn = document.getElementById("ver-carrito");
const carritoPanel = document.getElementById("carrito");
const itemsCarrito = document.getElementById("items-carrito");
const montoTotal = document.getElementById("monto-total");
const finalizarCompra = document.getElementById("finalizar-compra");
const menuToggle = document.getElementById("menu-toggle");
const menuOptions = document.getElementById("menu-options");
const contadorCarrito = document.getElementById("contador-carrito");


let carrito = JSON.parse(localStorage.getItem("carrito_vinoteca")) || [];

// Menu Seleccion de productos
if (menuToggle && menuOptions) {
  menuToggle.addEventListener("click", () => {
    menuOptions.classList.toggle("show");
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
}

// Panel del carrito
if (verCarritoBtn && carritoPanel) {
  verCarritoBtn.addEventListener("click", () => {
    carritoPanel.classList.toggle("mostrar");
  });
}

// Finalizar compra
if (finalizarCompra) {
  finalizarCompra.addEventListener("click", () => {
    carrito = [];
    actualizarCarrito();
    carritoPanel.classList.remove("mostrar");
  });
}

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
      if (producto) {
        carrito.push(producto);
        actualizarCarrito();
      }
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
      <button class="quitar-item" data-index="${index}">❌</button>
    `;
    itemsCarrito.appendChild(div);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);
  montoTotal.innerText = `Total: $${total}`;
  localStorage.setItem("carrito_vinoteca", JSON.stringify(carrito));
  actualizarContadorCarrito(); // ✅ NUEVO
  agregarEventosQuitar();
}
function agregarEventosQuitar() {
  const botonesQuitar = document.querySelectorAll(".quitar-item");
  botonesQuitar.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      carrito.splice(index, 1); // Elimina el producto del array
      actualizarCarrito(); // Refresca el carrito
    });
  });
}
function actualizarContadorCarrito() {
  const cantidad = carrito.length;
  contadorCarrito.innerText = cantidad >= 0 ? cantidad : 0;
}


mostrarProductos(productos);
actualizarCarrito();
actualizarContadorCarrito();

