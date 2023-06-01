import { createElement, createIcon } from "./createElement";
import todoController from "../logic/todoController";
import projectManager from "../logic/projectManager";

class TaskView {
  constructor() {
    this.taskContainer = document.getElementById("task-container");
  }

  createTaskElement(page, task) {
    switch (page) {
      case "today":
        this.createTodayTaskElement(task);
        break;
      case "upcoming":
        this.createUpcomingTaskElement(task);
        break;
      case "completed":
        this.createCompletedTaskElement(task);
        break;
      default:
        throw new Error(
          "Incorrect page provided. Must be 'today', 'upcoming', or 'completed'."
        );
    }
  }

  createTodayTaskElement(task) {
    // create task element
    const newTask = createElement({
      element: "div",
      className: "task",
      parent: this.taskContainer,
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

    // if projectId exists get project details
    if (task.projectId) {
      const project = projectManager.getProjectById(task.projectId);

      projectIndicator.style.color = project.color;
      projectIndicator.title = project.title;
    } else {
      projectIndicator.style.color = "rgb(117, 117, 117)";
      projectIndicator.title = "None";
    }

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
}

export default TaskView;
