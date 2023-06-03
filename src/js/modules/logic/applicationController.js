/* eslint-disable class-methods-use-this */
import UIController from "../ui/UIController";
import EventListenerController from "./eventListenerController";

const DEFAULT_PAGE_STATE = "today";

class ApplicationController {
  constructor() {
    this.currentPage = DEFAULT_PAGE_STATE;
    this.uiController = new UIController();
    this.eventListenerController = new EventListenerController();
  }

  init() {
    this.uiController.updatePage(DEFAULT_PAGE_STATE);
    this.eventListenerController.updatePage(DEFAULT_PAGE_STATE);
    this.initEventListeners();
  }

  updatePage() {
    this.uiController.updatePage(this.currentPage);
    this.eventListenerController.updatePage(this.currentPage);
  }

  changePage(page) {
    this.currentPage = page;
    this.updatePage();
  }

  initEventListeners() {
    // today view button
    const todayViewButton = document.getElementById("today");
    todayViewButton.addEventListener("click", () => {
      if (this.currentPage !== "today") this.changePage("today");

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
  }
}

const applicationController = new ApplicationController();

export default applicationController;
