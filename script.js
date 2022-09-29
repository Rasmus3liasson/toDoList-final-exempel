const input = document.querySelector("#inputField");
const addBtn = document.querySelector("#addBtn");
const toDoContainer = document.querySelector("#toDoContainer");
const taskDone = document.querySelector("#task-done");
const array = [];

let number = 1;

addBtn.addEventListener("click", function () {
  if (input.value === "") {
    alert("Please enter your task");
    task.removeChild(checkBtn, trashBtn);
  }

  let task = document.createElement("li");
  task.innerHTML = input.value;
  toDoContainer.appendChild(task);
  array.push(input.value);

  let checkBtn = document.createElement("button");
  checkBtn.classList.add("checkBtn");
  checkBtn.innerText = "Completed";
  task.appendChild(checkBtn);

  let trashBtn = document.createElement("img");
  trashBtn.classList.add("trashBtn");
  trashBtn.src = "trash.png";
  task.appendChild(trashBtn);

  input.value = "";

  checkBtn.addEventListener("click", function () {
    if (checkBtn.innerText == "Completed") {
      task.style.textDecoration = "line-through";
      task.style.color = "green";
      taskDone.innerHTML = "";
      taskDone.append(array.length);
      checkBtn.innerText = "Not Completed";
    } else {
      task.style.textDecoration = "none";
      task.style.color = "black";
      checkBtn.innerText = "Completed";
    }
  });
  trashBtn.addEventListener("click", function () {
    toDoContainer.removeChild(task);
    array.pop(task);
    taskDone.replaceWith(array.length);
  });
});
