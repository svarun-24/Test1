// Email Validation

function isValidEmail(email: string): boolean
{
    let specialcharacter = "@.";

    if(email === "@.")
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(isValidEmail("xyz@gmail.com"));