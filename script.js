function addTask() {
  const input = document.getElementById("taskInput");
  const dateInput = document.getElementById("taskDate");

  const taskText = input.value;
  const taskDate = dateInput.value;

  if (taskText === "") return;

  const li = document.createElement("li");

  const leftDiv = document.createElement("div");

  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;

  const dateSpan = document.createElement("small");
  dateSpan.textContent = taskDate ? "Due: " + taskDate : "";

  leftDiv.appendChild(textSpan);
  leftDiv.appendChild(dateSpan);

  li.appendChild(leftDiv);

  li.onclick = function () {
    li.classList.toggle("done");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.onclick = function (e) {
    e.stopPropagation();
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
  dateInput.value = "";
}
