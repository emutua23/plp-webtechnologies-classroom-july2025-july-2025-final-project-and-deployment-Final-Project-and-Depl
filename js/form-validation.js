// Form Validation JavaScript - Emanuel's Portfolio Website
// Comprehensive form validation with vanilla JavaScript

'use strict';

// ================================
// Form Validation Configuration
// ================================

const validationConfig = {
    emailPattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phonePattern: /^[\+]?[0-9\s\-\(\)]{10,}$/,
    minNameLength: 2,
    minMessageLength: 10,
    maxMessageLength: 1000,
    debounceDelay: 300
};

// ================================
// Validation Messages
// ================================

const validationMessages = {
    required: 'This field is required',
    email: 'Please enter a valid email address',
    phone: 'Please enter a valid phone number',
    minLength: (min) => `Must be at least ${min} characters long`,
    maxLength: (max) => `Must be no more than ${max} characters long`,
    pattern: 'Please enter a valid format',
    success: 'Form submitted successfully!',
    error: 'Please fix the errors below and try again'
};

// ================================
// Initialize Form Validation
// ================================

document.addEventListener('DOMContentLoaded', function() {
    initializeFormValidation();
});

function initializeFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');

    forms.forEach(form => {
        setupFormValidation(form);
    });

    console.log('Form validation initialized');
}

// ================================
// Setup Form Validation
// ================================

function setupFormValidation(form) {
    const formFields = form.querySelectorAll('input, textarea, select');

    // Add validation event listeners
    formFields.forEach(field => {
        // Real-time validation on input
        field.addEventListener('input', debounce(function() {
            validateField(field);
        }, validationConfig.debounceDelay));

        // Validation on blur
        field.addEventListener('blur', function() {
            validateField(field);
        });

        // Remove error styling on focus
        field.addEventListener('focus', function() {
            clearFieldError(field);
        });
    });

    // Form submission validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmission(form);
    });
}

// ================================
// Field Validation Functions
// ================================

function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    const fieldName = field.name;
    const isRequired = field.hasAttribute('required');

    // Clear previous errors
    clearFieldError(field);

    // Required field validation
    if (isRequired && !value) {
        showFieldError(field, validationMessages.required);
        return false;
    }

    // Skip further validation if field is empty and not required
    if (!value && !isRequired) {
        return true;
    }

    // Type-specific validation
    switch (fieldType) {
        case 'email':
            return validateEmail(field, value);
        case 'tel':
            return validatePhone(field, value);
        case 'text':
            return validateText(field, value, fieldName);
        case 'textarea':
            return validateTextarea(field, value);
        default:
            return true;
    }
}

function validateEmail(field, value) {
    if (!validationConfig.emailPattern.test(value)) {
        showFieldError(field, validationMessages.email);
        return false;
    }
    return true;
}

function validatePhone(field, value) {
    if (!validationConfig.phonePattern.test(value)) {
        showFieldError(field, validationMessages.phone);
        return false;
    }
    return true;
}

function validateText(field, value, fieldName) {
    // Name fields validation
    if (fieldName.toLowerCase().includes('name')) {
        if (value.length < validationConfig.minNameLength) {
            showFieldError(field, validationMessages.minLength(validationConfig.minNameLength));
            return false;
        }
    }

    // Subject validation
    if (fieldName.toLowerCase().includes('subject')) {
        if (value.length < 3) {
            showFieldError(field, validationMessages.minLength(3));
            return false;
        }
    }

    return true;
}

function validateTextarea(field, value) {
    if (value.length < validationConfig.minMessageLength) {
        showFieldError(field, validationMessages.minLength(validationConfig.minMessageLength));
        return false;
    }

    if (value.length > validationConfig.maxMessageLength) {
        showFieldError(field, validationMessages.maxLength(validationConfig.maxMessageLength));
        return false;
    }

    return true;
}

// ================================
// Form Validation
// ================================

function validateForm(form) {
    const formFields = form.querySelectorAll('input, textarea, select');
    let isValid = true;

    formFields.forEach(field => {
        const fieldValid = validateField(field);
        if (!fieldValid) {
            isValid = false;
        }
    });

    return isValid;
}

// ================================
// Form Submission Handling
// ================================

