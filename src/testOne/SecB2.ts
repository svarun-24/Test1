// Reverse a String
function ReverseString(text: string): string
{
    let str = "";
    for(let i=text.length-1; i>=0; i--)
    {
        str+=text[i];
    }
    return str;
}

console.log(ReverseString("playwright"));