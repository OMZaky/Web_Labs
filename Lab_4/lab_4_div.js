const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskExample = document.getElementById("task-example");
const tasks = [];

function displayTasks() {
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const taskRow = taskExample.cloneNode(true);
        taskRow.removeAttribute("id");
        taskRow.hidden = false;

        const doneCheckbox = taskRow.children[0];
        const taskText = taskRow.children[1];
        const deleteButton = taskRow.children[2];

        taskText.textContent = tasks[i].text;
        doneCheckbox.checked = tasks[i].finished;
        taskText.classList.toggle("finished", tasks[i].finished);

        doneCheckbox.addEventListener("change", function () {
            tasks[i].finished = doneCheckbox.checked;
            taskText.classList.toggle("finished", tasks[i].finished);
        });

        deleteButton.addEventListener("click", function () {
            tasks.splice(i, 1);
            displayTasks();
        });

        taskList.appendChild(taskRow);
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const task = input.value.trim();
    if (task === "") return;

    tasks.push({ text: task, finished: false });
    displayTasks();
    input.value = "";
    input.focus();
});
