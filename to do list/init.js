const addInput = document.querySelector("#addTask");
const subBtn = document.querySelector("#submit");
const submitedTasks = document.querySelectorAll(".ongoing-task-box");
const editBtn = document.querySelector("#edit");
let currentEditElement = null;
const addSectionInput = document.querySelector("#addSectionInput");
const addSectionBtn = document.querySelector("#addSectionSub");
const containerWrapper = document.querySelector(".body-inner");

subBtn.addEventListener("click", function () {
  if (addInput.value === "") {
    alert("can't submit an empty input");
  } else {
    let li = document.createElement("li");
    li.setAttribute("draggable", "true");
    li.classList.add("task-container");
    li.innerHTML = `<div class="task-description-parent" draggable = "true">
    <input type="checkbox" class = "check-box" />
    <p class="task-description">${addInput.value}</p>
  </div>

  <div class="button-wrapper">
    <button type="submit" class="delete-btn">delete</button>
    <button type="submit" class="edit-btn">edit</button>
  </div>`;
    submitedTasks[0].appendChild(li);
    addInput.value = "";
    const tasks = document.querySelectorAll(".task-container");
    tasks.forEach(function (task) {
      giveDraggingClass(task);
    });
  }
});

submitedTasks[0].addEventListener("click", function (e) {
  if (e.target.matches(".check-box")) {
    let taskText = e.target.parentElement.children[1];
    taskText.classList.toggle("checked");
  }
  if (e.target.matches(".delete-btn")) {
    let taskElement = e.target.parentElement.parentElement;
    taskElement.remove();
  }
  if (e.target.matches(".edit-btn")) {
    let editElement =
      e.target.parentElement.parentElement.children[0].children[1];
    currentEditElement = editElement;
    addInput.value = editElement.innerHTML;
    editBtn.classList.add("active");
    subBtn.classList.remove("active");
  }
});

editBtn.addEventListener("click", function () {
  if (currentEditElement) {
    currentEditElement.innerHTML = addInput.value;
    addInput.value = "";
    editBtn.classList.remove("active");
    subBtn.classList.add("active");
    currentEditElement = null;
  }
});

submitedTasks.forEach(function (submitedTask) {
  submitedTask.addEventListener("dragover", function (e) {
    e.preventDefault();
    const afterElement = getDragAfterElement(submitedTask, e.clientY);
    const draggable = document.querySelector(".dragging");
    if (afterElement == null) {
      submitedTask.appendChild(draggable);
    } else {
      submitedTask.insertBefore(draggable, afterElement);
    }
  });
});

addSectionBtn.addEventListener("click", function () {
  let container = document.createElement("div");
  container.classList.add("container", "type-2");
  container.innerHTML = `<h2>${addSectionInput.value}</h2>
  <div class="edit-wrapper">
  <input type="text" class="edit-title-input">
  <button class="edit-title-container-btn">edit title</button>
</div>
  <ul class="ongoing-task-box"></ul>
  <div class="delete-btn">
    <button class="delete">delete this container</button>
    <button class="edit-container">edit the title</button>
  </div>`;
  containerWrapper.appendChild(container);
  addSectionInput.value = "";

  const newSubmitedTasks = container.querySelector(".ongoing-task-box");
  newSubmitedTasks.addEventListener("dragover", function (e) {
    e.preventDefault();
    const afterElement = getDragAfterElement(newSubmitedTasks, e.clientY);
    const draggable = document.querySelector(".dragging");
    if (afterElement == null) {
      newSubmitedTasks.appendChild(draggable);
    } else {
      newSubmitedTasks.insertBefore(draggable, afterElement);
    }
  });

  const deleteBtn = container.querySelector(".delete");
  deleteBtn.addEventListener("click", function (e) {
    e.currentTarget.parentElement.parentElement.remove();
  });

  const editContainerBtn = container.querySelector(".edit-container");
  const containerTitle = container.querySelector("h2");
  editContainerBtn.addEventListener("click", function () {
    container.querySelector(".edit-wrapper").classList.add("active");
    let titleInput = container.querySelector(".edit-title-input");
    let editTitle = container.querySelector(".edit-title-container-btn");
    titleInput.value = containerTitle.innerHTML;
    editTitle.addEventListener("click", function () {
      containerTitle.innerHTML = titleInput.value;
      titleInput.value = "";
      container.querySelector(".edit-wrapper").classList.remove("active");
    });
  });
});

