const h1 = document.querySelector('div.hello:first-child h1');// class = 'hello' in first h1 tag 

const clickClassName = "active";
function handleTitleClick(){
    //if(h1.classList.contains(clickClassName)){
        //h1.classList.remove(clickClassName);
    h1.classList.toggle('active');// h1에 active class가 있는지 확인해서 있음 제거 없음 넣음 
    //}
    //else{
        
        //h1.classList.add(clickClassName);// className 말고 classList 로 하게 되면 html 에 class가 변경안되고 추가됨
    //}
}

h1.addEventListener("click",handleTitleClick);