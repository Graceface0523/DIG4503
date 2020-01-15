const chalk = require("chalk");

class Person {
    constructor(name,favoriteColor){
        this.name=name;
        this.favoriteColor = favoriteColor;
    }

    speak() {
        return(chalk.green(this.name));
    }
}

module.exports = Person;