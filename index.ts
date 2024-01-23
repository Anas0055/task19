// . Dinner Guests: Working with one of the programs from Exercises 14 through 18, print 
// a message indicating the number
// of people you are inviting to dinner.

let dinnerGuests = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

for (let i = 0, numberOfGuests = 0; i < dinnerGuests.length; i++) {
    numberOfGuests++;
}

console.log(`Number of guests invited to dinner: ${numberOfGuests}`);
