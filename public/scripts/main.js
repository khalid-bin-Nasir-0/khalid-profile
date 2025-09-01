// Main JavaScript functionality for the portfolio

// DOM elements
const navigation = {
  desktop: document.getElementById('desktopNav'),
  mobile: document.getElementById('mobileNav'),
  mobileBtn: document.getElementById('mobileMenuBtn'),
  navButtons: null // Will be set after DOM loads
};

// State management
const state = {
  isMenuOpen: false,
  currentSection: 'hero',
  isScrolling: false
};

// Utility functions
const utils = {
  // Debounce function for performance
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function for scroll events
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Smooth scroll to section
  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80; // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  },

  // Check if element is in viewport
  isInViewport(element, threshold = 0.5) {
    const rect = element.getBoundingClientRect();
    const viewHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= viewHeight * (1 - threshold) && rect.bottom >= viewHeight * threshold;
  },

  // Get current section based on scroll position
  getCurrentSection() {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    const scrollPos = window.scrollY + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPos) {
        return sections[i];
      }
    }
    return 'hero';
  }
};

// Navigation functionality
const navigationHandler = {
  init() {
    this.bindEvents();
    this.updateActiveButton();
  },

  bindEvents() {
    // Mobile menu toggle
    if (navigation.mobileBtn) {
      navigation.mobileBtn.addEventListener('click', this.toggleMobileMenu.bind(this));
    }

    // Navigation button clicks
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-section]')) {
        const button = e.target.closest('[data-section]');
        const sectionId = button.getAttribute('data-section');
        this.navigateToSection(sectionId);
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (state.isMenuOpen && !e.target.closest('.nav-mobile') && !e.target.closest('.mobile-menu-btn')) {
        this.closeMobileMenu();
      }
    });

    // Handle escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.isMenuOpen) {
        this.closeMobileMenu();
      }
    });
  },

  toggleMobileMenu() {
    state.isMenuOpen = !state.isMenuOpen;
    this.updateMobileMenuState();
  },

  closeMobileMenu() {
    state.isMenuOpen = false;
    this.updateMobileMenuState();
  },

  updateMobileMenuState() {
    if (navigation.mobile && navigation.mobileBtn) {
      navigation.mobile.classList.toggle('active', state.isMenuOpen);
      navigation.mobileBtn.classList.toggle('active', state.isMenuOpen);
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = state.isMenuOpen ? 'hidden' : '';
    }
  },

  navigateToSection(sectionId) {
    utils.scrollToSection(sectionId);
    this.closeMobileMenu();
    state.currentSection = sectionId;
    this.updateActiveButton();
  },

  updateActiveButton() {
    const buttons = document.querySelectorAll('[data-section]');
    buttons.forEach(button => {
      const sectionId = button.getAttribute('data-section');
      button.classList.toggle('active', sectionId === state.currentSection);
    });
  }
};

// Scroll effects and animations
const scrollHandler = {
  init() {
    this.bindEvents();
    this.setupIntersectionObserver();
    this.initRoleRotation();
  },

  bindEvents() {
    // Throttled scroll handler
    window.addEventListener('scroll', utils.throttle(this.handleScroll.bind(this), 16));
    
    // Update current section on scroll
    window.addEventListener('scroll', utils.debounce(() => {
      const newSection = utils.getCurrentSection();
      if (newSection !== state.currentSection) {
        state.currentSection = newSection;
        navigationHandler.updateActiveButton();
      }
    }, 100));
  },

  handleScroll() {
    const scrollY = window.scrollY;
    
    // Update navigation background opacity
    const nav = document.getElementById('navigation');
    if (nav) {
      const opacity = Math.min(scrollY / 100, 1);
      nav.style.background = `hsla(0, 0%, 100%, ${0.8 + opacity * 0.2})`;
    }

    // Parallax effects for background elements
    const circles = document.querySelectorAll('.floating-circle, .hero-circle');
    circles.forEach((circle, index) => {
      const speed = 0.1 + (index * 0.05);
      const yPosition = -(scrollY * speed);
      circle.style.transform = `translateY(${yPosition}px)`;
    });

    // Code snippets parallax
    const codeSnippets = document.querySelector('.code-snippets');
    if (codeSnippets) {
      const yPosition = -(scrollY * 0.2);
      codeSnippets.style.transform = `translateY(${yPosition}px)`;
    }
  },

  setupIntersectionObserver() {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -10% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll(`
      .section-header,
      .about-personal,
      .about-skills,
      .skill-category,
      .project-card,
      .contact-info,
      .contact-form,
      .proficiency-section,
      .certifications-section,
      .projects-footer
    `);

    animatedElements.forEach(el => {
      el.classList.add('animate-on-scroll');
      observer.observe(el);
    });
  },

  initRoleRotation() {
    const roles = document.querySelectorAll('.role-text');
    if (roles.length === 0) return;

    let currentIndex = 0;
    
    // Show first role initially
    if (roles[0]) {
      roles[0].classList.add('active');
    }

    // Rotate roles every 2 seconds
    setInterval(() => {
      // Hide current role
      if (roles[currentIndex]) {
        roles[currentIndex].classList.remove('active');
      }
      
      // Move to next role
      currentIndex = (currentIndex + 1) % roles.length;
      
      // Show next role
      if (roles[currentIndex]) {
        roles[currentIndex].classList.add('active');
      }
    }, 2000);
  }
};

