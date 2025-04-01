function verificarRespuestas() {
    let respuestas = {
        q1: "b",
        q2: "b",
        q3: "b",
        q4: "b",
        q5: "b"
    };

    let puntaje = 0;
    let totalPreguntas = Object.keys(respuestas).length;

    for (let pregunta in respuestas) {
        let seleccion = document.querySelector(`input[name="${pregunta}"]:checked`);
        if (seleccion && seleccion.value === respuestas[pregunta]) {
            puntaje++;
        }
    }

    let resultadoTexto = `Tu puntaje es ${puntaje} de ${totalPreguntas}. `;
    
    if (puntaje === totalPreguntas) {
        resultadoTexto += "🎉 ¡Felicidades! Has respondido todas las preguntas correctamente.";
    } else if (puntaje >= totalPreguntas / 2) {
        resultadoTexto += "😊 ¡Bien hecho! Puedes mejorar aún más.";
    } else {
        resultadoTexto += "😕 Mejor suerte la próxima vez. ¡Sigue practicando!";
    }

    let resultadoElemento = document.getElementById("result");
    resultadoElemento.innerText = resultadoTexto;
    resultadoElemento.style.padding = "10px";
    resultadoElemento.style.border = "2px solid #4CAF50";
    resultadoElemento.style.borderRadius = "5px";
    resultadoElemento.style.backgroundColor = "#e8f5e9";
    resultadoElemento.style.color = "#2e7d32";
    resultadoElemento.style.fontWeight = "bold";
    resultadoElemento.style.textAlign = "center";
    resultadoElemento.style.marginTop = "15px";
}
// Función para mostrar/ocultar el menú principal
function toggleMenu() {
    var menu = document.querySelector(".menu-principal");
    menu.classList.toggle("show");
}

document.addEventListener('DOMContentLoaded', function() {
    var submenuTriggers = document.querySelectorAll('.submenu-trigger');
    var touchStartTime = 0;
    var lastTouchedElement = null;
    
    submenuTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function(e) {
            // Solo en móvil
            if (window.innerWidth <= 768) {
                var dropdown = this.nextElementSibling;
                
                // Si el submenú ya está visible o es un segundo toque en el mismo elemento,
                // permitir la navegación normal
                if (dropdown.classList.contains('show') || 
                    (this === lastTouchedElement && Date.now() - touchStartTime < 500)) {
                    // Permitir la navegación normal
                    return true;
                } else {
                    // Primer toque: mostrar el submenú
                    e.preventDefault();
                    
                    // Ocultar todos los submenús abiertos
                    document.querySelectorAll('.dropdown.show').forEach(function(menu) {
                        if (menu !== dropdown) {
                            menu.classList.remove('show');
                        }
                    });
                    
                    // Mostrar este submenú
                    dropdown.classList.add('show');
                    
                    // Registrar el tiempo y elemento para detectar doble toque
                    touchStartTime = Date.now();
                    lastTouchedElement = this;
                }
            }
        });
    });
});