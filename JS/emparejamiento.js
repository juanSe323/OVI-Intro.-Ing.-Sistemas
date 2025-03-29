document.addEventListener("DOMContentLoaded", function() {
    let items = document.querySelectorAll(".item");
    let dropZones = document.querySelectorAll(".drop-zone");

    items.forEach(item => {
        item.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("text", event.target.id);
        });
    });

    dropZones.forEach(zone => {
        zone.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        zone.addEventListener("drop", (event) => {
            event.preventDefault();
            let itemId = event.dataTransfer.getData("text");
            let draggedItem = document.getElementById(itemId);

            // Verificar si la zona ya tiene un elemento
            if (!zone.querySelector(".item")) {
                zone.appendChild(draggedItem);
                draggedItem.style.position = "static"; // Se asegura de que la posición sea correcta
                draggedItem.draggable = false; // Bloquea el movimiento después de soltarlo
                draggedItem.style.cursor = "default"; // Cambia el cursor para indicar que no es arrastrable
            }
        });
    });
});

function verificarEmparejamiento() {
    let dropZones = document.querySelectorAll(".drop-zone");
    let correctCount = 0;

    dropZones.forEach(zone => {
        let correctId = zone.getAttribute("data-match");
        let droppedItem = zone.querySelector(".item");

        if (droppedItem && droppedItem.id === correctId) {
            correctCount++;
            zone.style.backgroundColor = "#4CAF50"; // Verde si es correcto
        } else {
            zone.style.backgroundColor = "#ff4d4d"; // Rojo si es incorrecto
        }
    });

    let total = dropZones.length;
    let mensaje = correctCount === total 
        ? "¡Felicidades! Emparejaste todo correctamente. 🎉" 
        : "Algunas respuestas son incorrectas. ¡Inténtalo de nuevo! ❌";

    document.getElementById("resultadoEmparejamiento").innerText = mensaje;
}
function reiniciarJuego() {
    let dropZones = document.querySelectorAll(".drop-zone");
    let items = document.querySelectorAll(".item");

    // Restablecer las zonas de soltar
    dropZones.forEach(zone => {
        zone.innerHTML = zone.getAttribute("data-original-content") || ""; // Recupera su estado original
        zone.style.backgroundColor = "#ddd"; // Color original
    });

    // Devolver los elementos a la columna A
    let columnA = document.querySelector(".columnA");
    items.forEach(item => {
        columnA.appendChild(item);
        item.draggable = true;
        item.style.cursor = "grab";
    });

    // Borrar el mensaje de resultado
    document.getElementById("resultadoEmparejamiento").innerText = "";
}
