let p = document.getElementById('peep')
function turnG() {
    p.style.fontSize = "30px";
    p.style.fontFamily = "monospace"
    p.style.background = "#b0bac0"
}

let dogs = [{ name: "stacy", age: 21 }, { name: "daisy", age: 19 }]


// 14 methods of javascript

// Regular
console.log("Hello World")

// Interpolated
console.log('My name is %s Khan', 'Farhan')

// Styled
console.log('%c This is styled text', 'font-size:74px; font-family:monospace; background:red; text-shadow:7px 7px blue')

// Table
console.table(dogs)

// Warning
console.warn("This is a WARn");

// Error
console.error("An Error")

// Info
console.info("An Info")

// Testing
console.assert(1 !== 1, "Yeah you are wrong")

// Clearing
console.clear()

// Viewing DOM Elements
console.log(p)
console.dir(p)

// Grouping Together
dogs.forEach(dogs => {
    console.groupCollapsed(dogs.name)  
    console.log(`The name of dog is ${dogs.name}`)
    console.log(`The age of ${dogs.name} is ${dogs.age}`)
    console.groupEnd(dogs.name);

})

// Counting
console.count("Wes")
console.count("Wes")
console.count("Wes")
console.count("Wes")
console.count("Wes")
console.count("Wes")

// Timing  
console.time();
console.count("Wes")
console.count("Wes")
console.count("Wes")
console.count("Wes")
console.count("Wes")
console.count("Wes")
console.timeEnd()
