function enviar() {
    var amigo1 = document.getElementById("amigo1").value;
    var lugardecita1 = "puerta de entrada";

    var amigo2 = document.getElementById("amigo2").value;
    var lugardecita2 = "cocina";

    var amigo3 = document.getElementById("amigo3").value;
    var lugardecita3 = "habitacion";

    var amigo4 = document.getElementById("amigo4").value;
    var lugardecita4 = "balcon";

    var amigo5 = document.getElementById("amigo5").value;
    var lugardecita5 = "pista de baile";

    var lugardecitaSeleccionado = document.getElementById("lugardecita").value;

    if (lugardecitaSeleccionado == lugardecita1) {
        alert("Es una trampa tenemos que huir, lograste escapar con " + amigo1 + " te has salvado, Feliz Halloween");
    }
    else if (lugardecitaSeleccionado == lugardecita2) {
        alert(amigo2 + " toma un cuchillo y lo introduce en tu pecho, no lograste escapar, has murto en la " + lugardecitaSeleccionado);
    }
    else if (lugardecitaSeleccionado == lugardecita3) {
        alert(amigo3 + " toma una almohada y te asfixia con ella, no lograste escapar, has muerto en la " + lugardecitaSeleccionado);
    }
    else if (lugardecitaSeleccionado == lugardecita4) {
        alert(amigo4 + " te empuja, no lograste escapar, has muerto en el " + lugardecitaSeleccionado);
    }
    else if (lugardecitaSeleccionado == lugardecita5) {
        alert(amigo5 + " te confieza que es trans, te has salvado por ahora, pero no divulgues su secreto o algo malo podria pasar el proximo Halloween Mujajajajajaja, Feliz Halloween");
    }
}