// Toggle untuk hide atau tidak password
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('passwordInput');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = this.textContent === 'Show' ? 'Hide' : 'Show';
});

// Memvalidasi form sudah diisikan atau belum (alert notification)
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function (event) {
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (email === '' || password === '') {
        alert('Please fill out all fields');
        event.preventDefault(); // Prevent form submission
    }
});

// Animasi sederhana pada tulisan welcome
window.onload = function () {
    const welcomeText = document.getElementById('welcome-text');
    setTimeout(() => {
        welcomeText.style.transform = 'scale(1.1)';
        welcomeText.style.transition = 'transform 0.5s ease-in-out';
    }, 500);

    setTimeout(() => {
        welcomeText.style.transform = 'scale(1)';
    }, 1500);
};
