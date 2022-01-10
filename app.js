// const hellos = document.getElementsByClassName('hello');
// console.log(hellos);
const t = document.querySelector('.hello h1:first-child');// class = 'hello' in first h1 tag 
// querySelectorAll <-- 조건에 만족하는 거 다 가져옴
t.innerHTML = 'hello js!';
