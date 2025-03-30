document.addEventListener("DOMContentLoaded", function () {
    let visitas = localStorage.getItem("contadorVisitas");

    if (!visitas) {
        visitas = 1; // Primera visita
    } else {
        visitas = parseInt(visitas) + 1; // Aumentar contador
    }

    localStorage.setItem("contadorVisitas", visitas);
    document.getElementById("contadorVisitas").textContent = visitas;
});
window.onscroll = function() {
    mostrarBoton();
};

function mostrarBoton() {
    const boton = document.querySelector(".btn-arriba");
    
    if (document.documentElement.scrollTop > 200) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }
}