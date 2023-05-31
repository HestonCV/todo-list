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
import taskForm from "./modules/taskForm";

initNavBarEventListeners();
initSideBarEventListeners();
projectForm.init();
clearView();
loadTodayView();
initTodayEventListeners();
taskForm.init();