async function handleFormSubmission(form) {
    const isValid = validateForm(form);
    const submitButton = form.querySelector('button[type="submit"]');
    const formMessage = form.querySelector('.form-message');

    if (!isValid) {
        showFormMessage(form, validationMessages.error, 'error');
        return;
    }

    // Show loading state
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    try {
        // Simulate form submission (replace with actual form handling)
        const formData = new FormData(form);
        const response = await submitForm(formData);

        if (response.success) {
            showFormMessage(form, validationMessages.success, 'success');
            form.reset();
            clearAllErrors(form);
        } else {
            throw new Error(response.message || 'Submission failed');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showFormMessage(form, 'There was an error sending your message. Please try again.', 'error');
    } finally {
        // Reset button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }
}

// ================================
// Form Submission Service
// ================================

async function submitForm(formData) {
    // This is a mock function - replace with your actual form submission logic
    // Options: Netlify Forms, Formspree, EmailJS, or custom backend

    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulate successful submission
            resolve({
                success: true,
                message: 'Message sent successfully!'
            });
        }, 2000);
    });

    // Example with Netlify Forms:
    /*
    try {
        const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        });

        if (response.ok) {
            return { success: true };
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
    */

    // Example with Formspree:
    /*
    try {
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            return { success: true };
        } else {
            const data = await response.json();
            throw new Error(data.error || 'Submission failed');
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
    */
}

// ================================
// Error Display Functions
// ================================

function showFieldError(field, message) {
    const fieldGroup = field.closest('.form-group');
    const existingError = fieldGroup.querySelector('.field-error');

    // Remove existing error
    if (existingError) {
        existingError.remove();
    }

    // Add error class to field
    field.classList.add('field-invalid');

    // Create and append error message
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.setAttribute('role', 'alert');

    fieldGroup.appendChild(errorElement);
}

function clearFieldError(field) {
    const fieldGroup = field.closest('.form-group');
    const errorElement = fieldGroup.querySelector('.field-error');

    field.classList.remove('field-invalid');

    if (errorElement) {
        errorElement.remove();
    }
}

function clearAllErrors(form) {
    const errorElements = form.querySelectorAll('.field-error');
    const invalidFields = form.querySelectorAll('.field-invalid');

    errorElements.forEach(error => error.remove());
    invalidFields.forEach(field => field.classList.remove('field-invalid'));
}

function showFormMessage(form, message, type) {
    let messageElement = form.querySelector('.form-message');

    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.className = 'form-message';
        form.appendChild(messageElement);
    }

    messageElement.textContent = message;
    messageElement.className = `form-message form-message-${type}`;
    messageElement.setAttribute('role', type === 'error' ? 'alert' : 'status');

    // Auto-hide success messages
    if (type === 'success') {
        setTimeout(() => {
            messageElement.style.opacity = '0';
            setTimeout(() => {
                if (messageElement.parentNode) {
                    messageElement.remove();
                }
            }, 300);
        }, 5000);
    }
}

// ================================
// Utility Functions
// ================================

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// ================================
// Additional Form Enhancements
// ================================

// Character counter for textarea
function initCharacterCounter() {
    const textareas = document.querySelectorAll('textarea[maxlength]');

    textareas.forEach(textarea => {
        const maxLength = parseInt(textarea.getAttribute('maxlength'));
        const counter = document.createElement('div');
        counter.className = 'character-counter';

        const updateCounter = () => {
            const currentLength = textarea.value.length;
            counter.textContent = `${currentLength}/${maxLength}`;

            if (currentLength > maxLength * 0.9) {
                counter.classList.add('warning');
            } else {
                counter.classList.remove('warning');
            }
        };

        textarea.addEventListener('input', updateCounter);
        textarea.parentNode.appendChild(counter);
        updateCounter();
    });
}

// Auto-resize textarea
function initAutoResizeTextarea() {
    const textareas = document.querySelectorAll('textarea[data-auto-resize]');

    textareas.forEach(textarea => {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    });
}

// Initialize enhancements
document.addEventListener('DOMContentLoaded', function() {
    initCharacterCounter();
    initAutoResizeTextarea();
});

// ================================
// Form Validation CSS (injected)
// ================================

const validationCSS = `
.field-invalid {
    border-color: #EF4444 !important;
    background-color: #FEF2F2;
}

.field-error {
    color: #EF4444;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
}

.field-error::before {
    content: "⚠️";
    margin-right: 0.25rem;
}

.form-message {
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    transition: opacity 0.3s ease;
}

.form-message-success {
    background-color: #DCFCE7;
    color: #166534;
    border: 1px solid #BBF7D0;
}

.form-message-error {
    background-color: #FEF2F2;
    color: #DC2626;
    border: 1px solid #FECACA;
}

.character-counter {
    text-align: right;
    font-size: 0.875rem;
    color: #64748B;
    margin-top: 0.25rem;
}

.character-counter.warning {
    color: #F59E0B;
}

.form-group {
    margin-bottom: 1.5rem;
}

/* Loading animation for submit button */
button[type="submit"]:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

/* Focus styles for accessibility */
input:focus,
textarea:focus,
select:focus {
    outline: 2px solid #2563EB;
    outline-offset: 2px;
}

/* Smooth transitions */
input,
textarea,
select {
    transition: border-color 0.2s ease, background-color 0.2s ease;
}
`;

// Inject validation CSS
const validationStyle = document.createElement('style');
validationStyle.textContent = validationCSS;
document.head.appendChild(validationStyle);

console.log('📝 Form validation system loaded successfully');
