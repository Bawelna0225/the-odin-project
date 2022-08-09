
// function renderAndSave() {
//   render();
//   localStorage.setItem("task.lists", JSON.stringify(lists));
//   localStorage.setItem("task.selectedListId", selectedListId);
// }
// function render() {
//   renderLists();
//   const selectedList = lists.find((list) => list.id === selectedListId);

//   if (selectedListId === null) {
//     listDisplayContainer.style.display = "none";
//   } else {
//     listDisplayContainer.style.display = "";
//     listTitleElement.innerHTML = `<i class="fas fa-tasks"></i> ${selectedList.name}`;
//     renderTasks(selectedList);
//   }
// }

// function renderLists() {
//   lists.forEach((list) => {
//     const listElement = document.createElement("li");
//     listElement.innerText = list.name;
//     listElement.dataset.listId = list.id;
//     if (list.id === selectedListId) {
//       listElement.classList.add("active-list");
//     }
//     listsContainer.appendChild(listElement);
//   });
// }

// function renderTasks(selectedList) {
//   if (selectedList.tasks.length === 0) {
//     listDisplayContainer.style.backgroundSize = "35%";
//   } else {
//     listDisplayContainer.style.background = "";
//   }

//   selectedList.tasks.forEach((task) => {
//     const taskElement = document.importNode(taskTemplate.content, true);
//     const checkbox = taskElement.querySelector("input");
//     checkbox.id = task.id;
//     checkbox.checked = task.complete;
//     const label = taskElement.querySelector("label");
//     label.htmlFor = task.id;

//     const lineBreak = document.createElement("br");
//     label.append(task.name, ", ", task.date, lineBreak, task.description);
//     const editButton = document.createElement("p");
//     editButton.classList.add("edit");
//     editButton.addEventListener("click", () => editTask(task, label));
//     const todoTask = taskElement.querySelector(".task");
//     todoTask.append(editButton);
//     tasksContainer.appendChild(taskElement);
//   });
// }

// //make new list
// newListForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const listName = newListInput.value;
//   if (listName === null || listName === "") return;
//   const list = createList();
//   newListInput.value = null;
//   lists.push(list);
//   renderAndSave();
// });

// function createList() {
//   return { id: Date.now().toString(), name: newListInput.value, tasks: [] };
// }

// //make new task
// newTaskForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const taskName = newTaskInput.value;
//   const h2 = document.querySelector(".container h2");
//   if (h2.textContent === "Update Task") return;
//   if (taskName === null || taskName === "") return;
//   const task = createTask();
//   newTaskInput.value = null;
//   const selectedList = lists.find((list) => list.id === selectedListId);
//   selectedList.tasks.push(task);
//   renderAndSave();
// });

// function createTask() {
//   return {
//     id: Date.now().toString(),
//     name: newTaskInput.value,
//     date: newTaskDate.value,
//     priority: newTaskPriority.value,
//     description: newTaskDescription.value,
//     complete: false,
//   };
// }

// //delete a selected list
// deleteListButton.addEventListener("click", (e) => {
//   lists = lists.filter((list) => list.id !== selectedListId);
//   selectedListId = null;
//   renderAndSave();
// });


// //close modal
// function closeModal() {
//   formContainer.style.transform = "scale(0)";
//   overlay.style.opacity = 0;
//   modalOpen = false;
// }

// //display list tasks
// listsContainer.addEventListener("click", (e) => {
//   if (e.target.tagName.toLowerCase() === "li") {
//     selectedListId = e.target.dataset.listId;
//     renderAndSave();
//   }
// });

// //saves whether task is checked or unchecked
// tasksContainer.addEventListener("click", (e) => {
//   if (e.target.tagName.toLowerCase() === "input") {
//     const selectedList = lists.find((list) => list.id === selectedListId);
//     const selectedTask = selectedList.tasks.find(
//       (task) => task.id === e.target.id
//     );
//     selectedTask.complete = e.target.checked;
//     renderAndSave();
//   }
// });

// //open form when user clicks on + button
// addButton.addEventListener("click", () => {
//   newTaskForm.reset();
//   openOrCloseAddTaskForm();

//   if (modalOpen) {
//     addButton.style.background = "#2185d5";
//     addButton.style.transform = "rotate(45deg)";
//   } else {
//     addButton.style.background = "transparent";
//     addButton.style.transform = "rotate(0)";
//   }
// });

// //close form when user clicks on X
// closeButton.addEventListener("click", () => {
//   closeModal();
//   addButton.style.background = "transparent";
//   addButton.style.transform = "rotate(0)";
// });

// //close form after it's submitted
// formContainer.addEventListener("submit", (e) => {
//   e.preventDefault();
//   openOrCloseAddTaskForm();
//   addButton.style.background = "transparent";
//   addButton.style.transform = "rotate(0)";
//   modalOpen = false;
// });



