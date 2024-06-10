document.getElementById('logoutLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Perform the logout action
    // This could include clearing cookies, localStorage, or calling a server-side logout endpoint

    // Example: Clearing localStorage (you might want to customize this based on your needs)
    localStorage.clear();

    // Redirect to the browser's home page
    window.location.href = 'about:home';
});
