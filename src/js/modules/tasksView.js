import { createElement, createIcon } from "./createElement";
import todoController from "./todoController";

function getProjectTitle(task) {
  // if no project selected
  if (task.project === "0") {
    return "None";
  }

  // find the project with the matching id and return its title
  const taskProject = todoController.projects.find(
    (project) => project.id === task.project
  );
  return taskProject.title;
}

function getProjectColor(task) {
  // if no project selected
  if (task.project === "0") {
    return "rgb(117, 117, 117)";
  }

  const taskProject = todoController.projects.find(
    (project) => project.id === task.project
  );
  return taskProject.color;
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
  const deadlineIcon = createIcon({
    className: "task-buttons",
    textContent: "date_range",
    parent: taskRight,
  });
  deadlineIcon.title = task.deadline;
  createIcon({
    className: "task-buttons",
    textContent: "delete",
    parent: taskRight,
  });
}

export default createTaskElement;
