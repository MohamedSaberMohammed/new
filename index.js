document.addEventListener("DOMContentLoaded", function() {
  const addButton = document.getElementById("add_item");
  const inputField = document.getElementById("input");
  const todoList = document.getElementById("to_do_list");

  addButton.addEventListener("click", function() {
    const inputValue = inputField.value;
    if (inputValue.trim() !== "") {
      const newItem = createTodoItem(inputValue);
      todoList.appendChild(newItem);
      inputField.value = "";
    }
  });

  inputField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      const inputValue = inputField.value;
      if (inputValue.trim() !== "") {
        const newItem = createTodoItem(inputValue);
        todoList.appendChild(newItem);
        inputField.value = "";
      }
    }
  });

  function createTodoItem(text) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    const textDiv = document.createElement("div");
    textDiv.textContent = text;
    itemDiv.appendChild(textDiv);

    const dateDiv = document.createElement("div");
    const currentDate = new Date();
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);
    dateDiv.textContent = formattedDate;
    itemDiv.appendChild(dateDiv);

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash-alt");
    deleteIcon.addEventListener("click", function() {
      itemDiv.remove();
    });
    itemDiv.appendChild(deleteIcon);

    return itemDiv;
  }
});
