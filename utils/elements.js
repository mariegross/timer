export const createElement = (tagName, props) => {
  const element = document.createElement(tagName);
  const { children, ...other } = props;
  //   element.className = props.className;
  //   element.innerText = props.innerText;
  Object.assign(element, other);
  if (children) {
    element.append(...children);
  }
  return element;
};
