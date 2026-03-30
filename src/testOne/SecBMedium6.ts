// Palindrome check

function isPalindrome(str: string ): boolean
{
    let org_str = str;
    let text = "";

    for(let i = str.length-1;i>=0;i--)
    {
        text+=str[i];
    }

    if(org_str === text)
    {
        return true;
    }
    return false;
}

console.log(isPalindrome("madam"));