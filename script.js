import { encriptarTexto, desencriptarTexto, actualizarVisibilidad } from './scripts/utils.js';
import { handleCopyButton } from './scripts/clipboard.js';

document.addEventListener('DOMContentLoaded', function() {
    const inputTexto = document.getElementById('textToEncrypt');
    let textInput = '';

    document.getElementById('encriptador').addEventListener('click', function() {
        textInput = encriptarTexto(inputTexto.value);
        actualizarVisibilidad(textInput);
    });

    document.getElementById('desencriptador').addEventListener('click', function() {
        textInput = desencriptarTexto(inputTexto.value);
        actualizarVisibilidad(textInput);
    });

    handleCopyButton(textInput);
});