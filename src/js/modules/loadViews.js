import createElement from "./createElement";

function clearView() {
  const contentContainer = document.querySelector(".content-container");
  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }
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
  createElement({
    element: "i",
    className: "material-icons",
    textContent: "add",
    parent: addTaskButton,
  });
  createElement({
    element: "span",
    textContent: "Add Task",
    parent: addTaskButton,
  });

  // create task container
  createElement({
    element: "div",
    className: "task-container",
    parent: contentContainer,
  });
}

export { loadTodayView, clearView };
