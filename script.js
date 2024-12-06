document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Check if fields are filled
    if (username && password) {
        // Save username to local storage
        localStorage.setItem('coolkidzUsername', username);

        // Display a greeting message
        message.textContent = `Hello ${username}! Transferring you to CoolKidZ...`;
        message.style.color = 'green'; // Green text for a positive message

        // Redirect to CoolKidZ homepage after a short delay
        setTimeout(() => {
            window.location.href = 'https://wafflenugget.github.io/CoolKidZ/';
        }, 2000); // 2-second delay
    } else {
        message.textContent = 'Please fill in all fields.';
        message.style.color = 'red'; // Red text for an error message
    }
});