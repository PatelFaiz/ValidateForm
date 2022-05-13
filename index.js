function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName("form-error")[0].innerHTML = error;
}

function clearErrors(){
    errors = document.getElementsByClassName("form-error");
    for(let item of errors){
        item.innerHTML = "";
    }
}

function validateForm(){
    var returnval = true;
    clearErrors();

    var name = document.forms['myform']["fname"].value;

    if(name.length<4){
        seterror("dname", "*Length of name is too short.");
        returnval = false;
    }
    if(name == "faiz" || name == "huda"){
        seterror("dname", "*Length of person is too short.");
        returnval = false;
    }

    var email = document.forms['myform']["femail"].value;

    if(email.length>30){
        seterror("demail", "*Length of email is too long.");
        returnval = false;
    }


    var mobile = document.forms['myform']["fmobile"].value;

    if(mobile.length!=10){
        seterror("dmobile", "*Enter valid phone number without country code.");
        returnval = false;
    }

    var password = document.forms["myform"]["fmobile"].value;
    if(password.length < 6){
        seterror("dpassword", "*Password should be atleast 8 character long.");
        returnval = false;
    }    


    console.log(name);
    return returnval;
}