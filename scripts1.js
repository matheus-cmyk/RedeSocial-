function login() {
    // Logic for login
    alert('Login button clicked');
}

function showResetPassword() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('reset-password-container').style.display = 'flex';
}

function sendResetEmail() {
    // Logic for sending reset email
    alert('Send reset email button clicked');
    showEmailSent();
}

function showEmailSent() {
    document.getElementById('reset-password-container').style.display = 'none';
    document.getElementById('email-sent-container').style.display = 'flex';
}

function showLogin() {
    document.getElementById('email-sent-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'flex';
}