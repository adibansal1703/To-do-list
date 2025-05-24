// Jay Mata di
function addTask() {
    let inputBox = document.getElementById("needs")
    let task = inputBox.value
    // new variable task_storage
    let task_storage = JSON.parse(localStorage.getItem("tasks")) || [] // key name tasks // parse use kia to array bna
    task_storage.push({ "tasks": task, "completed": false })
    localStorage.setItem("tasks", JSON.stringify(task_storage))
    let ul = document.getElementById("taskShow")
    let li = document.createElement("li")
    li.innerHTML = task
    ul.appendChild(li)
    inputBox.value = ""
}

function showTask() {
    let ul = document.getElementById("taskShow")
    ul.innerHTML = ""

    let task_storage = JSON.parse(localStorage.getItem("tasks")) || []
    task_storage.forEach(task => {
        let li = document.createElement("li")
        li.innerHTML = task.tasks
        ul.appendChild(li)
    })
    completedTask()
}
window.onload = showTask
function showDoneTask() {
    let ul = document.getElementById("taskShow")
    ul.innerHTML = ""
    let allTask = JSON.parse(localStorage.getItem("tasks")) || []
    let doneTask = allTask.filter(task => task.completed)
    doneTask.forEach(task => {
        let li = document.createElement("li")
        li.innerHTML = task.tasks
        ul.appendChild(li)
    })
}
function showUnDoneTask() {
    let ul = document.getElementById("taskShow")
    ul.innerHTML = ""
    let allTask = JSON.parse(localStorage.getItem("tasks")) || []
    let undoneTask = allTask.filter(task => task.completed == false)
    undoneTask.forEach(task => {
        let li = document.createElement("li")
        li.innerHTML = task.tasks
        ul.appendChild(li)
    })
}

function completedTask() {
    let lists = document.getElementsByTagName("li")
    let task_storage = JSON.parse(localStorage.getItem("tasks")) || []

    Array.from(lists).forEach((list, index) => {
        if (task_storage[index].completed) {
            list.classList.add("completed")
        }

        list.addEventListener("click", function () {
            list.classList.toggle("completed")
            task_storage[index].completed = list.classList.contains("completed")
            localStorage.setItem("tasks", JSON.stringify(task_storage))
        })
    })
}

function clearCompleted() {
    let task_storage = JSON.parse(localStorage.getItem("tasks")) || []
    let uncompletedTasks = task_storage.filter(task => !task.completed)
    localStorage.setItem("tasks", JSON.stringify(uncompletedTasks))

}
