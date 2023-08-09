import html from "./user-profile.html";
import ViewRender from "../../helpers/ViewRender";


function UserProfile(parent) {
    return ViewRender("div", html, "user-profile", parent);
}

export default UserProfile;
