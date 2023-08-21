const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  console.log(taskText);
  console.log("Task Added");

  if (taskText === "") {
    const span = document.getElementById("error");
    span.textContent = "Task cannot be empty";
  }

  const li = document.createElement("li");
  li.innerHTML = `
  ${taskText}
  <button class="editButton">Edit</button>
  <button class="deleteButton">Delete</button>
`;

  //   console.log(li);

  taskList.appendChild(li);
  taskInput.value = "";

  const editButton = li.querySelector(".editButton");
  const deleteButton = li.querySelector(".deleteButton");

  editButton.addEventListener("click", () => {
    const newText = prompt("Enter new task", taskText);
    console.log(newText);
    if (newText !== null) {
      li.firstChild.textContent = newText;
    }
  });

  deleteButton.addEventListener("click", () => {
    taskList.removeChild(li);
  });
}
