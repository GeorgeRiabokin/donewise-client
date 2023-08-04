import "./style.scss";
import bg from "../../static/img/background-image.png"

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = "Hello" + "webpack" + " ";

  return element;
}

document.body.appendChild(component());
