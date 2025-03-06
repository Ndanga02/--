
// Interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Highlight active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Form submission
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent successfully! I will get back to you soon.');
        this.reset();
    });
});
// Dark/Light mode toggle
const createToggleSwitch = () => {
    const toggle = document.createElement('div');
    toggle.className = 'mode-toggle';
    toggle.innerHTML = `
        <span class="mode-toggle-label">Theme</span>
        <label class="switch">
            <input type="checkbox" id="themeToggle">
            <span class="slider round"></span>
        </label>
    `;
    document.querySelector('nav').appendChild(toggle);
    
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', themeToggle.checked ? 'light' : 'dark');
    });
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.checked = true;
    }
};

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu functionality
const setupMobileMenu = () => {
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰';
    document.querySelector('nav').appendChild(mobileMenuBtn);
    
    const navLinks = document.querySelector('.nav-links');
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
};

// Project filter functionality
const setupProjectFilters = () => {
    const filterContainer = document.createElement('div');
    filterContainer.className = 'project-filters';
    filterContainer.innerHTML = `
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="economics">Economics</button>
        <button class="filter-btn" data-filter="ml">Machine Learning</button>
        <button class="filter-btn" data-filter="data">Data Analysis</button>
    `;
    
    document.querySelector('#projects h2').after(filterContainer);
    
    // Add category data to projects
    document.querySelectorAll('.project-card').forEach(card => {
        card.dataset.category = ['economics', 'ml', 'data'][Math.floor(Math.random() * 3)];
    });
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Highlight active filter
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            document.querySelectorAll('.project-card').forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
};

// Create animated skill bars
const animateSkillBars = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.skill-level').forEach(skill => {
        observer.observe(skill);
        skill.classList.add('skill-animation-ready');
    });
};

// Implement form validation and submission
const setupContactForm = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation
        let valid = true;
        form.querySelectorAll('input, textarea').forEach(field => {
            if (!field.value.trim()) {
                valid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });
        
        if (valid) {
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Message sent successfully! I will get back to you soon.';
                form.reset();
                form.appendChild(successMessage);
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }, 1500);
        }
    });
};

// Initialize all new functionality
createToggleSwitch();
setupMobileMenu();
setupProjectFilters();
animateSkillBars();
setupContactForm();

// Create particles background effect
const createParticlesBackground = () => {
    const heroSection = document.querySelector('.hero');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = `${Math.random() * 10 + 3}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        heroSection.appendChild(particle);
    }
};

createParticlesBackground();

// scripts.js file
document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Email validation
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Here you would typically send data to a server
            // For now, we'll simulate a successful submission
            showNotification('Message sent successfully! I will get back to you soon.', 'success');
            contactForm.reset();
            
            // In a real implementation, you'd send this data to your server
            console.log({
                to: 'ndanganedz@gmail.com',
                from: email,
                name: name,
                subject: subject,
                message: message
            });
        });
    }
    
    // Notification system
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Hide and remove notification after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Mobile navigation toggle
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    document.querySelector('nav').appendChild(hamburger);
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Blog article links functionality
    document.querySelectorAll('.blog-card .btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const articleTitle = this.parentElement.querySelector('h3').textContent;
            const articleDate = this.parentElement.querySelector('.blog-date').textContent;
            
            // Redirect to the article page with query parameters
            window.location.href = `article.html?title=${encodeURIComponent(articleTitle)}&date=${encodeURIComponent(articleDate)}`;
        });
    });
    
    // Scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.innerHTML = '↑';
    document.body.appendChild(scrollTopBtn);
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // Animated skill bars on scroll
    const skillLevels = document.querySelectorAll('.skill-level');
    
    function checkSkillsVisibility() {
        skillLevels.forEach(skill => {
            const rect = skill.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight * 0.8) {
                skill.classList.add('animate');
            }
        });
    }
    
    // Check on load and scroll
    checkSkillsVisibility();
    window.addEventListener('scroll', checkSkillsVisibility);
    
    // Project card hover effect
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.skill-card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
    
    function handleMouseMove(e) {
      const card = this;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate the rotation based on mouse position
      // The further from center, the more rotation
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Normalize values between -1 and 1
      const rotateY = -((x - centerX) / centerX) * 10; // max 10 degrees
      const rotateX = ((y - centerY) / centerY) * 10; // max 10 degrees
      
      // Apply 3D transformation
      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.05, 1.05, 1.05)
      `;
      
      // Create a shine effect that follows the mouse
      const shine = card.querySelector('.shine') || document.createElement('div');
      if (!card.querySelector('.shine')) {
        shine.classList.add('shine');
        card.appendChild(shine);
      }
      
      // Move the shine effect to follow the mouse
      const shineX = (x / rect.width) * 100;
      const shineY = (y / rect.height) * 100;
      shine.style.background = `radial-gradient(
        circle at ${shineX}% ${shineY}%, 
        rgba(255, 255, 255, 0.3) 0%, 
        rgba(255, 255, 255, 0) 50%
      )`;
    }
    
    function handleMouseLeave() {
      // Reset the card to original state
      this.style.transform = '';
      
      const shine = this.querySelector('.shine');
      if (shine) {
        shine.remove();
      }
    }
    
    // Add animation that starts as you scroll to the skills section
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3 // When 30% of the element is visible
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillLevels = document.querySelectorAll('.skill-level');
          skillLevels.forEach((skillLevel, index) => {
            // Stagger the animations slightly
            setTimeout(() => {
              skillLevel.classList.add('animate');
            }, index * 200);
          });
          // Only observe once
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }
  });

  // Add this function to your scripts.js
