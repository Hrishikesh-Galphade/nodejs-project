a=[1,2,3,4,5,6,7,8,9,10]

console.log("for loop")
for(i=0;i<a.length;i++){
    console.log(a[i])
}

console.log("for in loop")
for(i in a){
    console.log(a[i])
}

console.log("for of loop")
for(i of a){
    console.log(i)
}

console.log("forEach loop")
a.forEach((element,index) => {
    console.log(index.toString() + ": " + element.toString());
});

console.log("while loop")
i=0
while(i<a.length){
    console.log(a[i])
    i++
}

console.log("do while loop")
i=0
do{
    console.log(a[i])
    i++
}while(i<a.length)

console.log("break loop")
for(i=0;i<a.length;i++){
    if(a[i]==5){
        break
    }
    console.log(a[i])
}


//Switch case use
a=[1,2,3,4,5,6,7,8,9,10]
b=5
switch(b){
    case 1:
        console.log("   One")
        break
    case 2:
        console.log("   Two")
        break
    case 3:
        console.log("   Three")
        break
    case 4:
        console.log("   Four")
        break
    case 5:
        console.log("   Five")
        break    
    case 6:
        console.log("   Six")
        break
    case 7:
        console.log("   Seven")
        break
    case 8:
        console.log("   Eight")
        break
    case 9:
        console.log("   Nine")
        break
    case 10:
        console.log("   Ten")
        break        
    default:
        console.log("   Invalid number")
        break
}   

// for in lopp for object
var person= {
    name:"John",
    age:30,
    city:"New York"
}

console.log(person.name)
console.log(person.age)
console.log(person.city)

for(var key in person){
    console.log(key + ": "   + person[key ])
}

//Array Operations
a=[1,2,3,4,5,6,7,8,9,10]
console.log(a.length)
console.log(a[0])
console.log(a[9])
console.log(a.indexOf(5))
console.log(a.lastIndexOf(5))   
console.log(a.includes(5))
console.log(a.includes(11))
console.log(a.join(", "))
console.log(a.toString())
console.log(a.reverse())
console.log(a.sort())
console.log(a.concat([11,12,13]))
console.log(a.slice(2,5))
console.log(a.splice(2,2,[11,12]))
       