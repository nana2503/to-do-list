const addBtn = document.querySelector(".btn-outline-secondary")
const taskText = document.querySelector(".text")
const currentTask = document.querySelector("#tasks-list")
const historyTask = document.querySelector("#history-list")
addBtn.addEventListener('click', () => {
    if (taskText.value !== "") {
        currentTask.innerHTML += "<li>" + taskText.value + '<button type="button" class="btn btn-danger" style="margin-left: 50%">X</button>' + "</li>"
        taskText.value = ""
    } else {
        return "";
    }
    const delBtn = document.querySelectorAll(".btn-danger")
    delBtn.forEach((clk)=> {
        clk.addEventListener("click", () => {
             
        })
    })
})