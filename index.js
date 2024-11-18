document.querySelector('h1').textContent = "Productos";

const container = document.querySelector('section.container');

let cardsArray = [];

function cards() {
    for (let i = 1; i <= 9; i++) {
        let card = `
            <div class="card">
                <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt="Producto ${i}">
                <div class="card-body">
                    <h2>Producto ${i}</h2>
                    <p>Descripción del producto ${i}.</p>
                    <button onclick="location.href='producto.html'">Ver más</button>
                </div>
            </div>
        `;
        cardsArray.push(card);
    }
    container.innerHTML = cardsArray.join('');
}

cards();
