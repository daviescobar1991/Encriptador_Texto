function encriptar() {
    let texto = document.getElementById("texto").value;
    let titmensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen_encrip = document.getElementById("imagen_encrip");


    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        titmensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        imagen_encrip.src = "./imagenes_2/exito.png";
    } else {
        imagen_encrip.src = "./imagenes_2/img_encriptado.png";
        titmensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto a encriptar";
        swal ("Error!", "Debes ingresar un texto", "warning");
    }

}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let titmensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen_encrip = document.getElementById("imagen_encrip");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        titmensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        imagen_encrip.src = "./imagenes_2/desencriptar.jfif";
    } else {
        imagen_encrip.src = "./imagenes_2/img_encriptado.png";
        titmensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto a desencriptar";
        swal ("Error!", "Debes ingresar un texto", "warning");
    }
}


