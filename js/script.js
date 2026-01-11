// Typing Animation
const typedTextElement = document.querySelector('.typed-text');
const texts = ['DevOps Lead', 'Cloud Architect', 'Team Leader', 'Problem Solver', 'Automation Expert'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }

    setTimeout(typeText, typeSpeed);
}

// Scroll Animation
function handleScrollAnimation() {
    const sections = document.querySelectorAll('.section-animate');
    const triggerPoint = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        }
    });
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax Effect for Floating Shapes
function handleParallax() {
    const shapes = document.querySelectorAll('.floating-shapes span');
    const scrolled = window.pageYOffset;

    shapes.forEach((shape, index) => {
        const speed = 0.1 + (index * 0.02);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    typeText();
    handleScrollAnimation();
    
    // Add visible class to first section
    setTimeout(() => {
        document.querySelector('.profile')?.classList.add('visible');
    }, 500);
});

// Event Listeners
window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Add hover effect for skill badges
document.querySelectorAll('.skill-badge').forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) translateY(-3px)';
    });
    
    badge.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.cta-btn, .contact-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Console Easter Egg
console.log('%c👋 Hey there, curious developer!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%c🚀 Looking for opportunities? Reach out to me!', 'font-size: 14px; color: #764ba2;');
console.log('%c📧 shivam8770ora@gmail.com', 'font-size: 12px; color: #888;');
