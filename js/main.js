/**
 * Galerie Mauritiushof - Main JavaScript File
 * 
 * This file contains all custom JavaScript for the Galerie Mauritiushof website.
 */

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initNavbar();
  initParallax();
  initAnimations();
  initContactForm();
});

/**
 * Navbar behavior - Change background on scroll
 */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    
    // Initialize on page load
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    }
  }
}

/**
 * Simple parallax effect for hero background
 */
function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax-bg');
  
  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', function() {
      parallaxElements.forEach(element => {
        const scrollPosition = window.pageYOffset;
        element.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      });
    });
  }
}

/**
 * Animation handling
 */
function initAnimations() {
  // Custom animations can be added here
  animateOnScroll();
}

/**
 * Animate elements on scroll
 */
function animateOnScroll() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animatedElements.length > 0) {
    // Check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }
    
    // Add animation class when in viewport
    function checkElements() {
      animatedElements.forEach(element => {
        if (isInViewport(element) && !element.classList.contains('animated')) {
          element.classList.add('animated');
        }
      });
    }
    
    // Check on scroll
    window.addEventListener('scroll', checkElements);
    
    // Check on page load
    checkElements();
  }
}

/**
 * Contact Form handling
 */
function initContactForm() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      // HubSpot will handle form submissions automatically
      // This is just for any custom behavior we might want to add
      
      // Show success message
      const successMessage = document.querySelector('.form-success-message');
      if (successMessage) {
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      }
    });
  }
}