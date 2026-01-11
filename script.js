// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations
    initTypingAnimation();
    initScrollAnimations();
    initSmoothScroll();
    addConsoleEasterEgg();
});

// Typing Animation
function initTypingAnimation() {
    const typedTextElement = document.querySelector('.typed-text');
    if (!typedTextElement) return;

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

    // Start typing animation
    typeText();
}

// Scroll Animations using Intersection Observer
function initScrollAnimations() {
    const sections = document.querySelectorAll('.section-animate');
    
    if (!sections.length) return;

    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional: stop observing after animation
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        sections.forEach(function(section) {
            observer.observe(section);
        });
    } else {
        // Fallback for older browsers - just show all sections
        sections.forEach(function(section) {
            section.classList.add('visible');
        });
    }

    // Also trigger on scroll for backup
    window.addEventListener('scroll', handleScrollFallback);
    
    // Initial check
    handleScrollFallback();
}

function handleScrollFallback() {
    const sections = document.querySelectorAll('.section-animate');
    const triggerPoint = window.innerHeight * 0.85;

    sections.forEach(function(section) {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        }
    });
}

// Smooth Scroll for anchor links
function initSmoothScroll() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Console Easter Egg
function addConsoleEasterEgg() {
    console.log('%c👋 Hey there, curious developer!', 'font-size: 20px; font-weight: bold; color: #667eea;');
    console.log('%c🚀 Looking for opportunities? Reach out to me!', 'font-size: 14px; color: #764ba2;');
    console.log('%c📧 shivam8770ora@gmail.com', 'font-size: 12px; color: #888;');
}

// Add hover effects for skill badges
document.addEventListener('DOMContentLoaded', function() {
    const skillBadges = document.querySelectorAll('.skill-badge');
    
    skillBadges.forEach(function(badge) {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-3px)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
});
