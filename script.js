const input = document.querySelector("#inputField");
const addBtn = document.querySelector("#addBtn");
const toDoContainer = document.querySelector("#toDoContainer");
const taskDone = document.querySelector("#task-done");
const wrongMessageText = document.querySelector("#wrongMessageText");
const array = [];

addBtn.addEventListener("click", function () {
  if (input.value === "") {
    wrongMessageText.innerText = "You must enter a task!";
    wrongMessageText.classList.add("wrongTextError");
    task.removeChild(checkBtn, trashBtn);
  } else if (input.value != "") {
    wrongMessageText.innerText = "";
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
  taskObject.status = "Not Completed";
  array.push(taskObject);

  checkBtn.addEventListener("click", function () {
    if (checkBtn.innerText === "Not Completed") {
      checkBtn.removeEventListener("click");
    } else {
      textlabel.style.textDecoration = "line-through";
      textlabel.style.color = "green";
      taskDone.innerHTML++;
      checkBtn.innerText = "Not Completed";
      taskObject.status = "Completed";
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
    }
  });

  trashBtn.addEventListener("click", function () {
    if (checkBtn.innerText === "Not Completed") {
      taskDone.innerHTML--;
    }
    toDoContainer.removeChild(task);
    array.pop(taskObject);
  });
});
