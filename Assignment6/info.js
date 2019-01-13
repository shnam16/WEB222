function formValidation() {
    clearErrors();
    if (validatefName() == true &&
        validatelName() == true &&
        validateUsername() == true &&
        validateAge() == true &&
        validatePass() == true ) {
        alert("Registration Success");
        return true;
    } else {
        console.log(validatefName());
        console.log(validatelName());
        console.log(validateUsername());
        console.log(validateAge());
        console.log(validatePass());
        return false;
    }
}


function validatefName() {
    var error = document.querySelector("#fError");
    var elem = document.getElementById("fName");
    var input = elem.value.trim();

    if (input.charAt(0) < "A" || input.charAt(0) > "Z") {
        clearfNameError();
        error.innerHTML += "<p>*FirstName must start with a cap.</p>";
    } else {
        var inputCap = input.toUpperCase();
        var result;
        for (var i = 0; i < input.length; i++) {
            if (inputCap.charAt(i) < "A" || inputCap.charAt(i) > "Z") {
                error.innerHTML += "<p>*FirstName must contain only characters.</p>";
                document.signup.fName.focus();
                result = false;
                break;
            } else {
                clearfNameError();
                result = true;
            }
        }
    }
    return result;
}

function validatelName() {
    var error = document.querySelector("#lError");
    var elem = document.getElementById("lName");
    var input = elem.value.trim();

    if (input.charAt(0) < "A" || input.charAt(0) > "Z") {
        clearlNameError();
        error.innerHTML += "<p>*LastName must start with a cap.</p>";
        document.signup.fName.focus();
        result = false;
    } else {
        var inputCap = input.toUpperCase();
        var result;
        for (var i = 0; i < input.length; i++) {
            if (inputCap.charAt(i) < "A" || inputCap.charAt(i) > "Z") {
                error.innerHTML += "<p>*LastName must contain only characters.</p>";
                document.signup.fName.focus();
                result = false;
                break;
            } else {
                clearlNameError();
                result = true;
            }
        }
    }
    return result;
}

function validateUsername() {
    var error = document.querySelector("#userError");
    var elem = document.getElementById("username");
    var input = elem.value.trim();
    var firstchar = input.charAt(0).toUpperCase();
    var result;

    if (firstchar < "A" || firstchar > "Z") {
        clearuNameError();
        error.innerHTML += "<p>*UserName must start with a character.</p>";
        document.signup.fName.focus();
        result = false
    } else {
        if (input.length < 6) {
            clearuNameError();
            error.innerHTML += "<p>*UserName must have at least 6 characters.</p>";
            document.signup.fName.focus();
            result = false
        } else {
            clearuNameError();
            result = true;
        }
    }
    return result;
}



function validateAge() {
    var error = document.querySelector("#ageError");
    var elem = document.getElementById("Age");
    var input = elem.value.trim();
    var result;

    if (input >= 18 && input <= 60) {
        clearAgeError();
        result = true;
    } else {
        clearAgeError();
        error.innerHTML += "<p>*Age must be between 18 and 60.</p>";
        document.signup.fName.focus();
        result = false;
    }
    return result;
}


function validatePass() {
    var error = document.querySelector("#passwordError");
    var elem = document.getElementById("password");
    var input = elem.value.trim();
    var input1 = document.signup.password.value.trim();
    var firstchar = input.charAt(0).toUpperCase();
    var inputCap = input.toUpperCase();
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
    var result;

    if (firstchar < "A" || firstchar > "Z") {
        clearPassError();
        error.innerHTML += "<p>*Password must start with a character.</p>";
        document.signup.password.focus();
        result = false;
    } else {
        if (input.length != 6) {
            clearPassError();
            error.innerHTML += "<p>*Password must be 6 characters long.</p>";
            document.signup.password.focus();
            result = false;
        } else {
            for (var i = 0; i < input.length; i++) {
                if (!input1.match(pattern)) {
                    clearPassError();
                    error.innerHTML += "<p>*Password must contain at least an uppercase and digit.</p>";
                    document.signup.password.focus();
                    result = false;
                    break;
                } else {
                    clearPassError();
                    result = true;
                }
            }
        }
    }
    return result;
}




function clearErrors() {
    clearfNameError();
    clearlNameError();
    clearuNameError();
    clearPassError();
    clearAgeError();
}

function clearfNameError() {
    document.querySelector("#fError").innerHTML = "";
}

function clearlNameError() {
    document.querySelector("#lError").innerHTML = "";
}

function clearuNameError() {
    document.querySelector("#userError").innerHTML = "";
}

function clearPassError() {
    document.querySelector("#passwordError").innerHTML = "";
}

function clearAgeError() {
    document.querySelector("#ageError").innerHTML = "";
}


