var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event){
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name = 'task-name']").value;
    var taskTypeInput = document.querySelector("select[name ='task-type']").value;

    if(!taskNameInput || !taskTypeInput){
        alert("You need to fill out the task form.");
        return false;
    }

    formE1.reset();

    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    createTaskEl(taskDataObj);
}

var createTaskEl = function(taskDataObj){
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";
    
    //create div to hold task info and add to list item
    var taskInfoE1 = document.createElement("div");
    //give a class name
    taskInfoE1.className = "task-info";
    //add HTML content to div
    taskInfoE1.innerHTML = "<h3 class = 'task-name'>" + taskDataObj.name + "</h3><span class = 'task-type'>" + taskDataObj.type + "</span>";
    
    listItemE1.appendChild(taskInfoE1);
    
    tasksToDoE1.appendChild(listItemE1);
}

formE1.addEventListener("submit", taskFormHandler);