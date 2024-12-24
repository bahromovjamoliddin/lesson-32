let todos = []
console.log(todos);


const todoTitle = document.getElementById("todo-title")
const todoList = document.querySelector(".todo__list")
const absentText = document.querySelector('.absent-text')


function onCheckTodo(event) {
    const isChecked = event.target.checked; 
    const id = event.target.dataset.id;  

  
    const todo = todos.find(item => item.id == id,{
       isChecked: isChecked
    });



}
onCheckTodo()
  
 function removeTodo(event,element){
const id = event.target.dataset.id
const todo = todos.find(item => item.id == id)
todos = todos.filter(item => item.id !=id)
todo.element.remove()
if (todos.length == 0) {
    absentText.classList.add('active')
}

}
function deleteTodo() {
    const todoList = document.querySelector(".todo__list");
    const absent = document.querySelector(".absent-text"); 
     todoList.innerHTML = "";

   
    if (todoList.children.length === 0) {
        absent.classList.add('active'); 
    }
}
 

function pushTodo(){
    absentText.classList.remove("active")
    const form = {
        isChecked:false,
        title : todoTitle.ariaValueMax,
        id:todos.length
    }
const div = document.createElement('div')
div.className = "todo__item"
form.element = div
div.innerHTML =  `
            <input type="checkbox" onchange="onCheckTodo(event)">
                <p> ${todoTitle.value}</p>
                <div class="todo__item-actions">
                    <button class="btn btn-error" 
                    data-id = "${form.id}" onclick="removeTodo(event)">
                    delete</button>
                </div>
                 
`
todoList.append(div)
todos.push(form)
todoTitle.value = ""
 
    
}

