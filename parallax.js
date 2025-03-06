document.addEventListener('DOMContentLoaded', function() {
    // Elements that will have parallax effect
    const elementsToParallax = [
      { selector: 'h1', speedFactor: 0.2 },
      { selector: '.hero p', speedFactor: 0.1 },
      { selector: '.about-text p', speedFactor: 0.05 },
      { selector: '.skill-card', speedFactor: 0.03 },
      { selector: '.project-card', speedFactor: 0.04 },
      { selector: '.blog-card', speedFactor: 0.02 }
    ];
    
    // Get all elements
    const parallaxElements = elementsToParallax.map(item => {
      return {
        elements: document.querySelectorAll(item.selector),
        speedFactor: item.speedFactor
      };
    });
    
    // Update element positions on scroll
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset;
      
      parallaxElements.forEach(item => {
        item.elements.forEach(el => {
          // Get element's position relative to the viewport
          const rect = el.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;
          const viewportCenter = window.innerHeight / 2;
          
          // Calculate distance from center
          const distanceFromCenter = elCenter - viewportCenter;
          
          // Apply parallax transform
          const parallaxOffset = distanceFromCenter * item.speedFactor;
          el.style.transform = `translateY(${parallaxOffset}px)`;
        });
      });
    });
    
    // Init parallax
    window.dispatchEvent(new Event('scroll'));
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 1000; // ms
          let start = null;
          
          function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);
            
            // Easing function for smooth deceleration
            const easing = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            
            window.scrollTo(0, startPosition + distance * easing(percentage));
            
            if (progress < duration) {
              window.requestAnimationFrame(step);
            }
          }
          
          window.requestAnimationFrame(step);
        }
      });
    });
  });