class HeroSlider {
    constructor() {
        this.bgSlides = document.querySelectorAll('.bg-slide');
        this.taglines = document.querySelectorAll('.tagline');
        this.currentBgIndex = 0;
        this.currentTaglineIndex = 0;
        
        this.init();
    }

    init() {
        // Preload images
        this.preloadImages();
        
        // Start background transitions
        this.startBackgroundSlider();
        
        // Start tagline transitions
        this.startTaglineSlider();
    }

    preloadImages() {
        this.bgSlides.forEach(slide => {
            const img = new Image();
            img.src = slide.style.backgroundImage.replace('url("', '').replace('")', '');
        });
    }

    startBackgroundSlider() {
        setInterval(() => {
            this.transitionBackground();
        }, 5000); // Change every 5 seconds
    }

    transitionBackground() {
        // Hide current slide
        const currentSlide = this.bgSlides[this.currentBgIndex];
        currentSlide.classList.remove('active');
        
        // Show next slide
        this.currentBgIndex = (this.currentBgIndex + 1) % this.bgSlides.length;
        const nextSlide = this.bgSlides[this.currentBgIndex];
        nextSlide.classList.add('active');
    }

    startTaglineSlider() {
        setInterval(() => {
            this.transitionTagline();
        }, 4000); // Change every 4 seconds
    }

    transitionTagline() {
        // Hide current tagline
        const currentTagline = this.taglines[this.currentTaglineIndex];
        currentTagline.classList.remove('active');
        
        // Show next tagline
        this.currentTaglineIndex = (this.currentTaglineIndex + 1) % this.taglines.length;
        const nextTagline = this.taglines[this.currentTaglineIndex];
        nextTagline.classList.add('active');
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    new HeroSlider();
});

// Add button hover effects
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});