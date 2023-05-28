function initNavBarEventListeners() {
  // collapse side bar
  const collapseIcon = document.getElementById("collapse-icon");
  collapseIcon.addEventListener("click", () => {
    const sideBar = document.querySelector(".content .left");
    if (sideBar.classList.contains("collapsed")) {
      sideBar.classList.remove("collapsed");
    } else {
      sideBar.classList.add("collapsed");
    }
  });

  // home button
  const homeButton = document.getElementById("home-icon");
  homeButton.addEventListener("click", () => {
    // TODO: load today page
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
  const todayViewButton = document.querySelector(".today");
  todayViewButton.addEventListener("click", () => {
    // TODO: load today page
  });

  // upcoming view button
  const upcomingViewButton = document.querySelector(".upcoming");
  upcomingViewButton.addEventListener("click", () => {
    // TODO: load upcoming page
  });

  // completed view button
  const completedViewButton = document.querySelector(".completed");
  completedViewButton.addEventListener("click", () => {
    // TODO: load completed view button
  });

  // add project button
  const addProjectButton = document.querySelector(".project-header");
  addProjectButton.addEventListener("click", () => {
    // TODO: call add project module
  });
}

function initTodayEventListeners() {}

function initUpcomingEventListeners() {}

function initCompletedEventListeners() {}

export {
  initNavBarEventListeners,
  initSideBarEventListeners,
  initTodayEventListeners,
  initUpcomingEventListeners,
  initCompletedEventListeners,
};
