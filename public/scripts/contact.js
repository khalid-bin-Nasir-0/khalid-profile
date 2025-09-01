// Contact form functionality with Supabase integration

// Supabase configuration
const SUPABASE_URL = 'https://olkkgjuysaxjwktoxijz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sa2tnanV5c2F4andrdG94aWp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxNzAyNzcsImV4cCI6MjA3MDc0NjI3N30.P-ysKp-oOsyvRJPnz6JUtMwK6lTpGEWQZmIb-tj0OXA';

// Contact form handler
class ContactForm {
  constructor() {
    this.form = document.getElementById('contactForm');
    this.submitBtn = document.getElementById('submitBtn');
    this.toast = document.getElementById('toast');
    this.toastIcon = document.getElementById('toastIcon');
    this.toastMessage = document.getElementById('toastMessage');
    
    this.isSubmitting = false;
    this.init();
  }

  init() {
    if (this.form) {
      this.form.addEventListener('submit', this.handleSubmit.bind(this));
      this.setupFieldValidation();
    }
  }

  setupFieldValidation() {
    const fields = this.form.querySelectorAll('input, textarea');
    
    fields.forEach(field => {
      // Real-time validation
      field.addEventListener('blur', () => this.validateField(field));
      field.addEventListener('input', () => this.clearFieldError(field));
    });
  }

  validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    // Clear previous errors
    this.clearFieldError(field);

    // Validation rules
    switch (fieldName) {
      case 'name':
        if (!value) {
          errorMessage = 'Name is required';
          isValid = false;
        } else if (value.length < 2) {
          errorMessage = 'Name must be at least 2 characters';
          isValid = false;
        }
        break;

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          errorMessage = 'Email is required';
          isValid = false;
        } else if (!emailRegex.test(value)) {
          errorMessage = 'Please enter a valid email address';
          isValid = false;
        }
        break;

      case 'message':
        if (!value) {
          errorMessage = 'Message is required';
          isValid = false;
        } else if (value.length < 10) {
          errorMessage = 'Message must be at least 10 characters';
          isValid = false;
        }
        break;
    }

    if (!isValid) {
      this.showFieldError(field, errorMessage);
    }

    return isValid;
  }

  showFieldError(field, message) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    formGroup.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
    
    // Add shake animation
    field.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
      field.style.animation = '';
    }, 500);
  }

  clearFieldError(field) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    formGroup.classList.remove('error');
    errorElement.classList.remove('show');
    errorElement.textContent = '';
  }

  validateForm() {
    const fields = this.form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    fields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });

    return isValid;
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (this.isSubmitting) return;

    // Validate form
    if (!this.validateForm()) {
      this.showToast('Please fix the errors above', 'error');
      return;
    }

    this.isSubmitting = true;
    this.setLoadingState(true);

    try {
      // Get form data
      const formData = new FormData(this.form);
      const data = {
        name: formData.get('name').trim(),
        email: formData.get('email').trim(),
        message: formData.get('message').trim(),
        created_at: new Date().toISOString()
      };

      // Submit to Supabase
      const response = await this.submitToSupabase(data);
      
      if (response.error) {
        throw new Error(response.error.message);
      }

      // Success
      this.showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
      this.form.reset();
      
      // Analytics (if you have Google Analytics)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          event_category: 'Contact',
          event_label: 'Contact Form'
        });
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      this.showToast('Failed to send message. Please try again or contact me directly.', 'error');
    } finally {
      this.isSubmitting = false;
      this.setLoadingState(false);
    }
  }

  async submitToSupabase(data) {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit form');
    }

    return { data: result, error: null };
  }

  setLoadingState(loading) {
    if (!this.submitBtn) return;

    const btnText = this.submitBtn.querySelector('.btn-text');
    const btnLoading = this.submitBtn.querySelector('.btn-loading');

    if (loading) {
      btnText.classList.add('hide');
      btnLoading.classList.add('show');
      this.submitBtn.disabled = true;
    } else {
      btnText.classList.remove('hide');
      btnLoading.classList.remove('show');
      this.submitBtn.disabled = false;
    }
  }

  showToast(message, type = 'success') {
    if (!this.toast) return;

    this.toastMessage.textContent = message;
    this.toast.className = `toast ${type}`;

    // Update icon based on type
    if (type === 'success') {
      this.toastIcon.innerHTML = `
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      `;
    } else {
      this.toastIcon.innerHTML = `
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      `;
    }

    // Show toast
    this.toast.classList.add('show');

    // Auto hide after 5 seconds
    setTimeout(() => {
      this.hideToast();
    }, 5000);

    // Add click to dismiss
    const dismissHandler = () => {
      this.hideToast();
      this.toast.removeEventListener('click', dismissHandler);
    };
    this.toast.addEventListener('click', dismissHandler);
  }

  hideToast() {
    if (this.toast) {
      this.toast.classList.remove('show');
    }
  }
}

// Initialize contact form when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ContactForm();
});

// Fallback email functionality if Supabase fails
function openEmailClient() {
  const subject = encodeURIComponent('Contact from Portfolio');
  const body = encodeURIComponent('Hi Khalid,\n\nI visited your portfolio and would like to get in touch.\n\n');
  const mailtoLink = `mailto:khalid@example.com?subject=${subject}&body=${body}`;
  
  window.location.href = mailtoLink;
}

// Export for potential use in other scripts
window.ContactForm = ContactForm;