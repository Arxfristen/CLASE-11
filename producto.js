class Producto {
    constructor(titulo, detalle, precio, stock, imagen) {
      this.titulo = titulo;
      this.detalle = detalle;
      this.precio = precio;
      this.stock = stock;
      this.imagen = imagen;
    }
  }
  

  const producto = new Producto(
    "Auto",
    "Un buen auto.",
    1500,
    10,
    "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg" 
  );
  

  const contenido = `
    <section>
      <img src="${producto.imagen}" alt="${producto.titulo}" style="width: 300px;">
      <h2>${producto.titulo}</h2>
      <p>${producto.detalle}</p>
      <p><strong>Precio:</strong> $${producto.precio}</p>
      <p><strong>Stock disponible:</strong> ${producto.stock}</p>
    </section>
  `;
  

  document.querySelector("main").innerHTML = contenido;