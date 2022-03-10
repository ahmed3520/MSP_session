//Array in JS 
//Array is a collection of values 
//arrays are zero based

//common operations
//create a new arrayd
let fruits = ['Apple', 'Banana'];

console.log(fruits.length)

//access an array item using index position

let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana

//loop over array


fruits.forEach(function(item, index, array) {
    console.log(item, index)
  })
  // Apple 0
  // Banana 1
  
//add an item to the end of an array
fruits.push('Orange')
const len = array.push('val')
// ["Apple", "Banana", "Orange"]

//Remove an item from the end of an Array
fruits.pop();
// ["Apple", "Banana"]

//Remove an item from the beginning of an array
fruits.shift();
// ["Banana"]

//Add an item to the beginning of an Array
let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]

//Find the index of an item in the Array
fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana')
// 1

//Remove an item by index position
let removedItem = fruits.splice(pos, 1) // this is how to remove an item

// ["Strawberry", "Mango"]
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements.

//splice syntax
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)

//start: The index at which to start changing the array.
//deleteCount: An integer indicating the number of old array elements to remove.(optional)
//itemN: The element to add to the array.(optional)
//If you do not specify any elements, splice() will only remove elements from the array.

//Remove 0 (zero) elements before index 2, and insert "drum"
let myFish = ['angel',          'clown',             'mandarin', 'sturgeon']
let removed = myFish.splice(1, 0, 'drum')

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed

//Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum', 'guitar')

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed

//Remove 1 element at index 3
let myFish = ['angel', 'clown', 'drum', ]
let removed = myFish.splice(3)

// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]

//Remove 1 element at index 2, and insert "trumpet"
let myFish = ['angel', 'clown',        'drum', 'sturgeon']
let removed = myFish.splice(2, 1, 'trumpet')

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]

//Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
let myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
let removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue')

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]

//Remove 2 elements, starting from index 2
let myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
let removed = myFish.splice(2, 2)

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]

//Remove 1 element from index -2
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(-2, 1)

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]

//Remove all elements, starting from index 2
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2)

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]

//slice method
//slice method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array.
//slice method does not alter the original array.
//slice method is a shallow copy.

//slice method syntax
slice()
slice(start)
slice(start, end)

//slice method parameters
//start: The index at which to start changing the array.
//end: The index at which to stop changing the array.
//If end is omitted, slice() will copy until the end of the array.
//return value: A new array containing the extracted elements.

//slice example
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
//citrus is ["Orange", "Lemon"]

//loop in JS
//Loops offer a quick and easy way to do something repeatedly.
//loop as a computerized version of the game where you tell someone to take X steps in one direction, 
//then Y steps in another. For example, the idea "Go five steps to the east" could be expressed this way as a loop.
for (let step = 5; step  >0; --step) {
    // Runs 5 times, with values of step 0 through 4.
    fruits[step]; 
    console.log('Walking east one step');
  }
//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  //types of loops
    //for loop
    //while loop
    //do while loop
    //for in loop
    //for of loop
    //for each loop

//for statement
//for statement is a loop that repeats a block of code a specified number of times.
//A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.
//for ([initialExpression]; [conditionExpression]; [incrementExpression/decrementExpression]) {
//statement
//for loop example
for (let i = 0; i < 5; i++) {

    console.log(i);
    }
//do while
//The do...while statement repeats until a specified condition evaluates to false.

do
  statement
while (condition);

//do while example
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

//while loop
//The while statement executes a statement or a block of statements repeatedly while the specified condition is true.
//we can write conditon == true or only codintion
while (condition)
  statement

