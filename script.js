document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // Carousel Functionality
  const carouselTrack = document.querySelector('.carousel-track');
  const carouselSlides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  if (carouselTrack && carouselSlides.length > 0) {
    let currentIndex = 0;
    const slideWidth = carouselSlides[0].clientWidth;

    // Set initial position
    carouselTrack.style.transform = `translateX(0)`;

    // Auto slide every 5 seconds
    let autoSlide = setInterval(nextSlide, 5000);

    function nextSlide() {
      currentIndex = (currentIndex + 1) % carouselSlides.length;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + carouselSlides.length) % carouselSlides.length;
      updateCarousel();
    }

    function updateCarousel() {
      carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
      resetAutoSlide();
    }

    function resetAutoSlide() {
      clearInterval(autoSlide);
      autoSlide = setInterval(nextSlide, 5000);
    }

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', prevSlide);
      nextBtn.addEventListener('click', nextSlide);
    }
  }

  // Accordion Functionality
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  if (accordionHeaders.length > 0) {
    accordionHeaders.forEach(header => {
      header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        
        // Toggle active class on header
        this.classList.toggle('active');
        
        // Toggle content visibility
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    });
  }

  // Tabs Functionality
  const tabBtns = document.querySelectorAll('.tab-btn');
  
  if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Remove active class from all buttons and panes
        document.querySelectorAll('.tab-btn').forEach(btn => {
          btn.classList.remove('active');
        });
        
        document.querySelectorAll('.tab-pane').forEach(pane => {
          pane.classList.remove('active');
        });
        
        // Add active class to current button and pane
        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
      });
    });
  }

  // Form Validation
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      
      // Simple validation
      if (email && !isValidEmail(email.value)) {
        alert('Please enter a valid email address.');
        isValid = false;
      }
      
      if (message && message.value.trim() === '') {
        alert('Please enter a message.');
        isValid = false;
      }
      
      if (isValid) {
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
      }
    });
  }
  
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});

