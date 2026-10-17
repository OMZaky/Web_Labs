const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskTemplate = document.getElementById("task-template");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const task = input.value.trim();
    if (task === "") return;

    const li = taskTemplate.content.firstElementChild.cloneNode(true);
    const taskText = li.querySelector("span");
    const doneCheckbox = li.querySelector("input");
    const deleteButton = li.querySelector("button");
    taskText.textContent = task;

    doneCheckbox.addEventListener("change", function () {
        taskText.classList.toggle("finished", doneCheckbox.checked);
    });

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    taskList.appendChild(li);

    input.value = "";
    input.focus();
});
