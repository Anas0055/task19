// . Dinner Guests: Working with one of the programs from Exercises 14 through 18, print 
// a message indicating the number
// of people you are inviting to dinner.
var dinnerGuests = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
var numberOfGuests = 0;
for (var i = 0; i < dinnerGuests.length; i++) {
    numberOfGuests++;
}
console.log("Number of guests invited to dinner: ".concat(numberOfGuests));
