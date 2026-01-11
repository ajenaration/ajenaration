// ============================================
// AJENARATION PORTFOLIO - Production Script
// Clean, Fast, and Reliable
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded - Creative Technologist');
    
    // ========== 1. MOBILE MENU ==========
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Change button icon
            mobileMenuBtn.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-content') && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.textContent = '☰';
            }
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.textContent = '☰';
            });
        });
    }
    
    // ========== 2. SMOOTH SCROLLING ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only process internal links
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (mobileMenuBtn) mobileMenuBtn.textContent = '☰';
                }
            }
        });
    });
    
    // ========== 3. PROJECT FILTERING ==========
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter projects
                const filterValue = this.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    const categories = card.getAttribute('data-category')?.split(' ') || [];
                    
                    if (filterValue === 'all' || categories.includes(filterValue)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // ========== 4. PROJECT SLIDER ==========
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        const slides = sliderContainer.querySelectorAll('.slider-item');
        const prevBtn = sliderContainer.querySelector('.prev-arrow');
        const nextBtn = sliderContainer.querySelector('.next-arrow');
        let currentSlide = 0;
        let slideInterval;
        
        if (slides.length > 1) {
            // Show first slide
            slides[0].classList.add('active');
            
            // Next slide function
            const goToSlide = (index) => {
                slides.forEach(slide => slide.classList.remove('active'));
                currentSlide = (index + slides.length) % slides.length;
                slides[currentSlide].classList.add('active');
            };
            
            // Button events
            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    clearInterval(slideInterval);
                    goToSlide(currentSlide - 1);
                    startAutoSlide();
                });
            }
            
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    clearInterval(slideInterval);
                    goToSlide(currentSlide + 1);
                    startAutoSlide();
                });
            }
            
            // Auto-slide
            const startAutoSlide = () => {
                slideInterval = setInterval(() => {
                    goToSlide(currentSlide + 1);
                }, 5000);
            };
            
            // Pause on hover
            sliderContainer.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });
            
            sliderContainer.addEventListener('mouseleave', () => {
                startAutoSlide();
            });
            
            // Start auto-slide
            startAutoSlide();
        }
    }
    
    // ========== 5. SIMPLE HERO EFFECT ==========
    const heroSection = document.querySelector('.hero');
    if (heroSection && !document.querySelector('.hero-blob')) {
        // Add floating blob if not present
        const blob = document.createElement('div');
        blob.className = 'hero-blob';
        heroSection.appendChild(blob);
    }
    
    // ========== 6. FORM VALIDATION ==========
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = this.querySelector('input[name="name"]');
            const email = this.querySelector('input[name="email"]');
            const message = this.querySelector('textarea[name="message"]');
            let valid = true;
            
            // Simple validation
            [name, email, message].forEach(field => {
                if (!field.value.trim()) {
                    field.style.borderColor = '#b02a2a';
                    valid = false;
                } else {
                    field.style.borderColor = '';
                }
            });
            
            if (!valid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // ========== 7. ANIMATION ON SCROLL ==========
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.project-card, .content-card, .blog-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85) {
                element.classList.add('visible');
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // ========== 8. COPYRIGHT YEAR ==========
    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // ========== 9. SIMPLE DATA AURA (Optional) ==========
    // If you want a simpler version of your math visualization:
    const auraContainer = document.querySelector('#data-aura-canvas');
    if (auraContainer && typeof window !== 'undefined') {
        // Simplified version - just a rotating gradient
        const aura = document.createElement('div');
        aura.style.cssText = `
            width: 100%;
            height: 100%;
            background: conic-gradient(from 0deg, #a855f7, #6366f1, #a855f7);
            border-radius: 50%;
            animation: rotate 10s linear infinite;
            opacity: 0.1;
        `;
        auraContainer.appendChild(aura);
    }
});

