const assignmentList = document.getElementById("assignmentList");

function addAssignment() {

  const assignmentInput =
    document.getElementById("assignmentInput");

  const dueDateInput =
    document.getElementById("dueDateInput");

  const priorityInput =
    document.getElementById("priorityInput");

  if (assignmentInput.value === "") {
    alert("Please enter an assignment.");
    return;
  }

  const assignmentCard =
    document.createElement("div");

  assignmentCard.classList.add(
    "assignment",
    priorityInput.value
  );

  assignmentCard.innerHTML = `
  
    <div>
      <h3>${assignmentInput.value}</h3>

      <p>
        Due: ${dueDateInput.value || "No due date"}
      </p>

      <p>
        Priority: ${priorityInput.value}
      </p>
    </div>

    <div class="assignment-buttons">

      <button
        class="complete-btn"
        onclick="toggleComplete(this)"
      >
        Complete
      </button>

      <button
        class="delete-btn"
        onclick="deleteAssignment(this)"
      >
        Delete
      </button>

    </div>

  `;

  assignmentList.appendChild(assignmentCard);

  assignmentInput.value = "";
  dueDateInput.value = "";
}

function deleteAssignment(button) {
  button.parentElement.parentElement.remove();
}

function toggleComplete(button) {
  button.parentElement.parentElement.classList.toggle("completed");
}

document
  .getElementById("darkModeBtn")
  .addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});