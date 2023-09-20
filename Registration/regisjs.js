var form = document.getElementById("myForm")
var error = document.getElementById("errorMessage")

function validate(event){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value
    var male = document.getElementById("male").checked
    var female = document.getElementById("female").checked
    var phone = document.getElementById("phone").value
    var check = document.getElementById("check").checked
   
    let err = null
    
    if(!username || !email || !pass || (!male && !female)){
        err = "All fields must be filled!"
    }
    else if(username.length < 5 ||username.length > 30){
        err = "username must be 5 - 30 characters!";
    }
    else if(!alphanum(pass)){
        err = "Password must be alphanumeric"
    }
    else if(!email.endsWith("@gmail.com")){
        err = "Email must end with @gmail.com!";
    }
    else if(phone.length <10 || phone.length > 12){
        err = "Phone number must be 10 - 12 characters"
    }
    else if(!check){
        err = "You must agree to the Terms and Conditions"
    }
    else{
        alert("Register Success")
    }


    if(err)
    {
        error.innerHTML= err
        event.preventDefault();
    }else{
        err = null
    }
}



form.addEventListener("submit",validate)

function alphanum(pass){ //validasi password alphanumeric
    var isAlpha = false;
    var isNum = false;

    for(var  i = 0; i<pass.length;i++){
        if(isNaN(pass[i])){
            isAlpha = true;
        }
        else{
            isNum = true;
        }
        if(isAlpha&& isNum){
            return true;
        }
    }
    return false;
}

