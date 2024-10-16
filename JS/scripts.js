// archivo: js/scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Código existente...

    const formulario = document.getElementById('form-contacto');
    const respuesta = document.getElementById('respuesta');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Simulación de envío de formulario
        // En una implementación real, necesitarías un backend para procesar el formulario
        respuesta.textContent = `Gracias, ${nombre}. Tu mensaje ha sido enviado correctamente.`;
        formulario.reset();
    });
});
