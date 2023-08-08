class UserModel {
    id = null;
    name = "";
    photoName = "";

    /**
     * 
     * @param {string} id 
     * @param {string} name 
     * @param {string} photoName 
     */
    constructor(id, name, photoName) {
        this.id = id;
        this.name = name;
        this.photoName = photoName;
    }
}

export default UserModel;
