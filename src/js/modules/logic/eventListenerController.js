import projectForm from "./projectForm";
import taskForm from "./taskForm";
/* eslint-disable class-methods-use-this */

class EventListenerController {
  initBaseEventListeners() {
    this.initNavBarEventListeners();
    this.initSideBarEventListeners();
  }

  initTodayEventListeners() {
    const addTaskButton = document.getElementById("add-task");
    addTaskButton.addEventListener("click", () => {
      // TODO:
      taskForm.toggleForm();
      console.log("add task");
    });
  }

  initNavBarEventListeners() {
    // collapse side bar
    const collapseIcon = document.getElementById("collapse-icon");
    collapseIcon.addEventListener("click", () => {
      const sideBar = document.getElementById("side-bar");
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

  initSideBarEventListeners() {
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
      projectForm.toggleForm();
    });
  }
}

export default EventListenerController;
