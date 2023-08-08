import "./users.scss";
import html from "./users.html";

function component() {
  const element = document.createElement("section");
  element.innerHTML = html;
  return element;
}

document.body.appendChild(component());
