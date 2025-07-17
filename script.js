// Animación suave al hacer scroll en enlaces del menú
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Validación y mensaje dinámico del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const msg = document.getElementById('formMsg');

    if (name === '' || email === '' || message === '') {
        msg.textContent = 'Please fill out all fields.';
        msg.style.color = 'red';
    } else if (!validateEmail(email)) {
        msg.textContent = 'Please enter a valid email.';
        msg.style.color = 'red';
    } else {
        msg.textContent = 'Thank you! Your message has been sent.';
        msg.style.color = 'green';
        this.reset();
    }
});

// Función para validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Efecto al pasar sobre proyectos: mostrar detalles
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    });
});
