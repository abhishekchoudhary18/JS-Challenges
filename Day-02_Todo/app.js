document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const list = document.getElementById("todo-list");
  const input = document.getElementById("todo-input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = document.createElement("li");
    const deletebutton = document.createElement("button");
    const checkmark = document.createElement("input");
    const tasktext = document.createElement("p");
    checkmark.type = "checkbox";

    checkmark.addEventListener("change", (e) => {
      console.log(e.target.checked);
      const value = e.target.checked;
      if (value) {
        task.style.opacity = 0.5;
        tasktext.style.textDecoration = "line-through";
      } else {
        task.style.opacity = 1;
        tasktext.style.textDecoration = "none";
      }
    });
    deletebutton.textContent = "delete";
    deletebutton.addEventListener("click", () => {
      task.remove();
    });
    tasktext.textContent = input.value;
    task.appendChild(checkmark);
    task.appendChild(tasktext);
    task.appendChild(deletebutton);
    list.appendChild(task);
    input.value = "";
  });
});
