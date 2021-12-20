// Normal Object
const job = {
    title: "Developer",
    location: "New York",
    salary: 50000,
};

const job2 = {
    title: "Cook",
    location: "Munich",
    salary: 33000,
};

// Object using Class
class Job {
    constructor(title, location, salary) {
        this.title = title;
        this.location = location;
        this.salary = salary;
    }

    describe() {
        console.log(
            `I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`
        );
    }
}

const developer = new Job("Developer", "New York", 50000);
const cook = new Job("Cook", "Munich", 33000);

console.log(developer);
developer.describe();

console.log(cook);
cook.describe();
