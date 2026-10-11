let count = 0;

const counterElement = document.getElementById("Counter");

const btnAdd1 = document.getElementById("Add +1");
const btnAdd2 = document.getElementById("Add +2");
const btnAdd3 = document.getElementById("Add +3");
const btnRemove1 = document.getElementById("Remove 1");
const btnReset = document.getElementById("Reset");

function updateCounter() {
    counterElement.textContent = count;
}

btnAdd1.addEventListener("click", () => {
    count += 1;
    updateCounter();
});

btnAdd2.addEventListener("click", () => {
    count += 2;
    updateCounter();
});

btnAdd3.addEventListener("click", () => {
    count += 3;
    updateCounter();
});

btnRemove1.addEventListener("click", () => {
    if (count > 0) {
        count -= 1;
        updateCounter();
    }
});

btnReset.addEventListener("click", () => {
    count = 0;
    updateCounter();
});