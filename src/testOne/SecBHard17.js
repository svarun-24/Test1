// multi-user login
var users3 = [
    { username: "admin", password: "1234" },
    { username: "trainer", password: "abcd" }
];
function login1(users2, username, password) {
    if (username === users2.username && password === users2.password || username === users2.username && password === users2.password) {
        return "Login Successful";
    }
    else {
        return "Invalid Credentials";
    }
}
console.log(login1(users2, "trainer", "abcd"));