function giveDraggingClass(task) {
  task.addEventListener("dragstart", function () {
    task.classList.add("dragging");
  });
  task.addEventListener("dragend", function () {
    task.classList.remove("dragging");
  });
}

function getDragAfterElement(submitedTask, y) {
  const draggableElements = [
    ...submitedTask.querySelectorAll(".task-container:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

// const addInput = document.querySelector("#addTask");
// const subBtn = document.querySelector("#submit");
// const submitedTasks = document.querySelector(".ongoing-task-box");
// const editBtn = document.querySelector("#edit");
// let currentEditElement = null;

// // Function to save the task list in local storage
// function saveTaskList() {
//   const taskList = [];
//   const checkboxes = document.querySelectorAll(".check-box");

//   checkboxes.forEach(function(checkbox) {
//     const taskItem = {
//       description: checkbox.nextElementSibling.textContent,
//       checked: checkbox.checked
//     };
//     taskList.push(taskItem);
//   });

//   localStorage.setItem('taskList', JSON.stringify(taskList));
// }

// // Function to retrieve the task list from local storage
// function loadTaskList() {
//   const taskList = JSON.parse(localStorage.getItem('taskList'));

//   if (taskList) {
//     taskList.forEach(function(taskItem) {
//       let li = document.createElement("li");
//       li.classList.add("task-container");
//       li.innerHTML = `<div class="task-description-parent">
//         <input type="checkbox" class="check-box" ${taskItem.checked ? 'checked' : ''} />
//         <p class="task-description">${taskItem.description}</p>
//       </div>
//       <div class="button-wrapper">
//         <button type="submit" class="delete-btn">delete</button>
//         <button type="submit" class="edit-btn">edit</button>
//       </div>`;

//       submitedTasks.appendChild(li);
//     });

//     const checkboxes = document.querySelectorAll(".check-box");
//     checkboxes.forEach(function(checkbox) {
//       checkbox.addEventListener("change", handleCheckboxChange);
//     });
//   }
// }

// // Function to handle checkbox change
// function handleCheckboxChange() {
//   saveTaskList();
// }

// subBtn.addEventListener("click", function () {
//   if (addInput.value === "") {
//     alert("can't submit an empty input");
//   } else {
//     let li = document.createElement("li");
//     li.classList.add("task-container");
//     li.innerHTML = `<div class="task-description-parent">
//       <input type="checkbox" class="check-box" />
//       <p class="task-description">${addInput.value}</p>
//     </div>
//     <div class="button-wrapper">
//       <button type="submit" class="delete-btn">delete</button>
//       <button type="submit" class="edit-btn">edit</button>
//     </div>`;

//     submitedTasks.appendChild(li);
//     addInput.value = "";

//     // Save the task list in local storage after adding a task
//     saveTaskList();
//   }
// });

// submitedTasks.addEventListener("click", function (e) {
//   if (e.target.matches(".check-box")) {
//     let taskText = e.target.nextElementSibling;
//     taskText.classList.toggle("checked");

//     // Save the task list in local storage after toggling the checkbox
//     saveTaskList();
//   }

//   if (e.target.matches(".delete-btn")) {
//     let taskElement = e.target.parentElement.parentElement;
//     taskElement.remove();

//     // Save the task list in local storage after deleting a task
//     saveTaskList();
//   }

//   if (e.target.matches(".edit-btn")) {
//     let editElement =
//       e.target.parentElement.parentElement.children[0].children[1];
//     currentEditElement = editElement;
//     addInput.value = editElement.innerHTML;
//     editBtn.classList.add("active");
//     subBtn.classList.remove("active");
//   }
// });

// editBtn.addEventListener("click", function () {
//   if (currentEditElement) {
//     currentEditElement.innerHTML = addInput.value;
//     addInput.value = "";
//     editBtn.classList.remove("active");
//     subBtn.classList.add("active");
//     currentEditElement = null;

//     // Save the task list in local storage after editing a task
//     saveTaskList();
//   }
// });

// // Load the task list from local storage when the page is refreshed
// window.addEventListener('load', function() {
//   loadTaskList();
// });
