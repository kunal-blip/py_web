// ============================================
// Navigation Scroll Effect
// ============================================
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ============================================
// Smooth Scroll Spy - Active Navigation
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header nav a[href^="#"]');

function activateNavLink() {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', activateNavLink);

// ============================================
// Intersection Observer for Fade-in Animations
// ============================================
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all sections
sections.forEach(section => {
  observer.observe(section);
});

// ============================================
// Smooth Scrolling for Navigation Links
// ============================================
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// Parallax Effect for Hero Section
// ============================================
window.addEventListener('scroll', () => {
  const hero = document.querySelector('#hero');
  if (hero) {
    const scrolled = window.scrollY;
    hero.style.transform = `translateY(${scrolled * 0.4}px)`;
    hero.style.opacity = 1 - (scrolled * 0.002);
  }
});

// ============================================
// Add Animation Delays to Project Cards
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project');
  projects.forEach((project, index) => {
    project.style.animationDelay = `${index * 0.1}s`;
  });
  
  const skillItems = document.querySelectorAll('#skills li');
  skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });
});

// ============================================
// Typing Effect for Hero Heading (Optional Enhancement)
// ============================================
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Uncomment to enable typing effect
document.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.querySelector('#hero h1 span');
  if (nameElement) {
    const originalText = nameElement.textContent;
    typeWriter(nameElement, originalText, 80);
  }
});

// ============================================
// Reduced Motion Preference
// ============================================
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Disable parallax and other motion effects
  window.removeEventListener('scroll', () => {});
}

// ============================================
// Logo Modal - Instagram Style Viewer
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const logoImg = document.querySelector('header nav img');
  
  if (logoImg) {
    // Create modal structure
    const modal = document.createElement('div');
    modal.className = 'logo-modal';
    modal.innerHTML = `
      <div class="logo-modal-content">
        <div class="logo-modal-close">×</div>
        <img src="${logoImg.src}" alt="Logo">
      </div>
    `;
    document.body.appendChild(modal);
    
    // Open modal on logo hover/click
    logoImg.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
    
    // Close modal on close button click
    const closeBtn = modal.querySelector('.logo-modal-close');
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    });
    
    // Close modal on background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});

console.log('Portfolio interactions loaded successfully! 🚀');
