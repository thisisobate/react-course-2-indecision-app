//arguments objects - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 2))

//this keyword- no longer bound

const user = {
    name: 'Andrew',
    cities: ['abuja', 'kano', 'onitsha'],
    printPlacesLived() {
       return this.cities.map((city) => this.name + ' has lived in ' + city);
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2,4,5,7],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map(number => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());