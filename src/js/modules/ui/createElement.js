function createElement({
  element,
  className = null,
  id = null,
  textContent = null,
  parent = null,
}) {
  const newElement = document.createElement(element);

  if (className) {
    // if className is an array add all to classList
    if (Array.isArray(className)) {
      for (let i = 0; i < className.length; i += 1) {
        newElement.classList.add(className[i]);
      }
    } else {
      newElement.classList.add(className);
    }
  }

  if (id) newElement.id = id;

  if (textContent) newElement.textContent = textContent;

  if (parent) parent.appendChild(newElement);

  return newElement;
}

function createIcon({ className = null, textContent = null, parent = null }) {
  if (className) {
    // if className is array add materials-icon
    if (Array.isArray(className)) {
      className.unshift("material-icons");
    } else {
      // uses shorthand for textContent and parent
      const newIcon = createElement({
        element: "i",
        className: ["material-icons", className],
        textContent,
        parent,
      });

      return newIcon;
    }
  }
  // uses shorthand for textContent, className, parent
  const newIcon = createElement({
    element: "i",
    className: "material-icons",
    textContent,
    parent,
  });

  return newIcon;
}

export { createElement, createIcon };
