let task=document.getElementById("task");
let liveToastBtn=document.getElementById("liveToastBtn");
let list=document.getElementById("list");


document.addEventListener("DOMContentLoaded",getLocalStorage);

    

function newElement(){
    let li=document.createElement("li");
    let span=document.createElement("span");
    let i=document.createElement("i");
    let liveToast=document.getElementById("liveToast");
    li.setAttribute("id","liliste")
    
    i.setAttribute("class","fas fa-times-circle")
    span.setAttribute("class","close");
    span.setAttribute("onclick","deletee()");
    li.innerHTML=task.value;
    let eror=document.getElementsByClassName("error");
    
    

    
    if(task.value.trim()==""){
        $(eror).toast('show');
        task.value="";
    }
    else{
        $(liveToast).toast('show');
        saveLocalStorage(task.value);
        
        span.append(i);
        li.append(span);
        list.append(li);
        task.value="";
        
    }
    li.addEventListener("click",function(event){
        
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('checked');
          }
    
       
    })
    
}

function deletee(){
    let li=document.getElementById("liliste");
    removeLocalTodos(li);
    li.remove();
}

function saveLocalStorage(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function getLocalStorage(){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(todo => {
        let li=document.createElement("li");
        let span=document.createElement("span");
        let i=document.createElement("i");
        li.setAttribute("id","liliste")
        
        i.setAttribute("class","fas fa-times-circle")
        span.setAttribute("class","close");
        span.setAttribute("onclick","deletee()");
        li.innerHTML=todo;
        span.append(i);
        li.append(span);
        list.append(li);
        task.value="";
    });
}


function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }

    const todoIndex=todo.innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos));
}