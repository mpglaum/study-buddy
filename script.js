const assignmentList = document.getElementById("assignmentList");

function addAssignment() {
  const assignmentInput = document.getElementById("assignmentInput");
  const dueDateInput = document.getElementById("dueDateInput");
  const priorityInput = document.getElementById("priorityInput");

  if (assignmentInput.value === "") {
    alert("Please enter an assignment.");
    return;
  }

  const li = document.createElement("li");

  li.classList.add("assignment");
  li.classList.add(priorityInput.value);

  li.innerHTML = `
    <div>
      <strong>${assignmentInput.value}</strong><br>
      Due: ${dueDateInput.value || "No date selected"}<br>
      Priority: ${priorityInput.value}
    </div>

    <div>
      <button onclick="toggleComplete(this)">Complete</button>
      <button onclick="deleteAssignment(this)">Delete</button>
    </div>
  `;

  assignmentList.appendChild(li);

  assignmentInput.value = "";
  dueDateInput.value = "";
}

function deleteAssignment(button) {
  button.parentElement.parentElement.remove();
}

function toggleComplete(button) {
  button.parentElement.parentElement.classList.toggle("completed");
}

document.getElementById("darkModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});