const h1 = document.querySelector('div.hello:first-child h1');// class = 'hello' in first h1 tag 

const classNames = "active";
function handleTitleClick(){
    if(h1.className === classNames){
        h1.className = "";
    }
    else{
        h1.className = classNames;
    }
}

h1.addEventListener("click",handleTitleClick);