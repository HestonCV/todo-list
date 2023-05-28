// takes object literal
function createElement({
  element,
  className = null,
  id = null,
  textContent = null,
  parent = null,
}) {
  const newElement = document.createElement(element);

  if (className) newElement.classList.add(className);

  if (id) newElement.id = id;

  if (textContent) newElement.textContent = textContent;

  if (parent) parent.appendChild(newElement);

  return newElement;
}

export default createElement;
