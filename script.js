document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    const welcomeMessage = document.getElementById('welcome-message');
    const signOutButton = document.getElementById('sign-out-btn');
    const addVideoButton = document.getElementById('add-video-btn');
    const videoFileInput = document.getElementById('video-file');
    const confirmAddButton = document.getElementById('confirm-add-btn');
    const exitAddButton = document.getElementById('exit-add-btn');
    const modalMessage = document.getElementById('modal-message');

    // Display welcome message if user is logged in
    if (username) {
        welcomeMessage.textContent = `Welcome back, ${username}!`;
    } else {
        welcomeMessage.textContent = 'Welcome to CoolKidZ!';
    }

    // Sign out function
    signOutButton.addEventListener('click', function() {
        localStorage.removeItem('username'); // Clear the username from local storage
        window.location.href = 'https://wafflenugget.github.io/CoolKidZ-Homepage/'; // Redirect to CoolKidZ homepage
    });

    // Add video functionality
    addVideoButton.addEventListener('click', function() {
        document.getElementById('add-video-modal').style.display = 'block'; // Show the modal
    });

    confirmAddButton.addEventListener('click', function() {
        if (videoFileInput.files.length === 0) {
            modalMessage.textContent = 'Invalid choice! Please select a video file or exit.';
            return;
        }
        // Add logic to handle the video upload (this part may vary depending on your implementation)
        modalMessage.textContent = 'Video added successfully!';
    });

    exitAddButton.addEventListener('click', function() {
        document.getElementById('add-video-modal').style.display = 'none'; // Close the modal
    });
});