//while loop example
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
//for in loop
//The for...in statement iterates over the enumerable properties of an object.
//for (variable in object)
//statement
//for in loop example

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue'
    };
    for (let x in person) {
    console.log(x);
    console.log(person[x]);
    }
    //it's better to not use for in loop for arrays 
    //The index order is implementation-dependent, and array values may not be accessed in the order you expect.
    //It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
    function processUserInput(callback) {
        var name = prompt('Please enter your name.');
        callback(name);
      }
    
    //callback function: A callback function is a function passed into another function as an argument,
    // which is then invoked inside the outer function to complete some kind of routine or action.
   //example:
 
   function print(name) {
    alert('Hello ' + name);
  }
 processUserInput(greeting);
    //foreach loop
    //The forEach() method executes a provided function once for each array element.
    //foreEach() take a callback function as an argument
    //that callback function takes three arguments: the value of the element, the index of the element, and the array object.
     //forEach() method example
        let array = [1, 2, 3, 4, 5];
        array.forEach(consoleLoger);
        //callback function
        function consoleLoger(item,index,arr){
            console.log(item,"=>",index,"=>",arr);
        }

        //another way to write the same code
        array.forEach(function(item,index,arr){
            console.log(item,"=>",index,"=>",arr);
        });
        //another way to write the same code
        array.forEach((item,index,arr)=>{
            console.log(item,"=>",index,"=>",arr);
        }
        );
        //we can remove index and arr from the callback function
        array.forEach((item)=>{
            console.log(item);
        }
        );

    //for of loop
    //The for...of statement iterates over iterable objects, from left to right.
    //for (variable of iterableObject)
    //statement

    //for of loop example
    const cars = ["BMW", "Volvo", "Mini"];

    let text = "";
    for (let x of cars) {
    text += x;
    }
    //Looping over a String
        let language = "JavaScript";

        let text = "";
        for (let x of language) {
        text += x;
        }


    //object syntax
var person = {
    name: "John",
    age: 30,
    logger: function () {
        console.log(name);
    }
};

//2 ways of accessing the properties of an object
//1. dot notation
console.log(person.name);
console.log(person.age);
//2. bracket notation
console.log(person["name"]);
console.log(person["age"]);

//3. for in loop
for (var prop in person) {
    console.log(prop);
}   //name, age, logger

//which method is better?
//1. dot notation
//2. bracket notation

//when to use bracket notation?
//when you need to access a property with a variable
//when you need to access a property with a string
//when you need to access a property with a number
//when the property name is a string

//when we use dot notation?
//use dot notation when you need to access a property and none of the above applies to the object property name (it's cleaner to use dot notation)

arraz = [1,2,3,4,5];	
//1-problem
const playerOne = {
    name: "John",
    score: 5,
    wins: 0,

};

const playerTwo = {
    name: "Mary",
    score: 10,
    wins: 0
};
//playerOne is the same as playerTwo with the same properties so we just repeat the same code
//to solve this problem we use object constructor and factory function
//constructor function is a function that creates objects
//factory function is a function that returns an object
//they are the same thing but the factory function is more common and easier to use in our code base because it's more readable and easier to understand 
// also the implementation is different so we can't use the same code for both of them 

//player object constructor example
function PlayerConstructor(name, score, wins) {
    this.name = name;
    this.score = score;
    this.wins = wins;
}

//this is a reference to the object that is being created by the constructor function 
//call the constructor function and pass in the arguments
const playerOne = new PlayerConstructor("John", 5, 0);
//you see new operator is used to create a new empty object
//it's like when we say new + function name the JS engine will run to to create a new object and assign values to the properties like assign name to that particular object
//you can consider the constructor function as a blueprint or a template for creating objects
//return this , is automatically returned by the constructor function and we don't have to return it 

//2- factory function 
//this factory function produces objects
//ex1
//modern JS 
function playerFactory(name, score, wins) {
    const example = {
        name,
        score,
        wins
    };
    return example;
}
//or in modern JS we can return an object directly
function playerFactory(name, score, wins) {
    return {
        name: name,
        score: score,
        wins: wins
    };
}
//so how can we call it
const playerOne = playerFactory("John", 5, 0);
//we can call it like this
//as you see the return keyword is used to return an object 
//no new operator is used here
//we do not use this reference to create a new object
//////////////////////////////////////////////////////////////////////////////-------------------------////////////////////////////////////////////////////////

//prototype in JS

//we can say that every function/object has a prototype property and it's empty by default
//we can add properties to the prototype property of a function



//example:
function Players(){
    this.name = "John";
    this.score = 5;
    this.wins = 0;
}
//add prototype property to the function

