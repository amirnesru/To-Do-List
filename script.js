let Add = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let error = document.getElementById("errorMsg");
let count =  document.getElementById("remainingCount")
let remaining = document.getElementById("counter")
let counter = 0
let arr = []
let clear = document.getElementById("clearBtn")
let doneCounter = document.createElement("p")
doneCounter.classList = "doneCounter"
doneCounter.textContent = "0 of 0 tasks completed";
remaining.insertAdjacentElement("afterend", doneCounter);


function updateDoneCounter() {
    let done = arr.filter(task => task.done).length;

    // always show element
    doneCounter.classList.add("visible");

    if (arr.length === 0) {
        doneCounter.textContent = "0 of 0 tasks completed";
        doneCounter.classList.remove("all-done-msg");b3
        return;
    }

    if (done === arr.length) {
        doneCounter.textContent = "🎉 All tasks done!";
        doneCounter.classList.add("all-done-msg");
    } else {
        doneCounter.textContent = `${done} of ${arr.length} tasks completed`;
        doneCounter.classList.remove("all-done-msg");
    }
}



Add.addEventListener("click", function () {
    if (taskInput.value.trim() === "") {
        error.textContent = "Please type a task first";
    } 
    else {
        let obj = {}
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
        if ( arr.some(arr => arr.text === taskInput.value)){
            error.textContent = "This task already exists";
            return ;
        }
        else {
            taskList.appendChild(li);
            counter +=1
            count.textContent = counter
            obj = {
                text:taskInput.value ,
                done:false
            }
            arr.push(obj)
            updateDoneCounter()
        }    
        btn.addEventListener("click", function () {
            li.classList.toggle("done");

            const isDone = li.classList.contains("done");
            if (isDone) {
                counter -= 1;
            } else {
                counter += 1;
            }
            obj.done = isDone
            updateDoneCounter()

            count.textContent = counter;
        });
      
            
        deleteBtn.addEventListener ("click", function (){
            const isDone = li.classList.contains("done");
            if (isDone === false) {
                counter -=1
                count.textContent = counter
            }
            arr = arr.filter(item => item !== obj);
            updateDoneCounter()
            li.remove();
        })

        
    }

    taskInput.value = "";
});

clear.addEventListener ("click", function(){
    taskList.replaceChildren()
    arr = []
    counter = 0
    count.textContent = counter
    updateDoneCounter()



 })