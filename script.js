let Add = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let error = document.getElementById("errorMsg");
let count =  document.getElementById("remainingCount")
let counter = 0




Add.addEventListener("click", function () {
    if (taskInput.value.trim() === "") {
        error.textContent = "Please type a task first";
    } 
    else {
        error.textContent = "";

        counter +=1
        count.textContent = counter

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

        btn.addEventListener("click", function () {
            li.classList.toggle("done");

            const isDone = li.classList.contains("done");
            if (isDone) {
                counter -= 1;
            } else {
                counter += 1;
            }

            count.textContent = counter;
        });
            
        deleteBtn.addEventListener ("click", function (){
            const isDone = li.classList.contains("done");
            if (isDone === false) {
                counter -=1
                count.textContent = counter
            }
            li.remove();
        })
    }

    taskInput.value = "";
});