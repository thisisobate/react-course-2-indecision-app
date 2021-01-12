class Person {
    constructor (name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        // return 'Hi ' + this.name + '!';
        return `Hi, I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor (name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, traveler){
        super(name, age);
        this.traveler = traveler;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if (this.traveler){
            greeting += ` My location is ${this.traveler}.`
        }
        return greeting;
    };
}

const me = new Traveler('obate', 23, 'Onitsha');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getDescription());