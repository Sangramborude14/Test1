//core 
const path = require('path');
const fs = require('fs');
const rootDir = require('../utils/pathUtils');


module.exports = class Home {
    constructor(name, age, gender, mobile, email) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.mobile = mobile;
        this.email = email;
    }

    save() {
        const save_func = registeredUsers => {
            registeredUsers.push(this);
            const userDataPath = path.join(rootDir, 'data', 'userInfo.json');
            fs.writeFile(userDataPath, JSON.stringify(registeredUsers, null, 2), err => { console.log(`error in file writing`) });
        }

        Home.fetchAll(save_func);
    }

    static fetchAll(callback) {
        const userDataPath = path.join(rootDir, 'data', 'userInfo.json');
        fs.readFile(userDataPath, (err, data) => {
            console.log(`file read`, err);
            if (!err && data.length > 0) {
                try {
                    callback(JSON.parse(data));
                } catch (parseErr) {
                    console.error("Error parsing JSON:", parseErr);
                    callback([]);
                }
            } else {
                callback([]);
            }
        });

    }
}
