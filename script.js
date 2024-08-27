const codes = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
};

let textInput = ''; // Cambia este valor para probar

function actualizarVisibilidad() {
    const noMessageDiv = document.getElementById('noMessage');
    const messageDiv = document.getElementById('message');

    if (textInput.trim() === '') {
        noMessageDiv.classList.remove('hidden');
        messageDiv.classList.add('hidden');
    } else {
        noMessageDiv.classList.add('hidden');
        messageDiv.classList.remove('hidden');
        document.getElementById('messageText').textContent = textInput;
    }
}

function encriptarTexto(text) {
    let textoEncriptado = text.toLowerCase();

    for (const [key, value] of Object.entries(codes)) {
        textoEncriptado = textoEncriptado.replace(new RegExp(key, 'g'), value);
    }

    return textoEncriptado;
}

function desencriptarTexto(text) {
    let textoDesencriptado = text.toLowerCase();

    for (const [key, value] of Object.entries(codes)) {
        textoDesencriptado = textoDesencriptado.replace(new RegExp(value, 'g'), key);
    }

    return textoDesencriptado;
}

document.addEventListener('DOMContentLoaded', function() {
    var inputTexto = document.querySelector('input[type="text"]');

    var botonEncriptar = document.getElementById('encriptador');
    botonEncriptar.addEventListener('click', function() {
        let texto = inputTexto.value;
        textInput = encriptarTexto(texto);
        actualizarVisibilidad();
    });

    var botonDesencriptar = document.getElementById('desencriptador');
    botonDesencriptar.addEventListener('click', function() {
        let texto = inputTexto.value;
        textInput = desencriptarTexto(texto);
        actualizarVisibilidad();
    });
});

