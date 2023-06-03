/* import taskForm from "../modals/taskForm"; */
/* eslint-disable class-methods-use-this */

class EventListenerController {
  constructor() {
    this.initBaseEventListeners();
  }

  updatePage(page) {
    switch (page) {
      case "today":
        this.initTodayEventListeners();
        break;

      case "upcoming":
        // this.upcomingView.render(taskManager.tasks);
        // this.eventListenerController.initUpcomingEventListeners();
        break;

      case "completed":
        // this.completedView.render(taskManager.tasks);
        // this.eventListenerController.initCompletedEventListeners();
        break;

      default:
        throw new Error(
          "Incorrect page provided. Must be 'today', 'upcoming', or 'completed'."
        );
    }
  }

  initBaseEventListeners() {
    this.initNavBarEventListeners();
    this.initSideBarEventListeners();
  }

  initTodayEventListeners() {
    const addTaskButton = document.getElementById("add-task");
    addTaskButton.addEventListener("click", () => {
      // TODO:
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
    // add project button
    const addProjectButton = document.querySelector(".project-header");
    addProjectButton.addEventListener("click", () => {
      const projectForm = document.getElementById("project-form");
      projectForm.style.display =
        projectForm.style.display === "flex" ? "none" : "flex";
    });
  }
}

export default EventListenerController;