// render();



const projectsContainer = document.querySelector(".projects");
const newProjectForm = document.querySelector(".new-project-form");
const newProjectInput = document.querySelector(".new-project");
const deleteProjectButton = document.querySelector(".delete-btn");
const projectDisplayContainer = document.querySelector(
  "[data-project-display-container]"
);
const projectTitleElement = document.querySelector(".project-title");
const projectCountElement = document.querySelector("[data-project-count");
const todosContainer = document.querySelector(".todo-project-container");
const todoTemplate = document.querySelector("template");
const newTodoForm = document.querySelector("[data-new-todo-form]");
const newTodoInput = document.querySelector("[data-new-todo-input]");
const newTodoDate = document.querySelector(".due-date");
const newTodoPriority = document.querySelector(".priority");
const newTodoDescription = document.querySelector(".description");
const clearCompleteTodosButton = document.querySelector(
  "[data-clear-complete-todos-button]"
);
let projects = JSON.parse(localStorage.getItem("todo.projects")) || [];
let selectedProjectId = localStorage.getItem("todo.selectedProjectId");
const overlay = document.querySelector(".overlay");
const formContainer = document.querySelector(".container");
const closeButton = document.querySelector(".close");
const addButton = document.querySelector(".add-btn");
const hamburger = document.querySelector(".hamburger");
let modalOpen = false;

function renderAndSave() {
  render();
  localStorage.setItem("todo.projects", JSON.stringify(projects));
  localStorage.setItem("todo.selectedProjectId", selectedProjectId);
}

// clear projects
function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function renderTodoCount(selectedProject) {
  const incompleteTodoCount = selectedProject.todos.filter(
    (todo) => !todo.complete
  ).length;
  const todoString = incompleteTodoCount === 1 ? "todo" : "todos";
  projectCountElement.innerText = `${incompleteTodoCount} ${todoString} remaining`;
}

function colorTodos(selectedProject) {
  const todos = [...document.querySelectorAll(".todo")];
  const checkbox = [...document.querySelectorAll(".checkbox")];
  for (let i = 0; i < todos.length; i++) {
    for (let i = 0; i < selectedProject.todos.length; i++) {
      if (selectedProject.todos[i].priority === "High") {
        checkbox[i].style.border = "2px solid #ed1250";
      } else if (selectedProject.todos[i].priority === "Medium") {
        checkbox[i].style.border = "2px solid #d3d00f";
      } else {
        checkbox[i].style.border = "2px solid #0fc53d";
      }
    }
  }
}

function render() {
  clearElement(projectsContainer);
  renderProjects();
  const selectedProject = projects.find((project) => project.id === selectedProjectId);

  if (selectedProjectId === null) {
    projectDisplayContainer.style.display = "none";
  } else {
    projectDisplayContainer.style.display = "";
    projectTitleElement.innerHTML = `${selectedProject.name}`;
    renderTodoCount(selectedProject);
    clearElement(todosContainer);
    renderTodos(selectedProject);
    colorTodos(selectedProject);
  }
}

function renderProjects() {
  projects.forEach((project) => {
    const projectElement = document.createElement("li");
    projectElement.innerText = project.name;
    projectElement.dataset.projectId = project.id;
    if (project.id === selectedProjectId) {
      projectElement.classList.add("active-project");
    }
    projectsContainer.appendChild(projectElement);
  });
}

function renderTodos(selectedProject) {
  if (selectedProject.todos.length === 0) {
    projectDisplayContainer.style.background =
      "url(./images/todos.svg) center no-repeat";
    projectDisplayContainer.style.backgroundSize = "35%";
  } else {
    projectDisplayContainer.style.background = "";
  }

  selectedProject.todos.forEach((todo) => {
    const todoElement = document.importNode(todoTemplate.content, true);
    const checkbox = todoElement.querySelector("input");
    checkbox.id = todo.id;
    checkbox.checked = todo.complete;
    const label = todoElement.querySelector("label");
    label.htmlFor = todo.id;

    const lineBreak = document.createElement("br");
    label.append(todo.name, ", ", todo.date, lineBreak, todo.description);
    const editButton = document.createElement("p");
    editButton.innerHTML = `<i class="far fa-edit"></i>`;
    editButton.classList.add("edit");
    editButton.addEventListener("click", () => editTodo(todo, label));
    const todoTodo = todoElement.querySelector(".todo");
    todoTodo.append(editButton);
    todosContainer.appendChild(todoElement);
  });
}

