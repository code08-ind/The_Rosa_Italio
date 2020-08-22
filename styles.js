function validate(){

    var text = document.getElementById("Email").value;

    var regx = /^([a-z A-Z 0-9\. -]+)@([a-z A-Z 0-9 -]+).([a-z]{2,20})(.[a-z]{2,10}?)$/;

    if(regx.test(text)){
        alert("Your Email Is Of Correct Format");
    }
    
    else{
        alert("Your Email Is Of Incorrect Format! Please Enter It Again");
    }

    var password = document.getElementById("Password").value;

    var pass = /^([0-9 a-z A-Z]{4,8})$/;

    if(pass.test(password)){
        alert("Your Password Is Of Correct Format");
    }
    
    else{
        alert("Your Password Is Of Incorrect Format! Please Enter It Again");
    }

    var phone = document.getElementById("Phone").value;

    var regxs = /^[6-9]\d{9}$/;

    if(regxs.test(phone)){
        alert("Your Phone Number Is Of Correct Format");
    }

    else{
        alert("Your Phone Number Is Of Incorrect Format! Please Enter It Again");
    }

}