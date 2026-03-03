const registeredHomes = [];

module.exports = class Home {
    constructor(name, age, gender, mobile, email) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.mobile = mobile;
        this.email = email;
    }

    save() {
        registeredHomes.push(this);
    }

    static fetchAll() {
        return registeredHomes;
    }
}
