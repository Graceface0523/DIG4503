const Person = require("./Person.js");

class Grace extends Person {
    constructor(name, favoriteColor, hobby){
        super(name, favoriteColor);
        this.hobby = hobby;
    }
}
module.exports = Grace;