function verificarRespuestas() {
    let respuestasCorrectas = {
        q1: "Redes",
        q2: "Sistémico",
        q3: "Siete",
        q4: "Sistema de información",
        q5: "Informática"
    };

    let puntaje = 0;
    let total = Object.keys(respuestasCorrectas).length;
    
    for (let pregunta in respuestasCorrectas) {
        let input = document.querySelector(`input[name="${pregunta}"]`);
        let respuestaUsuario = input.value.trim();
        
        if (respuestaUsuario.toLowerCase() === respuestasCorrectas[pregunta].toLowerCase()) {
            input.style.backgroundColor = "#4CAF50"; // Verde si es correcta
            input.style.color = "white";
            puntaje++;
        } else {
            input.style.backgroundColor = "#ff4d4d"; // Rojo si es incorrecta
            input.style.color = "white";
        }
    }

    let mensaje = (puntaje === total) 
        ? "🎉 ¡Felicidades! Has completado todas las frases correctamente."
        : "❌ Algunas respuestas son incorrectas. ¡Inténtalo de nuevo!";
    
    document.getElementById("resultado").innerText = mensaje;
}
