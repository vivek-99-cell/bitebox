function login()

{
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let error = document.getElementById("error");

    //simple condition
    if(email==="admin@1234" && password === "1234"){

        //save login state in localstorage
        localStorage.setItem("user",email);
        localStorage.setItem("userpassword",password);

        //redirect
        window.location.href = "Home.html";
    }
    else{
        error.innerText = "Invalid email or password";
    }
}


function togglePassword() {
    let passworInput = document.getElementById("password");

    if (passworInput.type === "password") {
        passworInput.type = "text";
    } else {
        passworInput.type = "password";
    }
}