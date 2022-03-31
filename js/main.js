const elForm = document.querySelector(".form");
const elFormInput = document.querySelector(".form__input");
const elList = document.querySelector(".todo-list");
const complatedList = document.querySelector(".todo-complate");
const btn1 = document.querySelector(".strong");
const btn2 = document.querySelector(".strong1");
const btn3 = document.querySelector(".strong2");

const todos = [];
const complates = [];

elList.addEventListener("click" , evt => {

  if(evt.target.matches(".todo-list__btn")){

    const btnId = evt.target.dataset.todoId;

    const findIndexArr = todos.findIndex(todo => todo.id == btnId);

    btn1.textContent = todos.indexOf + 1;

    todos.splice(findIndexArr, 1);

    renderTodo(todos , elList);
    
  }else if(evt.target.matches(".todo-list__checkbox")){

    const inputCheckedId = evt.target.dataset.todoId;

    const findElement = todos.find(todo => todo.id == inputCheckedId);

    findElement.isComplated = !findElement.isComplated;

    renderTodo(todos , elList);
  }
})

complatedList.addEventListener("click" , evt => {

  if(evt.target.matches(".todo-list__btn")){

    const btnId = evt.target.dataset.todoId;

    const findIndexArr = todos.findIndex(todo => todo.id == btnId);

    const complate = todos.splice(findIndexArr, 1);

    renderTodo(complates , complatedList);
    
  }else if(evt.target.matches(".todo-list__checkbox")){

    const inputCheckedId = evt.target.dataset.todoId;

    const findElement = todos.find(todo => todo.id == inputCheckedId);

    !findElement.isComplated;

    renderTodo(complates , complatedList);
  }
})


function renderTodo(arr, element) {

  element.innerHTML = "";

  arr.forEach(todo => {
    const newItem = document.createElement("li");
    const newInput = document.createElement("input");
    const newBtn = document.createElement("button");



    newItem.textContent = todo.id + ". " + todo.title;
    newItem.classList.add("todo-list__item")
    newInput.type = "checkbox";
    newInput.classList.toggle("todo-list__checkbox");
    newBtn.textContent = "Delete";
    newBtn.classList.add("todo-list__btn");
    newBtn.dataset.todoId = todo.id;
    newInput.dataset.todoId = todo.id;
    newInput.classList.add("todo-list__checkbox");
    btn1.textContent = todos.length

    if(todo.isComplated){
      newInput.checked = true;
      newItem.style.textDecoration = "line-through";
    }

    newItem.appendChild(newInput);
    newItem.appendChild(newBtn);

    element.appendChild(newItem);
  });

}



elForm.addEventListener("submit", evt =>{

  evt.preventDefault();

  const elInputValue = elFormInput.value.trim();


  const todo = {
    id: todos.length > 0 ? todos[todos.length -1].id + 1 : 1,
    title: elInputValue,
    isComplated: false,
  };

  todos.push(todo);



  renderTodo(todos , elList);

  elFormInput.value = "";

})  