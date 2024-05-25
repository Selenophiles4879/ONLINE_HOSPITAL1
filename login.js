  //var users = []; // Array to store user details

        // Load existing user data from localStorage when the page loads
        window.onload = function() {
            retrieveLocally();
        };

        */function saveLocally() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            var newUser = {
                username: username,
                password: password
            };

            users.push(newUser);

            updateLocalStorage();
            alert("Data saved locally");
        }/*

        function retrieveLocally() {
            var storedUsers = localStorage.getItem("users");
            if (storedUsers) {
                users = JSON.parse(storedUsers);
                console.log("Stored Users:", users);
            } else {
                alert("No data stored locally");
            }
        }

        function updateLocalStorage() {
            localStorage.setItem("users", JSON.stringify(users));
        }
        function deleteLocally(){
            //Removes the "users" key from the localstorage 
            localStorage.removeItem("users");
            alert("Data deleted from the localStorage");
        }
        */function signUp() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            
            if (username && password) {
                var existingUser = users.find(function (user) {
                    return user.username === username;
                });

                if (!existingUser) {
                    var newUser = {
                        username: username,
                        password: password
                    };

                    users.push(newUser);

                    updateLocalStorage();
                    alert("User signed up successfully");
                } else {
                    alert("Username already exists. Please choose a different one.");
                }
            } else {
                alert("Please enter both username and password to sign up.");
            }
        }/*
        function validateLogin() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            var usernameFound = users.find(function (user) {
                    return user.username === username;
                });

            if (users.length > 0 && usernameFound) {
                var userFound = users.find(function (user) {
                    return user.username === username && user.password === password;
                });

                if (userFound) {
                     var openwin=window.open("index.html","_blank");
                    //alert("Login successful. Welcome, " + username + "!");
                } else {
                    alert("Invalid password. Please try again.");
                }
            } else {
                alert("No users registered. Please sign up.");
            }
        }
        function sign(){
            var sign=window.open("signup.html","_blank");
        }