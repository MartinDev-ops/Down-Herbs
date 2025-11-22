// Main JavaScript for Go Down Herbs Homepage

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initLoadingScreen();
    initHeroSlider();
    initMobileMenu();
    initWhatsAppWidget();
    initBackToTop();
    initSmoothScroll();
    initAnimations();
    initNewsletterForm();
    initFeaturedProducts();
});

// Loading Screen
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Simulate loading time
    setTimeout(() => {
        loadingScreen.classList.add('loaded');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
}

// Enhanced Hero Slider with Multiple Images
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slide-prev');
    const nextBtn = document.querySelector('.slide-next');
    
    let currentSlide = 0;
    let slideInterval;

    // Function to show a specific slide
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }

    // Function to go to next slide
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) next = 0;
        showSlide(next);
    }

    // Function to go to previous slide
    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) prev = slides.length - 1;
        showSlide(prev);
    }

    // Event listeners for controls
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetInterval();
        });
    });

    // Auto slide every 5 seconds
    function startInterval() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    // Start the slider
    if (slides.length > 0) {
        startInterval();
        
        // Pause on hover
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });
            
            heroSection.addEventListener('mouseleave', () => {
                startInterval();
            });
        }
    }

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    const heroSlideshow = document.querySelector('.hero-slideshow');
    if (heroSlideshow) {
        heroSlideshow.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });

        heroSlideshow.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - next slide
            nextSlide();
            resetInterval();
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - previous slide
            prevSlide();
            resetInterval();
        }
    }
}

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.querySelector('.close-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && mobileMenuBtn) {
            if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
}

// WhatsApp Widget
function initWhatsAppWidget() {
    const waBtn = document.querySelector('.wa-btn-popup');
    const waPopup = document.querySelector('.wa-popup-chat');
    const waClose = document.querySelector('.wa-close-popup');
    
    if (waBtn && waPopup) {
        waBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            waPopup.classList.toggle('active');
        });
        
        // Close popup when clicking close button
        if (waClose) {
            waClose.addEventListener('click', () => {
                waPopup.classList.remove('active');
            });
        }
        
        // Close popup when clicking outside
        document.addEventListener('click', (e) => {
            if (waPopup && !waBtn.contains(e.target) && !waPopup.contains(e.target)) {
                waPopup.classList.remove('active');
            }
        });
        
        // Prevent closing when clicking inside popup
        waPopup.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
}

// Back to Top Button
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    const animateElements = document.querySelectorAll('.feature, .category-card, .testimonial-card, .store-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add CSS for animation classes
    const style = document.createElement('style');
    style.textContent = `
        .feature, .category-card, .testimonial-card, .store-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .feature.animate-in, 
        .category-card.animate-in, 
        .testimonial-card.animate-in, 
        .store-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .feature:nth-child(1) { transition-delay: 0.1s; }
        .feature:nth-child(2) { transition-delay: 0.2s; }
        .feature:nth-child(3) { transition-delay: 0.3s; }
        
        .category-card:nth-child(1) { transition-delay: 0.1s; }
        .category-card:nth-child(2) { transition-delay: 0.2s; }
        .category-card:nth-child(3) { transition-delay: 0.3s; }
        .category-card:nth-child(4) { transition-delay: 0.4s; }
    `;
    document.head.appendChild(style);
}

// Newsletter Form
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simulate form submission
            showNotification('Thank you for subscribing to our wellness community!', 'success');
            this.reset();
        });
    }
}

// Featured Products Slider
function initFeaturedProducts() {
    const sliderTrack = document.getElementById('sliderTrack');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if (!sliderTrack) return;
    
    // Sample product data
    const products = [
        {
            name: "Go Down Herb",
            description: "Traditional cleansing herb mixture for natural body purification and wellness.",
            price: "R150",
            image: "images/product/godown.jpg"
        },
        {
            name: "Silent Herb",
            description: "Special herbal formula with powerful natural properties for health benefits.",
            price: "R250",
            image: "images/product/silentHerb.jpg"
        },
        {
            name: "Energy Boost Tea",
            description: "Natural energy enhancer with revitalizing herbal ingredients.",
            price: "R120",
            image: "images/product/energy-tea.jpg"
        },
        {
            name: "Relaxation Blend",
            description: "Soothing herbal tea for stress relief and mental clarity.",
            price: "R180",
            image: "images/product/relaxation-tea.jpg"
        },
        {
            name: "Immunity Support",
            description: "Powerful herbal blend to strengthen your immune system.",
            price: "R200",
            image: "images/product/immunity-support.jpg"
        }
    ];
    
    // Generate product slides
    function generateProductSlides() {
        return products.map(product => `
            <div class="product-slide">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">${product.price}</div>
                    <a href="shop.html" class="btn btn-primary">
                        <i class="fas fa-shopping-basket"></i>
                        Add to Cart
                    </a>
                </div>
            </div>
        `).join('');
    }
    
    // Initialize slider
    sliderTrack.innerHTML = generateProductSlides();
    
    let currentPosition = 0;
    const slideWidth = 350; // width + gap
    const visibleSlides = Math.floor(sliderTrack.parentElement.offsetWidth / slideWidth);
    const maxPosition = -(products.length - visibleSlides) * slideWidth;
    
    // Update slider position
    function updateSliderPosition() {
        sliderTrack.style.transform = `translateX(${currentPosition}px)`;
    }
    
    // Next slide
    function next() {
        if (currentPosition > maxPosition) {
            currentPosition -= slideWidth;
            updateSliderPosition();
        }
    }
    
    // Previous slide
    function prev() {
        if (currentPosition < 0) {
            currentPosition += slideWidth;
            updateSliderPosition();
        }
    }
    
    // Event listeners
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prev);
        nextBtn.addEventListener('click', next);
    }
    
    // Touch swipe for mobile
    let sliderStartX = 0;
    let sliderEndX = 0;
    
    sliderTrack.addEventListener('touchstart', e => {
        sliderStartX = e.changedTouches[0].screenX;
    });
    
    sliderTrack.addEventListener('touchend', e => {
        sliderEndX = e.changedTouches[0].screenX;
        handleSliderSwipe();
    });
    
    function handleSliderSwipe() {
        const swipeThreshold = 50;
        
        if (sliderEndX < sliderStartX - swipeThreshold) {
            next();
        }
        
        if (sliderEndX > sliderStartX + swipeThreshold) {
            prev();
        }
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: var(--shadow-lg);
        z-index: 4000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    });
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        'success': 'check-circle',
        'error': 'exclamation-circle',
        'warning': 'exclamation-triangle',
        'info': 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function getNotificationColor(type) {
    const colors = {
        'success': '#10b981',
        'error': '#ef4444',
        'warning': '#f59e0b',
        'info': '#3b82f6'
    };
    return colors[type] || '#3b82f6';
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Add hover effects for interactive elements
function initHoverEffects() {
    // Category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Product cards
    const productCards = document.querySelectorAll('.product-slide');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize hover effects
initHoverEffects();

// Performance optimization: Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
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
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
initLazyLoading();