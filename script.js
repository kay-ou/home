// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navSocial = document.querySelector('.nav-social');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            const isActive = hamburger.classList.contains('active');

            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            navSocial.classList.toggle('active');

            // Prevent body scroll when menu is open
            if (!isActive) {
                document.body.classList.add('menu-open');
            } else {
                document.body.classList.remove('menu-open');
            }
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            navSocial.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) ||
                                navSocial.contains(event.target) ||
                                hamburger.contains(event.target);

        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            navSocial.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = document.querySelector('.submit-button');
            const submitText = document.querySelector('.submit-text');
            const submitLoading = document.querySelector('.submit-loading');
            const formMessage = document.getElementById('formMessage');
            
            // Show loading state
            submitText.style.display = 'none';
            submitLoading.style.display = 'inline-block';
            submitButton.disabled = true;
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                // Reset button state
                submitText.style.display = 'inline-block';
                submitLoading.style.display = 'none';
                submitButton.disabled = false;
                
                // Show success message
                formMessage.className = 'form-message success';
                formMessage.textContent = '感谢您的留言！我们会尽快回复您。';
                formMessage.style.display = 'block';
                
                // Reset form
                contactForm.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
                
            }, 2000);
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#fff';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation (excluding about page items to prevent image issues)
    const animateElements = document.querySelectorAll('.support-card, .contact-form-container');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already loaded
        if (img.complete) {
            img.style.opacity = '1';
        }
    });

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.cta-button, .discord-button, .service-link, .submit-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click effect to buttons
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1)';
        });
    });

    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Removed parallax effect to prevent image position issues

    // Add typing effect to hero title (optional)
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle && heroTitle.textContent) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }
});

// Add CSS for mobile menu
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 767px) {
        .nav-menu.active,
        .nav-social.active {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            padding: 1.5rem 2rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            border-top: 1px solid #eee;
            z-index: 999;
        }

        .nav-menu.active {
            gap: 1.2rem;
        }

        .nav-menu.active .nav-link {
            padding: 0.5rem 0;
            font-size: 1.1rem;
            border-bottom: 1px solid #f5f5f5;
        }

        .nav-menu.active .nav-link:last-child {
            border-bottom: none;
        }

        .nav-social.active {
            border-top: 1px solid #eee;
            padding-top: 1rem;
            margin-top: 1rem;
            justify-content: center;
        }

        .nav-social.active .social-link {
            font-size: 1.3rem;
            padding: 0.5rem;
        }

        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }

        /* Prevent body scroll when menu is open */
        body.menu-open {
            overflow: hidden;
        }
    }

    @media (max-width: 479px) {
        .nav-menu.active,
        .nav-social.active {
            padding: 1rem 1.5rem;
        }

        .nav-menu.active .nav-link {
            font-size: 1rem;
        }
    }
`;
document.head.appendChild(style);
