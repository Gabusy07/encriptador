export function handleCopyButton(textInput) {
    const copyButton = document.getElementById('copyButton');
    const toast = document.getElementById('toast-undo');
    const toastMessage = document.getElementById('toast-message');

    copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(textInput).then(function() {
            toastMessage.textContent = 'Texto copiado al portapapeles';
            showToast(toast);
        }).catch(function(err) {
            toastMessage.textContent = 'No se pudo copiar el texto';
            showToast(toast);
            console.error('Error al copiar al portapapeles: ', err);
        });
    });
}

function showToast(toast) {
    toast.classList.remove('hidden', 'fade-out');
    toast.classList.add('fade-in', 'show');
    setTimeout(function() {
        toast.classList.remove('fade-in', 'show');
        toast.classList.add('fade-out', 'hide');
        setTimeout(function() {
            toast.classList.add('hidden');
        }, 500);
    }, 3000); 
}