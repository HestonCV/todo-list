import { createElement, createIcon } from "./createElement";

function getProjectTitle(task) {
  // TODO
  return "Personal";
}

function getProjectColor(task) {
  // TODO
  return "red";
}

function createTaskElement(task) {
  const taskContainer = document.querySelector(".task-container");

  // create task element
  const newTask = createElement({
    element: "div",
    className: "task",
    parent: taskContainer,
  });

  // create left side of task
  const taskLeft = createElement({
    element: "div",
    className: "left",
    parent: newTask,
  });
  // create completed icon
  createIcon({
    className: "checked",
    textContent: "radio_button_unchecked",
    parent: taskLeft,
  });
  // create task name
  createElement({
    element: "span",
    className: "task-name",
    textContent: task.title,
    parent: taskLeft,
  });

  // create right side of task
  const taskRight = createElement({
    element: "div",
    className: "right",
    parent: newTask,
  });
  // create project icon
  const projectIndicator = createIcon({
    className: "project-indicator",
    textContent: "folder",
    parent: taskRight,
  });
  projectIndicator.style.color = getProjectColor(task);
  projectIndicator.title = getProjectTitle(task);

  // create task buttons
  createIcon({
    className: "task-buttons",
    textContent: "edit",
    parent: taskRight,
  });
  createIcon({
    className: "task-buttons",
    textContent: "date_range",
    parent: taskRight,
  });
  createIcon({
    className: "task-buttons",
    textContent: "delete",
    parent: taskRight,
  });
}

export default createTaskElement;