function initQuantumCodeEffect() {
    const codeElement = document.getElementById('quantumCode');
    if (!codeElement) return;
    
    const originalText = codeElement.innerText;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    // Function to get a random character
    function getRandomChar() {
      return characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    // Quantum effect simulation
    function applyQuantumEffect() {
      // Don't run if element is not in viewport
      const rect = codeElement.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      
      // Create a copy of the original text
      let currentText = originalText.split('');
      
      // Randomly change 1-3 characters
      const numChanges = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < numChanges; i++) {
        const randomIndex = Math.floor(Math.random() * currentText.length);
        // Skip spaces and newlines
        if (currentText[randomIndex] !== ' ' && currentText[randomIndex] !== '\n') {
          currentText[randomIndex] = getRandomChar();
        }
      }
      
      // Update the text
      codeElement.innerText = currentText.join('');
      
      // Reset back to original after a short delay
      setTimeout(() => {
        codeElement.innerText = originalText;
      }, 200);
    }
    
    // Run the effect at random intervals
    function startQuantumEffect() {
      applyQuantumEffect();
      
      // Schedule next effect at random interval (100-1500ms)
      const nextInterval = Math.random() * 1400 + 100;
      setTimeout(startQuantumEffect, nextInterval);
    }
    
    // Start the effect when the element is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startQuantumEffect();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    observer.observe(codeElement);
  }
  
  // Call this function when the DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    initQuantumCodeEffect();
  });

  // Image modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const projectImages = document.querySelectorAll('.project-img');
    
    projectImages.forEach(img => {
      img.addEventListener('click', function() {
        createImageModal(this.src, this.alt);
      });
    });
    
    function createImageModal(src, alt) {
      const modal = document.createElement('div');
      modal.className = 'image-modal';
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close-modal">&times;</span>
          <img src="${src}" alt="${alt}" class="modal-img">
          <p class="modal-caption">${alt}</p>
        </div>
      `;
      
      document.body.appendChild(modal);
      
      // Close modal on click
      modal.querySelector('.close-modal').addEventListener('click', function() {
        document.body.removeChild(modal);
      });
      
      // Close modal on outside click
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          document.body.removeChild(modal);
        }
      });
    }
  });

  // Preload critical images
function preloadImages() {
    const criticalImages = [
      'image.jpg',
      'Entanglement-Based Market Prediction.jpg',
      'NeuroMarket Spiking Neural Network Economic Simulator.jpg',
      'TopoFinance Topological Data Analysis for Market Structures.jpg'
    ];
    
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }
  
  // Run preload after page content is fully loaded
  window.addEventListener('load', preloadImages);

  // Image error handling
document.addEventListener('DOMContentLoaded', function() {
    const allImages = document.querySelectorAll('img');
    
    allImages.forEach(img => {
      img.onerror = function() {
        this.src = 'placeholder.jpg'; // Create a generic placeholder image
        this.alt = 'Image unavailable';
        this.classList.add('image-error');
      };
    });
  });