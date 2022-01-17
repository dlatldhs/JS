const loginInput = document.querySelector('#login-form input');
const loginForm = document.querySelector('#login-form');
const greeting = document.querySelector('#greeting');

// this is Strings
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();// 안하게 해줌
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}
/*
localStorage.setItem("username","ZION") add
localStorage.removeItem("username") remove 
*/
function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerHTML = `Hello ${username} Good Day!`;
}
const localStorageUserNamed = localStorage.getItem(USERNAME_KEY);

if(localStorageUserNamed === null){
    // show login form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit);
}
else{
    paintGreetings(localStorageUserNamed);
    // show main form 
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    // greeting.innerHTML = `Hello ${localStorageUserNamed} Good Day!`;
}
