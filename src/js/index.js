import "../styles/main.css";
import {
  initNavBarEventListeners,
  initSideBarEventListeners,
  initTodayEventListeners,
  initUpcomingEventListeners,
  initCompletedEventListeners,
} from "./modules/initEventListeners";

import createProjectElement from "./modules/projectsView";
import { loadTodayView, clearView } from "./modules/loadViews";
import TodoController from "./modules/todoController";

const todoController = new TodoController();
initNavBarEventListeners();
initSideBarEventListeners();

todoController.addProject("Work", "purple");
