// Button click
function changeText(btn) {
  btn.textContent = 'Thanks for clicking!';
  btn.style.backgroundColor = 'green';
}

// Secret double-click
function secretAction() {
  alert('🎉 You discovered the secret action!');
}

// Accordion
document.querySelector('.accordion').addEventListener('click', function() {
  this.classList.toggle('active');
  const panel = this.nextElementSibling;
  panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
});

// Keypress detection
window.addEventListener('keydown', function(event) {
  document.getElementById('keypressOutput').textContent = `You pressed: ${event.key}`;
});

// Real-time form validation
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

emailInput.addEventListener('input', () => {
  if (!emailInput.validity.valid) {
    emailError.textContent = 'Invalid email format';
    emailInput.className = 'invalid';
  } else {
    emailError.textContent = '';
    emailInput.className = 'valid';
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters';
    passwordInput.className = 'invalid';
  } else {
    passwordError.textContent = '';
    passwordInput.className = 'valid';
  }
});

// Prevent form submission
const form = document.getElementById('signupForm');
form.addEventListener('submit', (e) => {
  if (!emailInput.validity.valid || passwordInput.value.length < 8) {
    e.preventDefault();
    alert('Please correct the errors in the form.');
  }
});