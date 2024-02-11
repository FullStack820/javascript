console.log('Javascript says hello!');
// console.error('This is an error!');
// console.warn('This is a warning!');

// String, numbers, Boolean, null, undefined
const name='sai';
const age=30;
const rating=4.3;
const isCool=true;
const x=null;
const y=undefined;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// String Concatenation
console.log('My name is '+name+' and I am '+age);

// Template String
console.log(`My name is ${name} and I am ${age}`);

const s='Hello World!'
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());

console.log(s.split(' '));
console.log(s.split(''));

// Arrays
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
const fruits = ['apple','banana','orange','grapes'];
console.log(fruits);
const arr=['kiwi','verna','ferrari',10,false,8.91]
console.log(arr);

fruits.push('musk melon');
console.log(fruits);

fruits.unshift('water melon');
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(Array.isArray(fruits));
console.log(fruits.indexOf('grapes'));

// object literals
const person = {
    firstName: 'john',
    lastName: 'williams',
    age: 30,
    hobbies: ['movies','sports','music'],
    address: {
        street: '50 main st',
        city: 'boston',
        state: 'MA',
        zip: 312313
    }
}
console.log(person.address);
console.log(person.hobbies[0]);

//pulling out values and creating multiple JS variables
const {firstName, lastName, address: { city }} = person;
console.log(`firstName variable is ${firstName} and lastName variable is ${lastName}`);
console.log(`city is ${city}`);

//directly add properties
person.email='john.williams@gmail.com';
console.log(person);

const todos = [
    {   
        id: 1,
        text: 'pick up the trash',
        isComplete: false
    },
    {   
        id: 2,
        text: 'do the dishes',
        isComplete: true
    },
    {   
        id: 3,
        text: 'watch a movie',
        isComplete: false
    }
]
console.log(todos);
console.log(todos[1].text);

todos_json = JSON.stringify(todos);
console.log(todos_json);

// loops
for (let i=0; i<=10; i++) {
    console.log(`for-loop number ${i}`);
}

let i=0;
while(i < 10){
    console.log(`while-loop number ${i}`);
    i++;
} 


// looping through arrays

console.log(todos.length);

for (let i=0; i<todos.length; i++) {
    console.log(`to-do ${i} - ${todos[i].text}`);
}


for (let todo of todos){
    console.log(`${todo.id} - ${todo.text} - ${todo.isComplete}`);
}

// high order array methods (recommended) - take in the parameter a function
// forEach, map(creates new array from an array), filter(creates new array from an array based on a condition)

todos.forEach(function(todo) {
    console.log(`forEach - ${todo.id} - ${todo.text} - ${todo.isComplete}`);
});

const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

const completedTasks = todos.filter(function(todo){
    return todo.isComplete === true;
}).map(function(todo){
    return todo.text;
});
console.log(completedTasks);

// conditionals
const p=4;
// == doesn't match the datatypes. p == 10 holds true but p === 10 doesn't.
// that is the primary difference between == and ====
if(p === 10){
    console.log(`p=${p}`);
} else if( p > 10) {
    console.log(`p>${p}`);
} else {
    console.log(`p<${p}`);
}

const q=15;
if (p > 5 || q > 10){
    console.log('p is more than 5 or q is more than 10');
}

// ternary operator
const xx=3;
const color = xx>10 ? 'red' : 'green';
console.log(color);

// switch
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}

// functions
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums(5,4));
console.log(addNums());
console.log(addNums(13,12));

// arrow functions introduced with ES6
const addNumsArrowfs = (num1 = 1, num2 = 1) => {
    return num1 + num2;
}

console.log(addNumsArrowfs(130,12));

// same as 
const addNumsArrowfsTwo = (num1 = 1, num2 = 1) => console.log(num1 + num2);
addNumsArrowfsTwo(130,120);

// or
const addNumsArrowfsThree = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNumsArrowfsThree(140,120));

// or
const addNumsArrowfsFour = num1 => num1 + 5;
console.log(addNumsArrowfsFour(14));

// so, simplify the following with arrow funcs as follows
// also got extra advantage when using 'this' keyword.
// todos.forEach(function(todo) {
//     console.log(`forEach - ${todo.id} - ${todo.text} - ${todo.isComplete}`);
// });
todos.forEach(todo => console.log(todo.text));

// oops - constructor functions (es5)
function Person(firstName, lastName, dob) {
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=new Date(dob);

    this.getBirthYear=function(){
        return this.dob.getFullYear();
    }
    this.getFullName=function(){
        return this.firstName + ' '+ this.lastName;
    }
}
// Instantiate an object
person1 = new Person('john','doe','11-05-2000');
person2 = new Person('mary','miller','1-6-1908');
console.log(person1);
console.log(person2);

console.log(person2.getBirthYear());
console.log(person2.getFullName());

// you can attach methods and properties to prototype of the constructor function.
function fruit_purchase(name, color, price_per_kg, purchase_date){
    this.name=name;
    this.color=color;
    this.price_per_kg=price_per_kg;
    this.purchase_date=new Date(purchase_date);
}

fruit_purchase.prototype.getAllFruits = function() {
    return ['apple','orange','grape','water melon','musk melon','kiwi','mango','banana','pine apple','custard apple']
}

fp1=new fruit_purchase('banana','yellow',50,'11-05-1988');
console.log(fp1);
console.log(fp1.getAllFruits());

// classes (es6)
class PersonC {
    constructor(firstName, lastName, dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=new Date(dob);
    }

    getBirthYearC(){
        return this.dob.getFullYear();
    }

    getFullNameC(){
        return this.firstName + ' '+ this.lastName;
    }
}

person1 = new PersonC('sai','pavan','11-05-1121');
person2 = new PersonC('oban','sharp','1-6-9001');
console.log(person1);
console.log(person2);

console.log(person2.getBirthYearC());
console.log(person2.getFullNameC());

// DOM's.
