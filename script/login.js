const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

/* Validimi i login form dhe register form*/

//Validmi i login Form

function login() {
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var alerti = document.getElementById("myAlert").html;
    if (email == '') {
        alert("please enter email.");
    }
    else if (pwd == '') {
        alert("enter the password");
    }
    else if (!filter.test(email)) {
        alert("Enter valid email id.");
    }
    else if (pwd.length < 6 || pwd.length > 6) {
        alert("Password min and max length is 6.");
    }
    else {
        // swal({
        //     title: "Good job!",
        //     text: "You have successfully logged in",
        //     icon: "success",
        // });
        returnMsgSuccess("Your account is created succesfully");

    }
}


//Validmi i register Form

function register() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email1").value;
    var pwd = document.getElementById("password1").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (name == '') {
        alert("enter name")
    }
    else if (email == '') {
        alert("please enter email.");
    }
    else if (pwd == '') {
        alert("enter the password");
    }
    else if (!filter.test(email)) {
        alert("Enter valid email id.");
    }
    else if (pwd.length < 6 || pwd.length > 6) {
        alert("Password min and max length is 6.");
    }
    else {
        // alert('Your account is created succesfully');
        // window.location = "index.html";
        swal({
            title: "Good job!",
            text: "Your account is created succesfully",
            icon: "success",
        });
        // returnMsgSuccess("Your account is created succesfully");
    }
}

//mesazhi 

function returnMsgSuccess(msg) {
    $("#showMsgSuccess").prop("hidden", false);
    $("#setMsg").text(msg);

    setTimeout(function () {
        $("#showMsg").prop("hidden", true);
        $("#setMsg").text('');
    }, 3000);
}



