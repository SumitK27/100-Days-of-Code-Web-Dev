let person = {
    // Property
    name: "Niko",

    // Method
    setName(name) {
        this.name = name;
    },

    getName() {
        console.log(this.name);
    },

    greet() {
        console.log("Hello " + this.name + "!");
    },
};

person.getName();
person.greet();

person.setName("Roman");
person.getName();
person.greet();

let userName = "Niko";

console.log(userName.length);
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.charAt());
console.log(userName.charAt(3));
