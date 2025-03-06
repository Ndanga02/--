// Particle animation system
class ParticleSystem {
    constructor() {
      this.canvas = document.getElementById('particleCanvas');
      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.mousePosition = { x: null, y: null };
      
      // Configure canvas
      this.resizeCanvas();
      window.addEventListener('resize', () => this.resizeCanvas());
      
      // Track mouse position
      document.addEventListener('mousemove', (e) => {
        this.mousePosition.x = e.clientX;
        this.mousePosition.y = e.clientY;
      });
      
      // Initialize particles
      this.init();
      
      // Start animation loop
      this.animate();
    }
    
    resizeCanvas() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
    
    init() {
      // Create particles
      this.particles = [];
      const particleCount = Math.floor(window.innerWidth / 20);
      
      for (let i = 0; i < particleCount; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          radius: Math.random() * 2 + 1,
          color: `rgba(66, 153, 225, ${Math.random() * 0.5 + 0.3})`,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          directionChangeTime: Math.random() * 100 + 50
        });
      }
    }
    
    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];
        
        // Draw particle
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = p.color;
        this.ctx.fill();
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Change direction randomly
        if (Math.random() * p.directionChangeTime < 1) {
          p.speedX = Math.random() * 0.5 - 0.25;
          p.speedY = Math.random() * 0.5 - 0.25;
        }
        
        // Check boundaries
        if (p.x < 0 || p.x > this.canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > this.canvas.height) p.speedY *= -1;
        
        // Connect particles close to mouse
        if (this.mousePosition.x && this.mousePosition.y) {
          const dx = this.mousePosition.x - p.x;
          const dy = this.mousePosition.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = `rgba(66, 153, 225, ${0.3 - distance / 400})`;
            this.ctx.lineWidth = 0.5;
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(this.mousePosition.x, this.mousePosition.y);
            this.ctx.stroke();
            
            // Attract particles to mouse
            p.x += dx * 0.01;
            p.y += dy * 0.01;
          }
        }
        
        // Connect nearby particles
        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = `rgba(66, 153, 225, ${0.2 - distance / 500})`;
            this.ctx.lineWidth = 0.3;
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(() => this.animate());
    }
  }
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    new ParticleSystem();
  });