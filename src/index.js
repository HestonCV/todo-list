import "./style.css";

const collapseIcon = document.getElementById("collapse-icon");

collapseIcon.addEventListener("click", () => {
  const sideBar = document.querySelector(".content .left");
  if (sideBar.classList.contains("collapsed")) {
    console.log("test");
    sideBar.classList.remove("collapsed");
  } else {
    sideBar.classList.add("collapsed");
  }
});
