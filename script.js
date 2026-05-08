function addAssignment() {

  const assignmentInput =
    document.getElementById("assignmentInput");

  const dueDateInput =
    document.getElementById("dueDateInput");

  const priorityInput =
    document.getElementById("priorityInput");

  const assignmentList =
    document.getElementById("assignmentList");

  if (assignmentInput.value === "") {
    alert("Please enter an assignment.");
    return;
  }

  const assignment =
    document.createElement("div");

  assignment.classList.add(
    "assignment",
    priorityInput.value
  );

  assignment.innerHTML = `
  
    <div>
      <strong>${assignmentInput.value}</strong>
      <br>
      Due: ${dueDateInput.value || "No due date"}
    </div>

    <div class="assignment-buttons">

      <button onclick="completeAssignment(this)">
        Complete
      </button>

      <button onclick="deleteAssignment(this)">
        Delete
      </button>

    </div>

  `;

  assignmentList.appendChild(assignment);

  assignmentInput.value = "";
  dueDateInput.value = "";
}

function deleteAssignment(button) {
  button.parentElement.parentElement.remove();
}

function completeAssignment(button) {
  button.parentElement.parentElement.classList.toggle("completed");
}