import "./users.scss";
import html from "./users.html";
import ViewRender from "../../helpers/ViewRender";
import UserProfile from "../user-profile/user-profile";

const usersData = [
    "george", "daniil"
]; // TODO :: replace to service

function Users() {
    const users = ViewRender("section", html, "console");
    usersData.forEach((userId) => {
        const currentUser = document.getElementById(userId);
        // TODO :: use onclick for visible or hide element:
        // currentUser.onclick(() => currentUser.classList.add("console__header__button__active"));
    });

    UserProfile(document.getElementById("console__body"));
    return users;
}

export default Users;
