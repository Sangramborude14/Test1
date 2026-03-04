//core 
const path = require('path');
const fs = require('fs');
const rootDir = require('../utils/pathUtils');
const { getDb } = require('../utils/databaseUtil');
const { ObjectId } = require('mongodb');

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
        if(this._id){//update
            return db.collection('homes').updateOne({_id: new ObjectId(String(this._id))},{$set: this});
        }else{//add
            return db.collection('homes').insertOne(this);
        }
        
    }

    static fetchAll() {
        const db = getDb();
        return db.collection('homes').find().toArray();
    }

    static findById(homeId){
        const db = getDb();
        return db.collection('homes').find({_id: homeId}).next();
    }
}
