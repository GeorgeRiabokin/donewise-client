import "./users.scss";
import html from "./users.html";
import ViewRender from "../../helpers/ViewRender";
import UserProfile from "../user-profile/user-profile";

function Users() {
    const users = ViewRender("section", html, "console");
    UserProfile(document.getElementById("console__body"));
    return users;
}

export default Users;
