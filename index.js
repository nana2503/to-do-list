const addBtn = document.querySelector(".btn-outline-secondary")
const taskText = document.querySelector(".text")
const currentTask = document.querySelector("#tasks-list")
const historyTask = document.querySelector("#history-list")
const reloadBTN = document.querySelector(".reloadBtn")
let todo = 'todoList'
let todoList = []
addBtn.addEventListener('click', () => {
    let newItem = taskText.value
    todoList.push(newItem)
    let getLocal = localStorage.getItem("todo")
    if (newItem !== "") {
        currentTask.innerHTML += `<li style="margin-bottom: 5px"> ${newItem} 
                                    <button type="button" class="btn btn-danger" style="margin-left: 10%; padding: 0 10px;">X</button>
                                    </li>`
        taskText.value = ""
    } else {
        return;
    }
    let setLocal = localStorage.setItem("todo", JSON.stringify(todoList))
    const delBtn = document.querySelectorAll(".btn-danger")
    delBtn.forEach((clk) => {
        clk.addEventListener("click", () => {
            clk.parentElement.remove();
        })
    })
})


reloadBTN.addEventListener('click', () => {
    let getLocal = localStorage.getItem("todo")
    let parseJS = JSON.parse(getLocal)
    parseJS.forEach((abc) => {
        currentTask.innerHTML += `<li style="margin-bottom: 5px"> ${abc} 
    <button type="button" class="btn btn-danger" style="margin-left: 10%; padding: 0 10px;">X</button>
    </li>`
    })
    const delBtn = document.querySelectorAll(".btn-danger")
    delBtn.forEach((clk) => {
        clk.addEventListener("click", () => {
            clk.parentElement.remove();
        })
    })
})