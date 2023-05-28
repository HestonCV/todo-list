import "../styles/main.css";
import {
  initNavBarEventListeners,
  initSideBarEventListeners,
  initTodayEventListeners,
  initUpcomingEventListeners,
  initCompletedEventListeners,
} from "./modules/initEventListeners";

import { loadTodayView, clearView } from "./modules/loadViews";

initNavBarEventListeners();
initSideBarEventListeners();
clearView();
loadTodayView();
initTodayEventListeners();
