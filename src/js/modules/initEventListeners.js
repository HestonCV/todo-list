function initNavBarEventListeners() {
  // collapse side bar
  const collapseIcon = document.getElementById("collapse-icon");
  collapseIcon.addEventListener("click", () => {
    const sideBar = document.querySelector(".content .left");
    sideBar.classList.toggle("collapsed");
  });

  // home button
  const homeButton = document.getElementById("home-icon");
  homeButton.addEventListener("click", () => {
    // TODO: load today page
    console.log("home");
  });

  // search bar
  const searchBarForm = document.getElementById("search-bar-form");
  const searchBarInput = document.getElementById("search-bar");
  searchBarForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const search = searchBarInput.value;
    console.log(`submitted ${search}`);
    searchBarForm.reset();
    // TODO: call search module and pass search input
  });
}

function initSideBarEventListeners() {
  // today view button
  const todayViewButton = document.getElementById("today");
  todayViewButton.addEventListener("click", () => {
    // TODO: load today page
    console.log("today view");
  });

  // upcoming view button
  const upcomingViewButton = document.getElementById("upcoming");
  upcomingViewButton.addEventListener("click", () => {
    // TODO: load upcoming page
    console.log("upcoming view");
  });

  // completed view button
  const completedViewButton = document.getElementById("completed");
  completedViewButton.addEventListener("click", () => {
    // TODO: load completed view button
    console.log("completed view");
  });

  // add project button
  const addProjectButton = document.querySelector(".project-header");
  addProjectButton.addEventListener("click", () => {
    // TODO: call add project module
    console.log("add project");
  });
}

function initTodayEventListeners() {
  const addTaskButton = document.querySelector(".add-task");
  addTaskButton.addEventListener("click", () => {
    // TODO: call add task module
    console.log("add task");
  });
}

function initUpcomingEventListeners() {
  // TODO
}

function initCompletedEventListeners() {
  // TODO
}

export {
  initNavBarEventListeners,
  initSideBarEventListeners,
  initTodayEventListeners,
  initUpcomingEventListeners,
  initCompletedEventListeners,
};
