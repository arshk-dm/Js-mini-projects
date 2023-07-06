const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach(function (draggable) {
  draggable.addEventListener("dragstart", function () {
    draggable.classList.add("dragging");
  });
  draggable.addEventListener("dragend", function () {
    draggable.classList.remove("dragging");
  });
});
containers.forEach(function (container) {
  container.addEventListener("dragover", function (e) {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector(".dragging");
    if (afterElement == null) {
      container.appendChild(draggable);
    } else{
        container.insertBefore(draggable,afterElement)
    }
  });
});

/* this function will help us know, after we drag an item above 
other items, it'll know which item is should stay below our draggable
content, for example if we drag 1 from a container and keep it between
3 and 4, it will know that 4 is under our draggable content*/
function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
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
