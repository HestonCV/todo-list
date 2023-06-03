import { createElement } from "./createElement";

function createProjectElement(project) {
  const projects = document.querySelector(".projects");

  // create project element and set id
  const projectElement = createElement({
    element: "div",
    className: "project",
    parent: projects,
  });
  projectElement.dataset.id = project.id;

  // create color identifier
  const colorIdentifier = createElement({
    element: "span",
    className: "color-identifier",
    parent: projectElement,
  });
  colorIdentifier.style.backgroundColor = project.color;

  // create project name
  createElement({
    element: "span",
    className: "project-name",
    textContent: project.title,
    parent: projectElement,
  });

  /* taskForm.populateProjectDropdown(); */
}

export default createProjectElement;
