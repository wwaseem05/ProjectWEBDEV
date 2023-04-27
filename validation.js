const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateForm()) {
    // Submit form or show success message
    alert('Form submitted successfully!');
    form.reset();
    window.location.href = 'index.html'; 
  }
});

nameInput.addEventListener('input', function() {
  validateName();
});

phoneInput.addEventListener('input', function() {
  validatePhone();
});

emailInput.addEventListener('input', function() {
  validateEmail();
});

function validateForm() {
  let isValid = true;
  if (!validateName()) {
    isValid = false;
  }
  if (!validatePhone()) {
    isValid = false;
  }
  if (!validateEmail()) {
    isValid = false;
  }
  return isValid;
}

function validateName() {
  const nameError = document.getElementById('nameError');
  if (nameInput.value.trim() === '') {
    nameInput.classList.add('focus');
    nameError.textContent = 'Please enter your name';
    return false;
  } else {
    nameInput.classList.remove('focus');
    nameError.textContent = '';
    return true;
  }
}

function validatePhone() {
  const phoneError = document.getElementById('phoneError');
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phoneInput.value.trim())) {
    phoneInput.classList.add('focus');
    phoneError.textContent = 'Please enter a valid 10-digit phone number';
    return false;
  } else {
    phoneInput.classList.remove('focus');
    phoneError.textContent = '';
    return true;
  }
}

function validateEmail() {
  const emailError = document.getElementById
}