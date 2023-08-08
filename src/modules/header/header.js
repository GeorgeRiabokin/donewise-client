import "./header.scss";
import html from "./header.html";

function component() {
  const element = document.createElement("h1");
  element.innerHTML = html;
  return element;
}

document.body.appendChild(component());
