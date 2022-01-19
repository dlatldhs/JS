
const toDoForm = document.querySelector('#todo-form');
const toDoListForm = document.querySelector('ul#todo-list-form');
const toDoInput = toDoForm.querySelector('input');
function defaultToDoSubmit(event){// 이 함수는  submit 할 때 기본적으로 웹 브라우저가 새로고침 되는걸 없애줌
    event.preventDefault();
    //console.log(toDoInput.value);
    const realToDoList = toDoInput.value;
    //console.log(realToDoList,toDoInput.value);
    toDoInput.value = '';
    
}

// submit 이라는 이벤트가 되면 defaultToDoSubmit 이라는 함수를 실행시킴
toDoForm.addEventListener('submit',defaultToDoSubmit);