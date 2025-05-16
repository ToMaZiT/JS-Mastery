// PLANS
const startBtn = document.querySelector('.start-btn');
const plansMenu = document.querySelector('.plans-menu');
const closeBtn = document.querySelector('.close-btn');
const viewPlansBtn = document.querySelector('.view-plans-btn');


// NAVBAR
const menuToggle = document.querySelector('.menu-toggle');
const navButtons = document.querySelector('.nav-buttons');

if (menuToggle && navButtons) {
    menuToggle.addEventListener('click', () => {
        navButtons.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!navButtons.contains(e.target) && !menuToggle.contains(e.target) && window.innerWidth <= 768) {
            navButtons.classList.remove('active');
        }
    });
}


   


// Buttons clean navigation
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-section');
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            if (window.innerWidth <= 768) {
                navButtons.classList.remove('active');
            }
        }
    });
});

function closePlansMenu() {
    plansMenu.style.opacity = '0';
    document.body.classList.remove('plans-open');
    setTimeout(() => {
        plansMenu.classList.remove('show');
    }, 300);
}

if (startBtn && plansMenu) {
    startBtn.addEventListener('click', () => {
        plansMenu.classList.add('show');
        plansMenu.style.opacity = '1';
        document.body.classList.add('plans-open');
        plansMenu.scrollTop = 0; // Asegura que el primer plan sea visible
    });
}

if (viewPlansBtn && plansMenu) {
    viewPlansBtn.addEventListener('click', () => {
        plansMenu.classList.add('show');
        plansMenu.style.opacity = '1';
        document.body.classList.add('plans-open');
        plansMenu.scrollTop = 0; // Asegura que el primer plan sea visible
    });
}

if (closeBtn && plansMenu) {
    closeBtn.addEventListener('click', closePlansMenu);
    plansMenu.addEventListener('click', (e) => {
        if (e.target === plansMenu) {
            closePlansMenu();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && plansMenu.classList.contains('show')) {
            closePlansMenu();
        }
    });
}

// accordion
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

// clean navigation
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

// carousel
const testimonialGrid = document.querySelector('.testimonial-grid');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;
const totalItems = document.querySelectorAll('.testimonial-card').length;
const visibleItems = 3;

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