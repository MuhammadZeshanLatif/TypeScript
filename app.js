// let message: string = "Hello typescript";
// let firstyName = "Muhammad Zeeshan ";
// let laastName: string = "Latif";
// let fullName: string = firstyName + laastName;
// let sentence: string = "My name is Zeeshan and I am Hafi";
// let sentence2: string = "My name is Zeeshan and I am Hafiz";
// let sentenceLength: number = sentence.length;
// let upperCaseText: string = sentence.toUpperCase();
// let lowerCaseText: string = sentence.toLowerCase();
// let longString: string = sentence.slice(0, 11);
// let product: string = "Badam";
// let price: number = 10;
// let display: string = `The ${product} has price is ${price}`;
// function isEven(a: number) {
//   return a%4==0 && a%8==0;
// }
var Person = /** @class */ (function () {
    function Person() {
        this.name = "";
        this.age = 0;
    }
    Person.prototype.greting = function () {
        return "My name is " + this.name + " and i am " + this.age + " years old";
    };
    return Person;
}());
var obj = new Person();
obj.name = "Zeeshan";
obj.age = "145";
console.log(obj.greting());
