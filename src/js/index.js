import "../styles/main.css";
import {
  initNavBarEventListeners,
  initSideBarEventListeners,
  initTodayEventListeners,
  initUpcomingEventListeners,
  initCompletedEventListeners,
} from "./modules/initEventListeners";

import { loadTodayView, clearView } from "./modules/loadViews";
import todoController from "./modules/todoController";
import projectForm from "./modules/projectForm";

initNavBarEventListeners();
initSideBarEventListeners();
todoController.addTask("Code", 123, 0);
projectForm.init();
