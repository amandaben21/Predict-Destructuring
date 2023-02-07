// Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
// output: Tesla, Mercedes

/*and if we want Honda we will have to write:
    const [ ,,thirdRandomCar ] = cars
    console.log(thirdRandomCar) 
    output: Honda  */

/*------------------------------------------------------------------*/

// Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
// output: undefined 

/* When destructuring from objects the 
property names must be matched exactly, so in this problem, 
because otherName does not exist on our emplyee object, 
it will be undefined.*/

console.log(otherName);
// output: Elon

/* Specifying the property name, "name", will access the value 
of that property on our object. The colon : after the property 
name followed by your new variable redirects the value of "name" 
to be held in "otherName", thereby eliminating the aforementioned 
identifier conflict.*/

/*------------------------------------------------------------------*/

// Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
//output: 12345

console.log(hashedPassword);
//output: undefind

/*------------------------------------------------------------------*/

// Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
//output: false
/*Saying if 2 is true to 5, and that is false*/

console.log(first == third);
//output: ture
/*Saying if 2 is true to 2, and that's true */

/*------------------------------------------------------------------*/

// Problem 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
//output: value

console.log(secondKey);
//output: [1, 5, 1, 8, 3, 3]

console.log(secondKey[0]);
//output: 1

console.log(willThisWork);
//output: 5
