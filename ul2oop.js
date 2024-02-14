class Person {
    constructor(){
        this.firstname = "";
        this.lastname = "";
        this.age = 0;
    }
}
class Student {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}

const person1 = new Person();
person1.firstname = "John";
person1.lastname = "Doe";
person1.age = 25;

const person2 = new Person();
person2.firstname = "Alice";
person2.lastname = "Smith";
person2.age = 30;

const person3 = new Person();
person3.firstname = "Bob";
person3.lastname = "Johnson";
person3.age = 22;



const student1 = new Student("Emma", "Brown", 21);
const student2 = new Student("Michael", "Taylor", 23);
const student3 = new Student("Sophia", "Anderson", 20);

console.log("Persons:");
console.log(person1);
console.log(person2);
console.log(person3);

console.log("Students:");
console.log(student1);
console.log(student2);
console.log(student3);