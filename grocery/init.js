// select items
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.querySelector("#grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit options
let editElement;
let editFlag = false;
let editId = "";

// submit form
form.addEventListener("submit", addItem);

// clear items
clearBtn.addEventListener("click", clearItems);

// load item
window.addEventListener('DOMContentLoaded', setUpItems)
// main functions

// add item to our list
function addItem(e) {
  e.preventDefault();

  // this line of code will get the value that we write in our input
  const value = grocery.value;
  const uniqueId = generateNewId();
  // when we want to send shit into form
  if (value && !editFlag) {
    // will throw our submited item into grocery-list
    shoveItem(value);

    // will alert a message
    displayAlert("item added to the list", "success");

    // will reveal our grocecry container
    showContainer();

    // add to local storage
    addToLocalStorage(uniqueId, value);

    // set to default, this function will clear our input after sending an item into grocery-list
    setToDefault();
  }
  // for when you're editing
  else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert("value changed", "success");
    // edit local storage
    editLocalStorage(editId, value);
    setToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}

// remove all items by clicking on delete all
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");

  // querySelectorAll will put them all in array
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("flushed the list", "danger");
  setToDefault();
  localStorage.removeItem("list");
  // localStorage.removeItem('list');
}

// Lesser Functions

// this is my own function to generate random string for value id
function generateNewId() {
  return `input_` + Math.random().toString(36).substring(2, 11);
}

// this function will define our input value and then send it into grocery list
function shoveItem(item, value) {
  // this code will make our item and give them class and ID and then shove it into gorcery-list
  const element = document.createElement("article");
  element.classList.add("grocery-item");
  const attr = document.createAttribute("data-id");
  attr.value = generateNewId();
  element.setAttributeNode(attr);
  element.innerHTML = `<p class="title">${item}</p>
  <div class="btn-container">
    <button type="button" class="edit">
      <i class="fas fa-edit"></i>
    </button>
    <button type="button" class="delete-btn">
      <i class="fas fa-trash"></i>
    </button>
  </div>`;
  // this is for deleting and editing the added item
  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);

  list.appendChild(element);
}

// display alert function
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  //   remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// grocery-container is invisible, this function will reveal it
function showContainer() {
  container.classList.add("show-container");
}

// set back to default function
function setToDefault() {
  grocery.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}

// for when we want to delete a single item
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  console.log(id);
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item removed", "danger");
  setToDefault();
  removeFromLocalStorage(id);
}

// for when we want to edit an item
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editId = element.dataset.id;
  submitBtn.textContent = "edit";
}

// add to local storage function
function addToLocalStorage(id, value) {
  // this is object
  const grocery = { id, value };
  // console.log(grocery);
  /* this line checks if local storage has any item in it, if i has (truthy) then
  it will asign list to it otherwise it will asign it into an empty string*/
  let items = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  items.push(grocery);
  // console.log(items);
  localStorage.setItem("list", JSON.stringify(items));
}

// remove from local storage
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// editing local storage
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// this function is for returning the value of addToLocalStorage
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function setUpItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      shoveItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

// how to localStorage
// you can only save sth as a JSON in in local storage otherwise it would be a mess

// localStorage.setItem("dude", JSON.stringify(["item", "item2"]));
// const dudes = JSON.parse(localStorage.getItem("dude"));
// console.log(dudes);
// localStorage.removeItem('dudes');
