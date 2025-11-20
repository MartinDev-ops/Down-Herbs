// Contact form functionality
function initContactPage() {
    if (!document.querySelector('.contact-page')) return;

    setupContactForm();
    updateCartCount();
}

// Setup contact form
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    
    // Basic validation
    if (!validateForm(formValues)) {
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // In a real application, you would send the data to your server here
        console.log('Form submitted:', formValues);
        
        // Show success message
        showFormSuccess(form);
        
        // Reset form
        form.reset();
        
        // Restore button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Form validation
function validateForm(formData) {
    const { name, email, subject, message } = formData;
    
    if (!name.trim()) {
        showFormError('Please enter your full name');
        return false;
    }
    
    if (!email.trim()) {
        showFormError('Please enter your email address');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showFormError('Please enter a valid email address');
        return false;
    }
    
    if (!subject) {
        showFormError('Please select a subject');
        return false;
    }
    
    if (!message.trim()) {
        showFormError('Please enter your message');
        return false;
    }
    
    return true;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form error
function showFormError(message) {
    // Remove any existing error messages
    removeExistingMessages();
    
    const errorEl = document.createElement('div');
    errorEl.className = 'form-error';
    errorEl.textContent = message;
    errorEl.style.cssText = `
        background-color: #fef2f2;
        border: 1px solid #fecaca;
        color: #dc2626;
        padding: 1rem;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        font-size: 0.875rem;
        font-weight: 500;
    `;
    
    const form = document.getElementById('contactForm');
    form.insertBefore(errorEl, form.firstChild);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (errorEl.parentNode) {
            errorEl.parentNode.removeChild(errorEl);
        }
    }, 5000);
}

// Remove existing messages
function removeExistingMessages() {
    const existingError = document.querySelector('.form-error');
    const existingSuccess = document.querySelector('.form-success');
    
    if (existingError) existingError.remove();
    if (existingSuccess) existingSuccess.remove();
}

// Show form success
function showFormSuccess(form) {
    // Replace form with success message
    const successHTML = `
        <div class="form-success">
            <div class="form-success-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            </div>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
            <button class="btn btn-primary" onclick="resetContactForm()">Send Another Message</button>
        </div>
    `;
    
    form.style.display = 'none';
    form.insertAdjacentHTML('afterend', successHTML);
}

// Reset contact form
function resetContactForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.querySelector('.form-success');
    
    if (successMessage) {
        successMessage.remove();
    }
    
    form.style.display = 'block';
    form.reset();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initContactPage);