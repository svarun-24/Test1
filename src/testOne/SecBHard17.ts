// multi-user login

let users2=[
    {username: "admin", password: "1234"},
    {username: "trainer", password: "abcd"}
];

function login(users2:any,username: string, password: string): string
{
    if(username === users2.username && password === users2.password || username === users2.username && password === users2.password)
    {
        return "Login Successful";
    }
    else
    {
        return "Invalid Credentials";
    }
}

console.log(login(users2,"trainer", "abcd"));