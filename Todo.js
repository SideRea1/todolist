const addButton = document.querySelector('#push');
const parentList = document.querySelector('#tasks');

const addNewTaskToList = () => {
    console.log(parentList)

    const value = document.querySelector('#newtask input').value
    console.log(value)
    if (value.length === 0) {
        alert("Please Enter a Task")
    } else {
        document.querySelector('#tasks').innerHTML
            += `
        <div class="content" id=${parentList.children.length === 0 ? 0 : Number(parentList.lastChild.id) + 1}>
        <div class="task">
           <span id="taskname">
           ${value}
           </span>
           <button onclick="deleteTaskFromList(this.parentNode.parentNode.id)">
           <i class="fas fa-backspace"></i>
           </button>
         </div>
          </div>`;
        addTask(value)
    }

    document.querySelector("#newtask input").value = "";
}

const deleteTaskFromList = (taskId) => {
   
    for(let i = 0; i < parentList.children.length; i++) {
        console.log(parentList.children[i].id)
        if (Number(parentList.children[i].id) === taskId) {
            removeTask(Number(taskId));
            parentList.children[i].remove();
        }
        }
    }
   
addButton.addEventListener('click', addNewTaskToList)

const init = async () => {
   await getTasks().then((tasks) => {
    tasks.map((item) => {
        document.querySelector('#tasks').innerHTML
            += `
        <div class="content" id=${item.id}>
        <div class="task">
           <span id="taskname">
           ${item.task}
           </span>
           <button onclick="deleteTaskFromList(${item.id})">
           <i class="fas fa-backspace">Delete</i>
           </button>
           </div>
           </div>
        `;
    })
    })
}

init()