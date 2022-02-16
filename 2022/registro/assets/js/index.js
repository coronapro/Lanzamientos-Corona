const spinnerLanding = document.getElementById("spinner-landing");
const sectionInicio = document.getElementById("inicio");
const sectionDos = document.getElementById("section-2");
const inicioContenido = document.querySelector("div.contenido");
const inicioContenidoStyle = window.getComputedStyle(inicioContenido);
const botonReservar = document.getElementById("linkReservar");
const sectionForm = document.getElementById("form-reservar");

window.addEventListener('scroll', () => {
    let coords = sectionDos.getBoundingClientRect();
    let heightSection = sectionInicio.getBoundingClientRect().height;
    let ContenidoRight = inicioContenidoStyle.getPropertyValue('padding-right');
    let ContenidoBottom = inicioContenidoStyle.getPropertyValue('padding-bottom');
    let coordsForm = sectionForm.getBoundingClientRect();

    if (coords.top < heightSection) {
        botonReservar.style.position = "fixed";
        botonReservar.style.right = ContenidoRight;
        botonReservar.style.bottom = ContenidoBottom;
    }
    else {
        botonReservar.style.position = "static";
    }

    if (coordsForm.top < 0) {
        botonReservar.style.display = "none";
    }
    else {
        botonReservar.style.display = "flex";
    }

});

var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);

player.on('play', () => {
    // console.log("Video cargado!");
    spinnerLanding.style.opacity = 0;
    setTimeout(()=>{
        spinnerLanding.style.display = "none";
    }, 1000);
});

setTimeout(()=>{
    spinnerLanding.style.display = "none";
}, 3000);