Players.prototype.show = function(){
    console.log(this.name);
}
//Moreover, all objects that inherit from another object also inherit a constructor property. 
//And this constructor property is simply a property (like any variable) that holds or points 
//to the constructor of the object.

function Account () {
}


//The constructor in this example is Object () 
var myObj = new Object ();
// And if you later want to find the myObj constructor:
console.log(myObj.constructor); // Object()

// Another example: Account () is the constructor
var userAccount = new Account (); 
// Find the userAccount object's constructor
console.log(userAccount.constructor); // Account()

//All objects created with object literals and with the Object constructor inherits from Object.prototype. Therefore, Object.prototype is the prototype attribute (or the prototype object) of all objects created with new Object () or with {}. Object.prototype itself does not inherit any methods or properties from any other object.

// The userAccount object inherits from Object and as such its prototype attribute is Object.prototype.
var userAccount = new Object ();

// This demonstrates the use of an object literal to create the userAccount object; 
//the userAccount object inherits from Object; therefore, 
//its prototype attribute is Object.prototype just as the userAccount object does above.
var userAccount = {name: "Mike"} 

//Objects created with the new keyword and any constructor other than the Object () constructor, 
//get their prototype from the constructor function.

function Account () {

}
// userAccount initialized with the Account () constructor
// and as such its prototype attribute (or prototype object) is Account.prototype.

var userAccount = new Account () 
//similarly, any array such as var myArray = new Array (), gets its prototype from Array.prototype and it inherits Array.prototype?s properties.

//If an object is created with an object literal (var newObj = {}),
// it inherits properties from Object.prototype and we say its prototype object (or prototype attribute) is Object.prototype.
//If an object is created from a constructor function such as new Object (), new Fruit () or new Array () or new Anything (), 
//it inherits from that constructor (Object (), Fruit (), Array (), or Anything ()). 
//For example, with a function such as Fruit (), each time we create a new instance of Fruit (var aFruit = new Fruit ()),
// the new instance?s prototype is assigned the prototype from the Fruit constructor,
// which is Fruit.prototype.Any object that was created with new Array () will have Array.prototype as its prototype. 
//An object created with new Fruit () will have Fruit.prototype as its prototype.
// And any object created with the Object constructor (Obj (), such as var anObj = new Object() ) inherits from Object.prototype.

//Why is Prototype Important and When is it Used?
//Prototype Property: Prototype-based Inheritance
//Prototype is important in JavaScript because JavaScript does not have classical inheritance based on Classes (as most object oriented languages do),
// and therefore all inheritance in JavaScript is made possible through the prototype property. 
//JavaScript has a prototype-based inheritance mechanism.Inheritance is a programming paradigm where objects (or Classes in some languages)
// can inherit properties and methods from other objects (or Classes). In JavaScript, you implement inheritance with the prototype property. 
//For example, you can create a Fruit function (an object, since all functions in JavaScript are objects) 
//and add properties and methods on the Fruit prototype property,
// and all instances of the Fruit function will inherit all the Fruit?s properties and methods.

//inheritance in JS example

function Plant () {
    this.country = "Mexico";
    this.isOrganic = true;
    }
    
    // Add the showNameAndColor method to the Plant prototype property
    Plant.prototype.showNameAndColor =  function () {
    console.log("I am a " + this.name + " and my color is " + this.color);
    }
    
    // Add the amIOrganic method to the Plant prototype property
    Plant.prototype.amIOrganic = function () {
    if (this.isOrganic)
    console.log("I am organic, Baby!");
    }
    
    function Fruit (fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;
    }
    
    // Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.
    Fruit.prototype = new Plant ();
    
    // Creates a new object, aBanana, with the Fruit constructor
    var aBanana = new Fruit ("Banana", "Yellow");
    
    // Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:
    console.log(aBanana.name); // Banana
    
    // Uses the showNameAndColor method from the Fruit object prototype, which is Plant.prototype. The aBanana object inherits all the properties and methods from both the Plant and Fruit functions.
    console.log(aBanana.showNameAndColor()); // I am a Banana and my color is yellow.