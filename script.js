function addAssignment() {
  const input = document.getElementById("assignmentInput");
  const list = document.getElementById("assignmentList");

  if (input.value === "") {
    alert("Please enter an assignment.");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    ${input.value}
    <button onclick="this.parentElement.remove()">Delete</button>
  `;

  list.appendChild(li);

  input.value = "";
}