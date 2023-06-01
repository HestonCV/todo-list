import TodayView from "./todayView";
import UpcomingView from "./upcomingView";
import CompletedView from "./completedView";
import taskManager from "../logic/taskManager";
import projectManager from "../logic/projectManager";
import EventListenerController from "../logic/eventListenerController";

class UIController {
  constructor() {
    this.currentPage = "today";
    this.contentContainer = document.getElementById("content-container");
    this.eventListenerController = new EventListenerController();
    this.init();

    this.todayView = new TodayView();
    this.upcomingView = new UpcomingView();
    this.completedView = new CompletedView();
  }

  init() {
    this.eventListenerController.initBaseEventListeners();
  }

  changePage(page) {
    this.currentPage = page;
    this.updatePage();
  }

  updatePage() {
    this.clearPage();
    switch (this.currentPage) {
      case "today":
        this.todayView.render(taskManager.tasks);
        this.eventListenerController.initTodayEventListeners();
        break;

      case "upcoming":
        this.upcomingView.render(taskManager.tasks);
        this.eventListenerController.initUpcomingEventListeners();
        break;

      case "completed":
        this.completedView.render(taskManager.tasks);
        this.eventListenerController.initCompletedEventListeners();
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
