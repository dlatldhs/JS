const t = document.querySelector('div.hello:first-child h1');// class = 'hello' in first h1 tag 
function clickk(){
    if(t.style.color === 'blue'){
        t.style.color='black';
    }
    else{
        t.style.color='blue';
    }
}
function handleMouseEnter(){
    //console.log('mouse is here!');
    t.innerHTML = 'mouse Is Here!';
}

function handleMouseLeave(){
    //console.log('mouse is out!');
    t.innerHTML = 'mouse Is Out!';
}
// querySelectorAll <-- 조건에 만족하는 거 다 가져옴
//t.innerHTML = 'hello js!';
//console.log(t);
//console.dir(t);// object를 보여줌
//t.style.color='blue';// t object in style property in color 대충 이런 느낌 ㅇㅇ 
t.addEventListener('click',clickk);// event listen
t.addEventListener('mouseenter',handleMouseEnter);
t.addEventListener('mouseleave',handleMouseLeave);