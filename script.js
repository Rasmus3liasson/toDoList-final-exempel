const input = document.querySelector("#inputField");
const addBtn = document.querySelector("#addBtn");
const toDoContainer = document.querySelector("#toDoContainer");
const taskDone = document.querySelector("#task-done");
const array = [];

addBtn.addEventListener("click", function () {
  if (input.value === "") {
    alert("Please enter your task");
    task.removeChild(checkBtn, trashBtn);
  }

  let task = document.createElement("li");
  toDoContainer.appendChild(task);

  let textlabel = document.createElement("span");
  textlabel.classList.add("textLabel");
  textlabel.innerText = input.value;

  task.appendChild(textlabel);

  let checkBtn = document.createElement("button");
  checkBtn.classList.add("checkBtn");
  checkBtn.innerText = "Completed";
  task.appendChild(checkBtn);

  let trashBtn = document.createElement("img");
  trashBtn.classList.add("trashBtn");
  trashBtn.src = "trash.png";
  task.appendChild(trashBtn);

  input.value = "";

  const taskObject = {};
  taskObject.todo = textlabel.innerText;

  checkBtn.addEventListener("click", function () {
    if (checkBtn.innerText === "Not Completed") {
      checkBtn.removeEventListener("click");
    } else {
      textlabel.style.textDecoration = "line-through";
      textlabel.style.color = "green";
      taskDone.innerHTML++;
      checkBtn.innerText = "Not Completed";
      array.push(taskObject);
      taskObject.status = "Completed";
      console.log(taskObject);
    }
  });
  textlabel.addEventListener("click", function () {
    if (checkBtn.innerText === "Completed") {
      textlabel.removeEventListener("click");
    } else {
      textlabel.style.textDecoration = "none";
      textlabel.style.color = "black";
      checkBtn.innerText = "Completed";
      taskDone.innerHTML--;
      taskObject.status = "Not Completed";
      console.log(taskObject);
    }
  });

  trashBtn.addEventListener("click", function () {
    toDoContainer.removeChild(task);
    array.pop(taskObject);
  });
});
