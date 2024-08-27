import { codes } from './consts.js';

export function encriptarTexto(text) {
    let textoEncriptado = text.toLowerCase();
    for (const [key, value] of Object.entries(codes)) {
        textoEncriptado = textoEncriptado.replace(new RegExp(key, 'g'), value);
    }
    return textoEncriptado;
}

export function desencriptarTexto(text) {
    let textoDesencriptado = text.toLowerCase();
    for (const [key, value] of Object.entries(codes)) {
        textoDesencriptado = textoDesencriptado.replace(new RegExp(value, 'g'), key);
    }
    return textoDesencriptado;
}

export function actualizarVisibilidad(textInput) {
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