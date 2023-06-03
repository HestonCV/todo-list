import TodayView from "./todayView";
import UpcomingView from "./upcomingView";
import CompletedView from "./completedView";
import taskProjectManager from "../logic/taskProjectManager";

class UIController {
  constructor() {
    this.contentContainer = document.getElementById("content-container");
    this.todayView = new TodayView();
    /* this.upcomingView = new UpcomingView();
    this.completedView = new CompletedView(); */
  }

  updatePage(page) {
    this.clearPage();
    switch (page) {
      case "today":
        this.todayView.render(taskProjectManager.taskManager.tasks);
        /* this.taskModal.update(taskProjectManager.projectManager.projects); */
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

  clearPage() {
    while (this.contentContainer.firstChild) {
      this.contentContainer.removeChild(this.contentContainer.firstChild);
    }
  }
}

export default UIController;
