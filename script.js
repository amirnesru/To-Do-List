let Add = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let error = document.getElementById("errorMsg");


Add.addEventListener("click", function () {
    if (taskInput.value.trim() === "") {
        error.textContent = "Please type a task first";
    } 
    else {
        error.textContent = "";

        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = taskInput.value;
        span.classList.add("task-text");

        let btn = document.createElement("button");
        btn.textContent = "Done";
        btn.classList.add("done-btn");

        let deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.classList.add("delete-btn");

        li.classList.add("task-item");

        li.appendChild(span);
        li.appendChild(btn);
        li.appendChild(deleteBtn)

        taskList.appendChild(li);

        btn.addEventListener ("click", function() {
            li.classList.toggle("done");
        })

        deleteBtn.addEventListener ("click", function (){
            li.remove();
            
        })
    }

    taskInput.value = "";
});