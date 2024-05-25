	var users=[];
	window.onload = function() {
            retrieveLocally();
        };

    function validateName(event){
    	var name=document.getElementById("name").value;
    	var exp=/^[A-Za-z-_ ]+$/;
    	if(!exp.test(name)){
    		document.getElementById("name-error").innerHTML="Must have (A-Z/a-z) or (-) or (_)";
    		event.preventDefault();//Prevents form submission
    if(name.length>25){
			document.getElementById("name-error").innerHTML+="<br>Must be between 25 characters or less";
			event.preventDefault();
    	}
		else{
			document.getElementById("name-error").innerHTML+="";
		}
	}
	else{
		document.getElementById("name-error").innerHTML="";
	}
}

	function validateUsername(event){
		var username =document.getElementById("username").value;
    var exp1=/^[0-9a-zA-Z@#$%&_-]+$/;
    if(!exp1.test(username)){
    	document.getElementById("username-error").innerHTML="Invalid_Username<br>Must have (0-9)/(a-z or A-Z)/(@,#,$,&,_,-)";
    	event.preventDefault();
    }
    else{
    	document.getElementById("username-error").innerHTML="";
    }
}
        
        function validatePassword(event){
        	var password=document.getElementById("password").value;
            var exp1=/[0-9]/;
            var exp2=/[a-z]/;
            var exp3=/[A-Z]/;
            var exp4=/[@#$&*]/;
	    if((!exp1.test(password))||(!exp2.test(password))||(!exp3.test(password))||(!exp4.test(password))){
			document.getElementById("password-error").innerHTML="Password must contain: Atleast one Upper-Case letter,Lower-case letter,Number,Special_symbol";
		    event.preventDefault();
		}
		  else if(password.length<8){
				document.getElementById("password-error").innerHTML="Password length must be atleast 8 characters";
				var exp=/^[0-9a-zA-Z@#$&*]+$/;
				event.preventDefault();
			if(!exp.test(password)){
				document.getElementById("password-error").innerHTML+="Allowed characters are:<br>[A-Z] [a-z] [0-9] [@,#,$,&,*]";
				event.preventDefault();
			}
			else{
				document.getElementById("password-error").innerHTML+="";
			}
			}
			else{
				document.getElementById("password-error").innerHTML="";
			}
		}
			function signUp() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var name=document.getElementById("name").value;
            var email=document.getElementById("email").value;
            
            if (username && password) {
                var existingUser = users.find(function (user) {
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
                    var loginpage=window.open("index.html","","_replace");
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
                alert("No data stored locally");
            }
        }
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
                     var openwin=window.open("Online_Hospital.html","_blank");
                    //alert("Login successful. Welcome, " + username + "!");
                } else {
                    alert("Invalid password. Please try again.");
                }
            } else {
                alert("No users registered. Please sign up.");
            }
        }
        function sign(){
            var sign=window.location.href="signup.html";
        }
        function deleteLocally(){
        	localStorage.removeItem("users");
        }
        function loginpage(){
            var indexpage=window.location.href="index.html";
        }