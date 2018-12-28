const myFunction = param => {
    return param * 2;
}

const myFunction = param => param * 2;

const myFunction = (a, b) => a * b;

const myFunction = () => ({
    hello: 'world'
})


const people = [
    { name: 'Bob', age: 30 },
    { name: 'Jane', age: 22 },
    { name: 'Steve', age: 40 }
];

let ages = people.map(function (person) {
    return person.age;
});

ages = people.map(person => person.age);

function Person() {
    this.age = 0;

    setInterval(function growUp() {
        this.age++;
    }, 1000);
}

var p = new Person();


function Person() {
    var that = this;
    that.age = 0;

    setInterval(function growUp() {
        that.age++;
    }, 1000);
}

var p = new Person();


function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
    }, 1000);
}

var p = new Person();
