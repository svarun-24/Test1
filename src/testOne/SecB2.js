// Reverse a String
function ReverseString(text) {
    var str = "";
    for (var i = text.length - 1; i >= 0; i--) {
        str += text[i];
    }
    return str;
}
console.log(ReverseString("playwright"));
