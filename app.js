const loginInput = document.querySelector('#login-form input');
const loginForm = document.querySelector('#login-form');
const link = document.querySelector('a');

function onLoginSubmit(event){
    event.preventDefault();
    console.log(event);
    //console.dir(loginInput);
    //console.log('loginInput');
    const userName = loginInput.value;
}

function handleLinkClik(event){
    event.preventDefault();// 기본적으로 하는 동작
    console.log(event);
}

loginForm.addEventListener('submit',onLoginSubmit);
link.addEventListener('click',handleLinkClik);