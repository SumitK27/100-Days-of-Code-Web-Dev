// ========== FOR LOOP ==========
// loop starts with the value of 'i' as 0 and runs till 'i' becomes 9 and 'i' is incremented by one in each iteration.
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// ========== FOR OF LOOP ==========
const users = ["Niko", "Roman", "Carl", "Tommy"];
// New variable will be created for each iteration.
for (const user of users) {
    console.log(user);
}

// ========== FOR IN LOOP ==========
const loggedInUser = {
    name: "Niko",
    age: 26,
    isAdmin: true,
};

for (const propertyName in loggedInUser) {
    console.log(propertyName + ": " + loggedInUser[propertyName]);
}

// ========== WHILE LOOP ==========

let isFinished = false;

while (!isFinished) {
    isFinished = confirm("Do you want to quit?");
}

console.log("DONE");
