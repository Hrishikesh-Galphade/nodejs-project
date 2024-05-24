// // Declare veraible is javascripts with all the data types
// var name = "John Doe"; // string
// console.log(name)
// var age;
// console.log(age) // undefined


// //Constant declarations
// const isMarried = false; // boolean
// console.log(isMarried)
// //isMarried = true; // We can not chnage const veraible value once after its declartions.
// //console.log(isMarried)

// //Declare person Object
// const person = {
//     name: "John Doe",
//     age: 30,
//     isMarried: false
// };

// person.name = "Open Ai"; // Change the value of a property Its allowed for the object even we have declare it as constatnt
// console.log(person)


// let fruits = "a"
// console.log(fruits)

//hoistic effect
// console.log(a)
// var a= 10
// let a = 10; // error: cannot access 'a' before initialization

// //Dyanic natures of javascript example / Implicit Type conversion or casting
// a=10
// console.log(a)
// console.log(typeof a)
// a="hello"
// console.log(a)
// console.log(typeof a)
// a=true
// console.log(a)
// console.log(typeof a)
// a={name: "John Doe"}
// console.log(a)
// console.log(typeof a)

// //Explicit conversions of veriable functions in javascript
// var a=10
// console.log(a)
// console.log(typeof a)

// a= "10.10"
// console.log(a)
// console.log(typeof a)
// b= Number(a)
// console.log(b)
// console.log(typeof b)
// console.log(Boolean(10))
// console.log(Boolean(0))
// console.log(Boolean(-10))
// console.log(Boolean(-1))
// console.log(String(10))

// //Expresions evaluations and precedence in javascript for diffrent types
// var a = 10 // number
// var b = "fhgfhgfhgfhfg" // string
// var c = 12 // boolean
// console.log(a + c + b) // 1010
// console.log(a + b + c) //

//Type comparision examples with diffrent scenario
// console.log(10 == "10") // true
// console.log(10 === "10") // false

// console.log(10 == 10.10) //false
// console.log(10 === 10.10) // false

console.log(10 == true) // false
console.log(Boolean(0) == true) // false
console.log(Boolean(10) == true) // true
console.log(Boolean(-10) == true) // true
console.log(10 === true) // false

// console.log(0 == false) // true
// console.log(0 === false) // false
// console.log(10 != "10") // false
// console.log(10 !== "10") // true
















