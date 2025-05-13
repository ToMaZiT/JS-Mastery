// Manejo del menú de planes
const startBtn = document.querySelector('.start-btn');
const plansMenu = document.querySelector('.plans-menu');
const closeBtn = document.querySelector('.close-btn');
const viewPlansBtn = document.querySelector('.view-plans-btn');



function closePlansMenu() {
    plansMenu.style.opacity = '0';
    setTimeout(() => {
        plansMenu.classList.remove('show');
    }, 300);
}

if (startBtn && plansMenu) {
    startBtn.addEventListener('click', () => {
        plansMenu.classList.add('show');
        plansMenu.style.opacity = '1';
    });
}

if (viewPlansBtn && plansMenu) {
    viewPlansBtn.addEventListener('click', () => {
        plansMenu.classList.add('show');
        plansMenu.style.opacity = '1';
    });
}

if (closeBtn && plansMenu) {
    closeBtn.addEventListener('click', closePlansMenu);
    // Cerrar al hacer clic fuera
    plansMenu.addEventListener('click', (e) => {
        if (e.target === plansMenu) {
            closePlansMenu();
        }
    });
    // Cerrar con la tecla Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && plansMenu.classList.contains('show')) {
            closePlansMenu();
        }
    });
}

// Manejo del acordeón
const toggles = document.querySelectorAll('.custom-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !isOpen);
        const content = toggle.querySelector('.details-content');
        content.style.maxHeight = !isOpen ? content.scrollHeight + 'px' : null;
    });

    toggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle.click();
        }
    });
});

// Desplazamiento suave para los enlaces de navegación
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Carrusel de testimonios
const testimonialGrid = document.querySelector('.testimonial-grid');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;
const totalItems = document.querySelectorAll('.testimonial-card').length;
const visibleItems = 3; // Número de tarjetas visibles a la vez

function updateCarousel() {
    const offset = -(currentIndex * (100 / visibleItems));
    testimonialGrid.style.transform = `translateX(${offset}%)`;
}

if (prevBtn && nextBtn && testimonialGrid) {
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
            updateCarousel();
        }
    });
}

