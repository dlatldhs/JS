const toDoForm = document.querySelector('#todo-form');// todolist input form
const toDoListForm = document.querySelector('ul#todo-list-form');// ul form
const toDoInput = toDoForm.querySelector('input');

const TODOS_KEY_NAME = "ToDos"// localStorage에 쓰일 key

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY_NAME, JSON.stringify(toDos));
}

function deleteToDoList(event){
    const li = event.target.parentElement;// event target parentElement -> X 누른 li를 반환해줌
    li.remove();// 세상에서 지워버림
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(realToDoList){
    const tdl = document.createElement('li');
    tdl.id = realToDoList.id;
    
    const txtSpan = document.createElement('span');
    txtSpan.innerHTML = realToDoList.text;// 받은 toDoList 넣어주기
    
    const bt = document.createElement('button');
    bt.innerText = '❌';
    bt.addEventListener('click',deleteToDoList);

    tdl.appendChild(txtSpan);// li 안에 span 넣기
    tdl.appendChild(bt);// li 안에 X button 넣기
    
    toDoListForm.appendChild(tdl);// ul 안에 tdl = li 형태라서 ul 안에 li 넣는거임
}

function defaultToDoSubmit(event){// 이 함수는  submit 할 때 기본적으로 웹 브라우저가 새로고침 되는걸 없애줌
    event.preventDefault();
    //console.log(toDoInput.value);
    const realToDoList = toDoInput.value;
    //console.log(realToDoList,toDoInput.value);
    toDoInput.value = '';
    const realToDoTimeList = {
        text : realToDoList,
        id : Date.now(),
    };
    toDos.push(realToDoTimeList);
    paintToDo(realToDoTimeList);
    saveToDos();
}

// submit 이라는 이벤트가 되면 defaultToDoSubmit 이라는 함수를 실행시킴
toDoForm.addEventListener('submit',defaultToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY_NAME);

if(savedToDos !== null){// localStorage에 값이 있다면
    const parsedToDos = JSON.parse(savedToDos);// 이걸로 object 로 바꿔줌
    toDos = parsedToDos;// localStorage에 있는걸 넣어줌(복원해서)
    parsedToDos.forEach(paintToDo);
}