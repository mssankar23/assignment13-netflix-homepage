
        document.getElementById('signin-btn').addEventListener('click', function () {
            var myModal = new bootstrap.Modal(document.getElementById('signinModal'), {
                keyboard: false
            });
            myModal.show();
        });

        document.getElementById('signin-form').addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

    
            if (email === "user@example.com" && password === "password") {
                alert("Login successful!");
            
                window.location.href = "dashboard.html"; 
            } else {
                alert("Invalid credentials. Please try again.");
            }
        });