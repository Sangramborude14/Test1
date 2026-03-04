//core 
const path = require('path');
const fs = require('fs');
const rootDir = require('../utils/pathUtils');
const { getDb } = require('../utils/databaseUtil');

module.exports = class Home {
    constructor(name, age, gender, mobile, email) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.mobile = mobile;
        this.email = email;
    }

    save() {
        const db = getDb();
        return db.collection('homes').insertOne(this);
    }

    static fetchAll() {
        const db = getDb();
        return db.collection('homes').find().toArray();
    }
}
