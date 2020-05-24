/* Type annotation - we tell typescript what type of value a variable holds */
/* Type inference  - typescript guesses the type */

// can only assign a number to apples
const apples: number = 5;
// same with let
let speed: string = 'fast'

// value here is the same as a type
let nothingMuch:null = null
let nothing: undefined = undefined

// BUILT IN OBJECTS (as opposed to primitive types)

let date: Date = new Date()
// array of strings
let colors: string[] = ['red', 'green', 'blue']
// array of numbers
let numbers: number[] = [1,2,3]

// class
class Car {

}

let car: Car = new Car

// object literal
let point: { x:number, y:number} = {
    x: 10,
    y: 10  
}
// function
const logNumber: (i: number) => void = (i:number) => {
    console.log(i)
}

/*  1)  WE NEED TO ADD ANNOTATION WHEN
function that return the 'any' type
*/ 
const json = '{"x": 10, "y":20}'
const coordinates = JSON.parse(json)
console.log(coordinates)

// coordinates is of type any
// any is a type like boolean, string etc
// it means TS has no idea what this is. TS can't check
// this is the case for json parse.

// can fix by annotation
const json2 = '{"x": 10, "y":20}'
const coordinates2: {x: number, y: number} = JSON.parse(json)
console.log(coordinates2)

//2) WHEN WE DECLARE  A VARIABLE ON ONE LINE AND
// INITIALISE IT ALTER

const words = ['red', 'green', 'blue']
// if we declare a variable like this without
// initialising value we annotate
let foundWord: boolean;

for (let i = 0; i < words.length; i ++){
    if(words[i] === 'green'){
        foundWord = true
    }
}

// 3) variable whose type cannot be inferred correctly
// ie this variable is assigned false then is assigned to a number
// this generally isn't a great way of writing code but it can
// be neccessary.
const nums  = [-10, -1, 3];
let numberAboveZero: boolean | number = false

for (let i = 0; i < words.length; i ++){
    if(nums[i] > 0){
        numberAboveZero = nums[i]
    }
}