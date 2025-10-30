// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.getElementById('mobileMenu').classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuButton = document.querySelector('.mobile-menu-btn');
    
    if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
        mobileMenu.classList.remove('active');
    }
});

// Image slideshow for About section
  
    const images = [
      'images/drinks.jpeg',
      'images/waters.jpg',
      'images/godown(logo).png'
    ];

    // Preload images
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    let index = 0;
    const aboutImage = document.getElementById("aboutImage");

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


    
    
  
    document.addEventListener("DOMContentLoaded", () => {
      const fadeElement = document.querySelector(".fade-in-up");
      fadeElement.classList.add("animate");
    });