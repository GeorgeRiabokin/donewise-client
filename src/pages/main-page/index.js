import "./style.scss";
import html from "./index.html";


function component() {
  const element = document.createElement("div");
  element.innerHTML = html;
  return element;
}

document.body.appendChild(component());
