var users = [];
window.onload = function() {
    retrieveLocally();
    document.getElementById("form3").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission by default
        if (validateForm(event)) {
            signUp();
        }
    });
};

function validateName() {
    var name = document.getElementById("name").value;
    var exp = /^[A-Za-z-_ ]+$/;
    var error = "";

    if (!exp.test(name)) {
        error = "Must have (A-Z/a-z) or (-) or (_)";
    }
    if (name.length > 25) {
        error += "<br>Must be between 25 characters or less";
    }

    document.getElementById("name-error").innerHTML = error;
    return error === "";
}

function validateUsername() {
    var username = document.getElementById("username").value;
    var exp1 = /^[0-9a-zA-Z@#$%&_-]+$/;
    var error = "";

    if (!exp1.test(username)) {
        error = "Invalid Username<br>Must have (0-9)/(a-z or A-Z)/(@,#,$,&,_,-)";
    }

    document.getElementById("username-error").innerHTML = error;
    return error === "";
}

function validatePassword() {
    var password = document.getElementById("password").value;
    var exp1 = /[0-9]/;
    var exp2 = /[a-z]/;
    var exp3 = /[A-Z]/;
    var exp4 = /[@#$&*]/;
    var error = "";

    if (!exp1.test(password) || !exp2.test(password) || !exp3.test(password) || !exp4.test(password)) {
        error = "Password must contain: At least one Upper-Case letter, Lower-case letter, Number, Special symbol";
    } else if (password.length < 8) {
        error = "Password length must be at least 8 characters";
    } else if (!/^[0-9a-zA-Z@#$&*]+$/.test(password)) {
        error += "<br>Allowed characters are: [A-Z] [a-z] [0-9] [@,#,$,&,*]";
    }

    document.getElementById("password-error").innerHTML = error;
    return error === "";
}

function validateForm(event) {
    var isNameValid = validateName();
    var isUsernameValid = validateUsername();
    var isPasswordValid = validatePassword();

    return isNameValid && isUsernameValid && isPasswordValid;
}

function signUp() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (username && password) {
        var existingUser = users.find(function(user) {
            return user.username === username;
        });

        if (!existingUser) {
            var newUser = {
                username: username,
                password: password,
                name: name,
                email: email
            };

            users.push(newUser);

            updateLocalStorage();
            alert("User signed up successfully");
            window.location.href = "index.html";
        } else {
            alert("Username already exists. Please choose a different one.");
        }
    } else {
        alert("Please enter both username and password to sign up.");
    }
}

function updateLocalStorage() {
    localStorage.setItem("users", JSON.stringify(users));
}

function retrieveLocally() {
    var storedUsers = localStorage.getItem("users");
    if (storedUsers) {
        users = JSON.parse(storedUsers);
        console.log("Stored Users:", users);
    } else {
        console.log("No data stored locally");
    }
}

function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var usernameFound = users.find(function(user) {
        return user.username === username;
    });

    if (users.length > 0 && usernameFound) {
        var userFound = users.find(function(user) {
            return user.username === username && user.password === password;
        });

        if (userFound) {
            window.open("Online_Hospital.html","_self","_toolbar-yes");
        } else {
            alert("Invalid password. Please try again.");
        }
    } else {
        alert("No users registered. Please sign up.");
    }
}

function sign() {
    window.location.href = "signup.html";
}

function deleteLocally() {
    localStorage.removeItem("users");
}

function loginpage() {
    window.location.href = "index.html";
}
