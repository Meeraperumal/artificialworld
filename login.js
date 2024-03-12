var log=document.getElementById("login");
var reg=document.getElementById("register");
var button=document.getElementById("btn");

function register(){
    log.style.left="-400px";
    reg.style.left="50px";
    button.style.left="110px"
}

function login(){
    log.style.left="50px";
    reg.style.left="450px";
    button.style.left="0"
}

function validateForm(){

    //For name validation
    var nameInput=document.getElementById('username');
    var nameError=document.getElementById('nameErr');
    var nameValue=nameInput.value.trim();

    if(nameValue===""){
        nameError.textContent="Please enter a name.";
        return false;
    }

    var nameRegex=/^[a-zA-z\s]*$/;
    if(!nameRegex.test(nameValue)){
        nameError.textContent="Please enter a valid name";
        return false;
    }
    nameError.textContent="";

    //For password validation
    var passInput=document.getElementById('password');
    var passError=document.getElementById('passErr');
    var passValue=passInput.value.trim();

    if(passValue===""){
        passError.textContent="Please enter a password.";
        return false;
    }

    var passRegex=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(!passRegex.test(passValue)){
        passError.textContent="Please enter a valid password";
        return false;
    }
    passError.textContent="";
    return true;
}

function validateForm1(){

    //For Name validation
    var nameInput=document.getElementById('username1');
    var nameError=document.getElementById('nameErr1');
    var nameValue=nameInput.value.trim();

    if(nameValue===""){
        nameError.textContent="Please enter a name.";
        return false;
    }

    var nameRegex=/^[a-zA-z\s]*$/;
    if(!nameRegex.test(nameValue)){
        nameError.textContent="Please enter a valid name";
        return false;
    }
    nameError.textContent="";

    //For Email validation
    var emailInput=document.getElementById('email');
    var emailError=document.getElementById('emailErr');
    var emailValue=emailInput.value.trim();

    if(emailValue===""){
        emailError.textContent="Please enter a Mail Id";
        return false;
    }

    var emailRegex=/^\S+@\S+\.\S+$/;
    if(!emailRegex.test(emailValue)){
        emailError.textContent="Please enter a valid Mail Id";
        return false;
    }
    emailError.textContent="";

    //For Password validation
    var passInput=document.getElementById('password1');
    var passError=document.getElementById('passErr1');
    var passValue=passInput.value.trim();

    if(passValue===""){
        passError.textContent="Please enter a password.";
        return false;
    }

    var passRegex=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(!passRegex.test(passValue)){
        passError.textContent="Please enter a valid password";
        return false;
    }
    passError.textContent="";
    return true;
}

// document.querySelector("#log").addEventListener("click",()=>{
//     window.location.href="index.html";
// });