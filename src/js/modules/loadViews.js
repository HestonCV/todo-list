import { createElement, createIcon } from "./createElement";

function clearView() {
  const contentContainer = document.querySelector(".content-container");
  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }
}

function createTodayTaskForm() {
  console.log("createTodayTaskForm");
  const contentContainer = document.querySelector(".content-container");

  // create task form element
  const taskForm = createElement({
    element: "form",
    className: "task-form",
    parent: contentContainer,
  });
  // create section and children
  taskForm.setAttribute("autocomplete", "off");
  const section = createElement({
    element: "section",
    parent: taskForm,
  });
  // create title label and input
  const titleLabel = createElement({
    element: "label",
    textContent: "Name",
    parent: section,
  });
  titleLabel.setAttribute("for", "task-title");
  createElement({
    element: "input",
    id: "task-title",
    parent: section,
  });

  // create project label and input
  const projectLabel = createElement({
    element: "label",
    className: "task-project",
    textContent: "Project",
    parent: section,
  });
  projectLabel.setAttribute("for", "task-project");
  // create select input and option
  const select = createElement({
    element: "select",
    id: "task-project",
    parent: section,
  });
  const noneOption = createElement({
    element: "option",
    textContent: "None",
    parent: select,
  });
  noneOption.value = "0";

  // create deadline label and input
  const deadlineLabel = createElement({
    element: "label",
    className: "task-deadline",
    textContent: "Deadline",
    parent: section,
  });
  deadlineLabel.setAttribute("for", "task-deadline");
  const deadlineInput = createElement({
    element: "input",
    id: "task-deadline",
    parent: section,
  });
  deadlineInput.setAttribute("type", "date");

  // create submit button and icon
  const submitButton = createElement({
    element: "button",
    className: "task-form-submit",
    parent: taskForm,
  });
  submitButton.setAttribute("type", "submit");
  createIcon({
    textContent: "add",
    parent: submitButton,
  });
}

function loadTodayView() {
  const contentContainer = document.querySelector(".content-container");

  // today header
  const todayHeader = createElement({
    element: "div",
    className: "today-header",
    parent: contentContainer,
  });

  const todaysDate = createElement({
    element: "div",
    className: "todays-date",
    parent: todayHeader,
  });
  createElement({ element: "h1", textContent: "Today", parent: todaysDate });
  // TODO: textcontent display real time date
  createElement({
    element: "span",
    textContent: "Sun May 28",
    parent: todaysDate,
  });

  // create add task button
  const addTaskButton = createElement({
    element: "div",
    className: "add-task",
    parent: todayHeader,
  });
  createIcon({ textContent: "add", parent: addTaskButton });
  createElement({
    element: "span",
    textContent: "Add Task",
    parent: addTaskButton,
  });

  createTodayTaskForm();

  // create task container
  createElement({
    element: "div",
    className: "task-container",
    parent: contentContainer,
  });
}

export { loadTodayView, clearView };
