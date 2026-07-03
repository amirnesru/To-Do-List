let Add = document.getElementById("addBtn")
let taskInput = document.getElementById("taskInput")
let taskList = document.getElementById("taskList")

Add.addEventListener("click",function() {
    if (taskInput.value.trim() === ""){
        alert("Please type a task first") ;
    }
    else {
        let li = document.createElement("li") ;
        li.innerHTML = taskInput.value ;
        taskList.appendChild(li) ;
    }
    taskInput.value = "" ;
})


