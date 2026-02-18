const form = document.getElementById("todo-form");
const taskList = document.getElementById("task-list");

const filterDoneBtn = document.getElementById("filter-done");
const filterActiveBtn = document.getElementById("filter-active");

let currentFilter = "all"; // all | done | active

function applyFilter() {
  const items = taskList.querySelectorAll("li");

  items.forEach((li) => {
    const isDone = li.classList.contains("done");

    if (currentFilter === "done") {
      li.style.display = isDone ? "" : "none";
    } else if (currentFilter === "active") {
      li.style.display = !isDone ? "" : "none";
    } else {
      li.style.display = "";
    }
  });
}

function setActiveButton() {
  filterDoneBtn.classList.toggle("active", currentFilter === "done");
  filterActiveBtn.classList.toggle("active", currentFilter === "active");
}

filterDoneBtn.addEventListener("click", () => {
  currentFilter = currentFilter === "done" ? "all" : "done";
  setActiveButton();
  applyFilter();
});

filterActiveBtn.addEventListener("click", () => {
  currentFilter = currentFilter === "active" ? "all" : "active";
  setActiveButton();
  applyFilter();
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputElement = document.getElementById("todo-input");
  const inputValue = inputElement.value.trim();
  if (inputValue) {
    addListItem(inputValue);
    inputElement.value = "";
    applyFilter(); // NEW: фильтр бар болса, жаңа item-ге де қолдану
  }
});

function addListItem(itemText) {
  const li = document.createElement("li");

  li.innerHTML = `
    <input type="checkbox" class="task-checkbox">
    <span class="task-text">${itemText}</span>
    <button type="button" class="delete-btn" aria-label="Delete">
      <img src="images/logo.png" alt="">
    </button>
  `;

  taskList.appendChild(li);
}

// ONE listener for all
taskList.addEventListener("change", function (e) {
  if (e.target.classList.contains("task-checkbox")) {
    const li = e.target.closest("li");
    li.classList.toggle("done");
    applyFilter(); // NEW: done өзгерсе, фильтрді қайта қолдан
  }
});

taskList.addEventListener("click", function (e) {
  if (e.target.closest(".delete-btn")) {
    const li = e.target.closest("li");
    li.remove();
  }
});
