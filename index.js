const addBtn = document.querySelector(".btn-outline-secondary")
const taskText = document.querySelector(".text")
const currentTask = document.querySelector("#tasks-list")
const historyTask = document.querySelector("#history-list")

addBtn.addEventListener('click', () => {
   let setLocal = localStorage.setItem("todo",taskText.value) 
    let getLocal = localStorage.getItem("todo")
    console.log(setLocal);
    if (taskText !== "") {
        currentTask.innerHTML += `<li style="margin-bottom: 5px"> ${getLocal} 
                                    <button type="button" class="btn btn-danger" style="margin-left: 10%; padding: 0 10px;">X</button>
                                    </li>`
        taskText.value = ""
    } else {
        return "";
    }
    const delBtn = document.querySelectorAll(".btn-danger")
    delBtn.forEach((clk) => {
        clk.addEventListener("click", () => {
            clk.parentElement.remove();
        })
    })
})