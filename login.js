function validate(){

    var text = document.getElementById("text1").value;

    var regx = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9 -]+).([a-z]{2,20})(.[a-z]{2,10}?)$/;

    if(regx.test(text)){
        alert("Your Email Is Of Correct Format");
    }

    else{
        alert("Your Email Is Of Incorrect Format! Please Enter It Again");
    }

    var password = document.getElementById("text2").value;

    var pass = /^([0-9 a-z A-Z]{4,8})$/;

    if(pass.test(password)){
        alert("Your Password Is Of Correct Format");
    }
    
    else{
        alert("Your Password Is Of Incorrect Format! Please Enter It Again");
    }

}