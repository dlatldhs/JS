const h1 = document.querySelector('div.hello:first-child h1');// class = 'hello' in first h1 tag 
function clickk(){
    if(h1.style.color === 'blue'){
        h1.style.color='black';
    }
    else{
        h1.style.color='blue';
    }
}
function handleMouseEnter(){
    //console.log('mouse is here!');
    h1.innerHTML = 'mouse Is Here!';
}

function handleMouseLeave(){
    //console.log('mouse is out!');
    h1.innerHTML = 'mouse Is Out!';
}
function handleWindowResize(){
    document.body.style.backgroundColor = 'indigo';
    // .body .head .title 이런 거는 중요해서 되는거임 .div .span 같은거 안됨
}

function handleWindowCopy(){
    alert('complate!');
}

function handleWindowOffline(){
    alert('Wi-Fi is not connected.');
}

function handleWindowOnline(){
    alert('Wi-Fi is connected.');
}
// querySelectorAll <-- 조건에 만족하는 거 다 가져옴
//t.innerHTML = 'hello js!';
//console.log(t);
//console.dir(t);// object를 보여줌
//t.style.color='blue';// t object in style property in color 대충 이런 느낌 ㅇㅇ 
h1.addEventListener('click',clickk);// event listen
h1.addEventListener('mouseenter',handleMouseEnter);
h1.addEventListener('mouseleave',handleMouseLeave);// === t.onmouseleave = handleMouseLeave;

window.addEventListener('resize',handleWindowResize);// 화면 바뀌면
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online',handleWindowOnline);

