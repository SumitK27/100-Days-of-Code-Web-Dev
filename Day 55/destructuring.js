const input = ["Niko", "Bellic"];

// Normal
const firstName = input[0];
const lastName = input[1];

console.log(firstName);
console.log(lastName);
console.log(input);

// Destructuring
const [first, last] = input;

console.log(first);
console.log(last);
console.log(input);

const job = {
    title: "Developer",
    location: "New York",
    salary: 50000,
};

const { title: jobTitle, location, salary } = job;

console.log(jobTitle);
console.log(location);
console.log(salary);
console.log(job);
