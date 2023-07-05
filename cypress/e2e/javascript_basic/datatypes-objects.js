/** 
 * variables naming rules : Same as java
 * Primitive Data Types
 * Numbers -> 123, 10.50
 * String -> "apple", 'apple'
 * Boolean -> true, false
 * Undefined -> Variables does not have a value yet
 * Null -> 
*/

/**
 * There are 3 different types of variables
 * var -> Variable abbreviation
 * if there is globally scope is a variable definition method
 * you can change its value later and define the same variable again
 * 
 * let -> is equal to 
 * let is a block-scope variable defination method
 * The value of variables defined with let can be changed later
 * But you can NOT define the same variable again
 * 
 * const -> short for constant
 * as soon as the value of variable is constant, like number PI
 */

let a;  // undefine
console.log(typeof a);
a = 6;  // number
console.log(typeof a)
a = 'Javascript'    // string
console.log(typeof a)
a = true;   // boolean
console.log(typeof a)

let b = 6, c = 'Cypress';
console.log(b + c)
console.log(b * c)

var name = 'Mike'
var age = 36;
var name_object = {firstName: "Jake", lastName: "Masters"}
var truth = true;
var skills = ["HTML", "CSS", "JS"]
var x = null;

// Object

var student = {
    firstName: 'Kate',
    lastName: 'Masters',
    age: 30,
    height: 180,

    fullName: function(){
        return this.firstName + " " + this.lastName
    }
}

const ageValue = student.age;
console.log(ageValue)

console.log(student.fullName())

let str1 = 'Cypress';
let str2 = 'Script';
let str3 = "Java"

let result;

result = "The result variable is: " + str3 + str2 + " and "+ str1
console.log(result)

// Difference from Java: Backticks for variable insertion

result = `the result variable is: ${str3}${str2} ${str1}`
console.log(result)