const password = document.getElementById('password');
const strengthSpan = document.querySelector('#strength-msg span');

password.addEventListener('input', (event) => {
    const val = event.target.value;
    
    // Reset if empty
    if (val.length === 0) {
        strengthSpan.textContent = 'None';
        strengthSpan.style.color = 'white';
        return;
    }
    
    // Check if the password contains a number
    const hasNumber = /\d/.test(val);
    
    // Evaluate conditions based on user's requirements
    if (val.length < 6) {
        strengthSpan.textContent = 'Weak';
        strengthSpan.style.color = 'red';
    } else if (val.length >= 6 && val.length <= 8) {
        strengthSpan.textContent = 'Medium';
        strengthSpan.style.color = 'orange';
    } else if (val.length > 8 && hasNumber) {
        strengthSpan.textContent = 'Very Strong';
        strengthSpan.style.color = 'lime';
    } else if (val.length > 8) {
        strengthSpan.textContent = 'Strong';
        strengthSpan.style.color = 'lightblue';
    }
});