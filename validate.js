//js validations
function validate() {
    //request data gathering logic
    let uname = document.getElementById("Username").value;
    let pass = document.getElementById("password").value;
    let regexp

    // form validation logic
    if (uname == "") {
        alert("Boss please enter Username");
        return false;
    }
    if (pass == "") {
        alert("Boss please enter password");
        return false;
    }
    if (pass.length < 8 || pass.length>12) {
        alert("password should be minimum 8 chars");
        return false;
    }
    if (regexp.test(pass))
    {
        alert("password combination of samll,caps letters")
    }
        return true;
}
