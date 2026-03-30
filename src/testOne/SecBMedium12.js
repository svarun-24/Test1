// Email Validation
function isValidEmail(email) {
    var specialcharacter = "@.";
    if (email.includes("@.")) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isValidEmail("xyz@gmail.com"));
