class Restaurante {
    constructor(imagen, titulo, descripcion) {
        this.imagen = imagen;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    mostrarRestaurante() {
        let imagen = `<img class="llave-img" src='${this.imagen}'>`;
        let titulo = `<h2>${this.titulo}</h2>`;
        let descripcion = `<p>${this.descripcion}</p>`;
        return [imagen, titulo, descripcion];
    }
}

const section = document.querySelector(".main-target");

let div = document.createElement("DIV");
div.classList.add("rest","rest-one");
const restauranteElegante = new Restaurante("./img-main2.jpg", "Los hermanos", "El mejor restaurante de la ciudad");
section.appendChild(guardarElementos(restauranteElegante, div));

let div2 = document.createElement("DIV");
div2.classList.add("rest","rest-two");
const restauranteElgante2 = new Restaurante("./img-header.jpg", "La abuela", "Ricos pollos fritos");
section.appendChild(guardarElementos(restauranteElgante2, div2));

export const listaRestaurantes = [restauranteElegante, restauranteElgante2];

function guardarElementos(restaurante, div) {
    for (let i = 0; i < restaurante.mostrarRestaurante().length; i++) {
        div.innerHTML += restaurante.mostrarRestaurante()[i];
    }
    return div;
}

