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

// Scroll-triggered animation for "Who We Are" section
document.addEventListener('DOMContentLoaded', () => {
  const whoWeAre = document.querySelector('.who-we-are-text');

  function checkIfInView() {
    const rect = whoWeAre.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (rect.top <= windowHeight - 100) { // Trigger when 100px visible
      whoWeAre.classList.add('in-view');
      window.removeEventListener('scroll', checkIfInView); // Only trigger once
    }
  }

  window.addEventListener('scroll', checkIfInView);
  checkIfInView(); // Check on load in case already in view
});



  const waBtn = document.querySelector('.wa__btn_popup');
  const waPopup = document.querySelector('.wa__popup_chat_box');

  waBtn.addEventListener('click', () => {
    waPopup.style.display = waPopup.style.display === 'block' ? 'none' : 'block';
  });

  // Optional: Close popup if clicked outside
  document.addEventListener('click', (e) => {
    if (!waBtn.contains(e.target) && !waPopup.contains(e.target)) {
      waPopup.style.display = 'none';
    }
  });

