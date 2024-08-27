const codes = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
};

let textInput = '';

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
    var inputTexto = document.getElementById('textToEncrypt');

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



    const copyButton = document.getElementById('copyButton');

    const toast = document.getElementById('toast-undo');
    const toastMessage = document.getElementById('toast-message');

    copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(textInput).then(function() {
            toastMessage.textContent = 'Texto copiado al portapapeles';
            
            toast.classList.remove('hidden', 'fade-out');
            toast.classList.add('fade-in', 'show');
    
            setTimeout(function() {
                toast.classList.remove('fade-in', 'show');
                toast.classList.add('fade-out', 'hide');
    
                setTimeout(function() {
                    toast.classList.add('hidden');
                }, 500);
            }, 3000); 
        }).catch(function(err) {
            toastMessage.textContent = 'No se pudo copiar el texto';
            
            toast.classList.remove('hidden', 'fade-out');
            toast.classList.add('fade-in', 'show');
    
            console.error('Error al copiar al portapapeles: ', err);
            
            setTimeout(function() {
                toast.classList.remove('fade-in', 'show');
                toast.classList.add('fade-out', 'hide');
    
                setTimeout(function() {
                    toast.classList.add('hidden');
                }, 500); 
            }, 3000); 
        });
    });
});

