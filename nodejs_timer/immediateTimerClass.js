// Node.js program to demonstrate the Immediate Class methods

// Setting Immediate by setImmediate Method
var Immediate = setImmediate(function alfa() {
    console.log("0.>",12);
});

// Printing Immediate.hasRef method
console.log("1.>",Immediate.hasRef());
// Returns true

// Printing Immediate.ref before unref
console.log("2.>",Immediate.ref());
// Returns timer reference

// Printing Immediate.unref method
console.log("3.>",Immediate.unref());
// Returns Immediate reference and sets hasRef to false

// Printing Immediate.hasRef before unref
console.log("4.>",Immediate.hasRef());
// Returns false

// Clears setInterval Immediate
clearImmediate(Immediate);

// Prints after clearing Immediate
console.log("5.>",2);