function editTodo(todo, label) {
  openOrCloseUpdateTodoForm();
  newTodoInput.value = todo.name;
  newTodoDate.value = todo.date;
  newTodoPriority.value = todo.priority;
  newTodoDescription.value = todo.description;

  newTodoForm.addEventListener("submit", () => {
    console.log("daw");
    todo.name = newTodoInput.value;
    todo.date = newTodoDate.value;
    todo.priority = newTodoPriority.value;
    todo.description = newTodoDescription.value;
    label.innerHTML = `<span class="checkbox"></span>${todo.name}<br>${todo.date}<br>${todo.description}`;
    renderAndSave();
    location.reload();
  });
}

// make new project
newProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const projectName = newProjectInput.value;
  if (projectName === null || projectName === "") return;
  const project = createProject();
  newProjectInput.value = null;
  projects.push(project);
  renderAndSave();
});

function createProject() {
  return { id: Date.now().toString(), name: newProjectInput.value, todos: [] };
}

// make new todo
newTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoName = newTodoInput.value;
  const h2 = document.querySelector(".container h2");
  if (h2.textContent === "Update Todo") return;
  if (todoName === null || todoName === "") return;
  const todo = createTodo();
  newTodoInput.value = null;
  const selectedProject = projects.find((project) => project.id === selectedProjectId);
  selectedProject.todos.push(todo);
  renderAndSave();
});

function createTodo() {
  return {
    id: Date.now().toString(),
    name: newTodoInput.value,
    date: newTodoDate.value,
    priority: newTodoPriority.value,
    description: newTodoDescription.value,
    complete: false,
  };
}

// delete a selected project
deleteProjectButton.addEventListener("click", (e) => {
  projects = projects.filter((project) => project.id !== selectedProjectId);
  selectedProjectId = null;
  renderAndSave();
});

// clear all checked todos
clearCompleteTodosButton.addEventListener("click", (e) => {
  const selectedProject = projects.find((project) => project.id === selectedProjectId);
  selectedProject.todos = selectedProject.todos.filter((todo) => !todo.complete);
  renderAndSave();
});

// when user wants to add a new todo
function openOrCloseAddTodoForm() {
  const h2 = document.querySelector(".container h2");
  const submitInput = document.querySelector(`input[type="submit"]`);

  if (modalOpen) {
    formContainer.style.pointerEvents = "none";
    formContainer.style.transform = "scale(0)";
    overlay.style.opacity = 0;
    modalOpen = false;
  } else {
    h2.textContent = "New Todo";
    submitInput.value = "Submit";
    formContainer.style.pointerEvents = "auto";
    formContainer.style.transform = "scale(1)";
    overlay.style.opacity = 1;
    modalOpen = true;
  }
}

// for when user wants to update todo
function openOrCloseUpdateTodoForm() {
  const h2 = document.querySelector(".container h2");
  const submitInput = document.querySelector(`input[type="submit"]`);

  if (modalOpen) {
    formContainer.style.pointerEvents = "none";
    formContainer.style.transform = "scale(0)";
    overlay.style.opacity = 0;
    modalOpen = false;
  } else {
    h2.textContent = "Update Todo";
    submitInput.value = "Update";
    formContainer.style.pointerEvents = "auto";
    formContainer.style.transform = "scale(1)";
    overlay.style.opacity = 1;
    modalOpen = true;
  }
}

// close modal
function closeModal() {
  formContainer.style.transform = "scale(0)";
  overlay.style.opacity = 0;
  modalOpen = false;
}

// display project todos
projectsContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedProjectId = e.target.dataset.projectId;
    renderAndSave();
  }
});

// saves whether todo is checked or unchecked
todosContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "input") {
    const selectedProject = projects.find((project) => project.id === selectedProjectId);
    const selectedTodo = selectedProject.todos.find(
      (todo) => todo.id === e.target.id
    );
    selectedTodo.complete = e.target.checked;
    renderAndSave();
  }
});

// open form when user clicks on + button
addButton.addEventListener("click", () => {
  newTodoForm.reset();
  openOrCloseAddTodoForm();

  if (modalOpen) {
    addButton.style.background = "#2185d5";
    addButton.style.transform = "rotate(45deg)";
  } else {
    addButton.style.background = "transparent";
    addButton.style.transform = "rotate(0)";
  }
});

// close form when user clicks on X
closeButton.addEventListener("click", () => {
  closeModal();
  addButton.style.background = "transparent";
  addButton.style.transform = "rotate(0)";
});

// close form after it's submitted
formContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  openOrCloseAddTodoForm();
  addButton.style.background = "transparent";
  addButton.style.transform = "rotate(0)";
  modalOpen = false;
});

// toggle slide-in of sidebar when user clicks on hamburger menu
hamburger.addEventListener("click", () => {
  const sidebar = document.querySelector("#sidebar");
  sidebar.classList.toggle("active");
  hamburger.classList.toggle("clicked");
});

render();