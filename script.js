let pantallaActual = 0;

const pantallas =
    document.querySelectorAll(".pantalla");


function siguientePantalla() {

    pantallas[pantallaActual]
        .classList.remove("activa");


    pantallaActual++;


    if (pantallaActual >= pantallas.length) {

        pantallaActual = 0;

    }


    pantallas[pantallaActual]
        .classList.add("activa");

}


/* =========================
   PÉTALOS
========================= */

const contenedorPetalos =
    document.getElementById("petalos");


for (let i = 0; i < 35; i++) {

    const petalo =
        document.createElement("div");


    petalo.classList.add("petalo");


    petalo.style.left =
        Math.random() * 100 + "vw";


    petalo.style.animationDuration =
        (6 + Math.random() * 8) + "s";


    petalo.style.animationDelay =
        (-Math.random() * 12) + "s";


    petalo.style.setProperty(
        "--movimiento",
        (Math.random() * 180 - 90) + "px"
    );


    contenedorPetalos.appendChild(petalo);

}function mostrarMensaje() {

    const respuesta =
        document.getElementById("respuestaNo");

    respuesta.textContent =
        "Está bien 🌼";

}
const musica = document.getElementById("musica");
const botonMusica = document.getElementById("botonMusica");

botonMusica.addEventListener("click", function () {

    if (musica.paused) {
        musica.play();
        botonMusica.textContent = "🔊";
    } else {
        musica.pause();
        botonMusica.textContent = "♫";
    }

});


