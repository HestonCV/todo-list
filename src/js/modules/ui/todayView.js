import { createElement, createIcon } from "./createElement";
import TaskView from "./taskView";

class TodayView {
  constructor() {
    this.contentContainer = document.getElementById("content-container");
    this.taskView = new TaskView();
  }

  render(tasks) {
    this.createTodayHeader();

    // create task container
    createElement({
      element: "div",
      className: "task-container",
      id: "task-container",
      parent: this.contentContainer,
    });

    // append tasks to task container
    tasks.forEach((task) => {
      this.taskView.createTaskElement("today", task);
    });
  }

  createTodayHeader() {
    // today header
    const todayHeader = createElement({
      element: "div",
      className: "today-header",
      parent: this.contentContainer,
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
      id: "add-task",
      parent: todayHeader,
    });
    createIcon({ textContent: "add", parent: addTaskButton });
    createElement({
      element: "span",
      textContent: "Add Task",
      parent: addTaskButton,
    });
  }
}

export default TodayView;
