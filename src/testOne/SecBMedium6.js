// Palindrome check
function isPalindrome(str) {
    var org_str = str;
    var text = "";
    for (var i = str.length - 1; i >= 0; i--) {
        text += str[i];
    }
    if (org_str === text) {
        return true;
    }
    return false;
}
console.log(isPalindrome("madam"));
