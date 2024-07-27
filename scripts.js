document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // This should prevent the form from refreshing the page.

    // Proceed with authentication logic
    var email = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // Redirect to another page or perform some other actions
            window.location.href = 'https://www.example.com/dashboard';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Error: ' + errorMessage);
        });
});
