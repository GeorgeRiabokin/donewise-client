import "./header.scss";
import html from "./header.html";
import ViewRender from "../../helpers/ViewRender";

function Header() {
    return ViewRender("h1", html, "logo-text");
}

export default Header;