// Performance optimization
const performanceHandler = {
  init() {
    this.optimizeImages();
    this.preloadCriticalAssets();
  },

  optimizeImages() {
    // Lazy loading for images (native support with fallback)
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    // Fallback for browsers that don't support native lazy loading
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      // For browsers without native lazy loading, use intersection observer
      if (!('loading' in HTMLImageElement.prototype)) {
        images.forEach(img => {
          if (img.hasAttribute('loading')) {
            img.dataset.src = img.src;
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y5ZmFmYiIvPjwvc3ZnPg==';
            imageObserver.observe(img);
          }
        });
      }
    }
  },

  preloadCriticalAssets() {
    // Preload critical fonts and images
    const criticalAssets = [
      './lovable-uploads/16bcec82-72d9-49b1-95bc-ca6f3ab5e18c.png' // Profile image
    ];

    criticalAssets.forEach(asset => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = asset.endsWith('.png') || asset.endsWith('.jpg') ? 'image' : 'font';
      link.href = asset;
      if (link.as === 'font') {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }
};

// Error handling
const errorHandler = {
  init() {
    window.addEventListener('error', this.handleError.bind(this));
    window.addEventListener('unhandledrejection', this.handlePromiseRejection.bind(this));
  },

  handleError(event) {
    console.error('JavaScript Error:', event.error);
    // You could send this to an error reporting service
  },

  handlePromiseRejection(event) {
    console.error('Unhandled Promise Rejection:', event.reason);
    // You could send this to an error reporting service
  }
};

// Accessibility enhancements
const accessibilityHandler = {
  init() {
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupReducedMotion();
  },

  setupKeyboardNavigation() {
    // Tab navigation for buttons
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const target = e.target;
        if (target.hasAttribute('data-section')) {
          e.preventDefault();
          target.click();
        }
      }
    });
  },

  setupScreenReaderSupport() {
    // Add ARIA labels and descriptions where needed
    const navButtons = document.querySelectorAll('[data-section]');
    navButtons.forEach(button => {
      const section = button.getAttribute('data-section');
      if (!button.hasAttribute('aria-label')) {
        button.setAttribute('aria-label', `Navigate to ${section} section`);
      }
    });
  },

  setupReducedMotion() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
      document.body.classList.add('reduced-motion');
    }

    // Listen for changes
    prefersReducedMotion.addEventListener('change', () => {
      document.body.classList.toggle('reduced-motion', prefersReducedMotion.matches);
    });
  }
};

// Main initialization
const app = {
  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', this.onDOMReady.bind(this));
    } else {
      this.onDOMReady();
    }
  },

  onDOMReady() {
    try {
      // Initialize all handlers
      navigationHandler.init();
      scrollHandler.init();
      performanceHandler.init();
      errorHandler.init();
      accessibilityHandler.init();

      // Set up initial state
      this.setupInitialState();
      
      console.log('Portfolio app initialized successfully');
    } catch (error) {
      console.error('Error initializing app:', error);
    }
  },

  setupInitialState() {
    // Set initial active section
    state.currentSection = utils.getCurrentSection();
    navigationHandler.updateActiveButton();

    // Add loaded class to body for any CSS animations
    document.body.classList.add('loaded');
  }
};

// Initialize the application
app.init();

// Export for use in other scripts
window.PortfolioApp = {
  utils,
  navigationHandler,
  scrollHandler,
  state
};