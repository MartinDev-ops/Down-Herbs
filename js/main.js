// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && mobileMenuBtn) {
            if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                mobileMenu.classList.remove('active');
            }
        }
    });

    // Image slideshow for About section
    const images = [
        'images/herb2/delivery-options.jpg',
        'images/herb2/quality.jpg',
        'images/herb2/sales-person.jpg',

    ];

    // Preload images
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    let index = 0;
    const aboutImage = document.getElementById("aboutImage");

    if (aboutImage) {
        setInterval(() => {
            // Fade out
            aboutImage.style.opacity = 0;

            setTimeout(() => {
                index = (index + 1) % images.length;
                aboutImage.src = images[index];
                // Fade in
                aboutImage.style.opacity = 1;
            }, 500);
        }, 6000);
    }

    // Fade in animation for hero section
    const fadeElement = document.querySelector(".fade-in-up");
    if (fadeElement) {
        fadeElement.classList.add("animate");
    }

    // Scroll-triggered animation for "Who We Are" section
    const aboutTextContent = document.querySelector('.about-text-content');

    function checkIfInView() {
        if (aboutTextContent) {
            const rect = aboutTextContent.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight - 100) { // Trigger when 100px visible
                aboutTextContent.classList.add('in-view');
                window.removeEventListener('scroll', checkIfInView); // Only trigger once
            }
        }
    }

    if (aboutTextContent) {
        window.addEventListener('scroll', checkIfInView);
        checkIfInView(); // Check on load in case already in view
    }

    // WhatsApp widget functionality
    const waBtn = document.querySelector('.wa-btn-popup');
    const waPopup = document.querySelector('.wa-popup-chat');

    if (waBtn && waPopup) {
        waBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            waPopup.style.display = waPopup.style.display === 'block' ? 'none' : 'block';
        });

        // Close popup if clicked outside
        document.addEventListener('click', (e) => {
            if (waPopup && !waBtn.contains(e.target) && !waPopup.contains(e.target)) {
                waPopup.style.display = 'none';
            }
        });

        // Prevent closing when clicking inside popup
        waPopup.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Add hover effects for product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
});

// Store cards interaction
function initStoreCards() {
    const storeCards = document.querySelectorAll('.store-card');
    
    storeCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add visual feedback when clicked
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // You could add functionality to show more store details
            // or navigate to a dedicated store page
            console.log('Store card clicked');
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Your existing JavaScript code...
    
    // Add these new initializations
    initStoreCards();
});


// About page specific functionality
function initAboutPage() {
    // Add intersection observer for feature cards animation
    const featureCards = document.querySelectorAll('.feature-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered animation delay
                entry.target.style.animationDelay = `${(index % 6) * 0.1}s`;
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    featureCards.forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });
}

// Initialize about page features
if (document.querySelector('.about-page')) {
    initAboutPage();
}