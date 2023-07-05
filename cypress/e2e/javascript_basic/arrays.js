// Creating array

var scores = new Array() // Empty array
var numbers = new Array(10) // Array with initials size 10
var myNumber = new Array(9, 5, 4, 11) // Array with initial elements

var athlets = Array(3); // Array with initials size 3
var sings = Array("Red"); // Array with one element

var emptyArray = []; // Empty array
var colors = ['red', 'green', 'blue'];

//Array examples

let tools = ["Jest", "Selenium", "Cypress", "TestCafe", "Phantomjs", "Protractor"]

// Accessing array element

console.log(tools)
console.log(tools.toString())
console.log(tools[2])

const str = tools.toString();
console.log(str)

const join = tools.join(" * ") // Add * between elements
console.log(join)

const pop = tools.pop() // Removes an elements from the end of an arrays
console.log(pop)
console.log(tools)

const push = tools.push("SlimmerJS") // Add element to end of array
console.log(tools)

const shift = tools.shift(); // Removes first element of an array
console.log(shift)
console.log(tools)

const unshift = tools.unshift("Selenoid") // Add element to beginning of an array
console.log(tools)

// Sort element
const sort = tools.sort()
console.log(tools)

// Reverse element
const reverse = tools.reverse()
console.log(tools)

tools.forEach((value)=>{ // foreach loop
if(value == "Cypress"){
console.log("Cypress is trending now!")
}else {
    console.log("Element not found!")
}
})