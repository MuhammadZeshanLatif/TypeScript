var message = "Hello typescript";
var firstyName = "Muhammad Zeeshan ";
var laastName = "Latif";
var fullName = firstyName + laastName;
var sentence = "My name is Zeeshan and I am Hafi";
var sentence2 = "My name is Zeeshan and I am Hafiz";
var sentenceLength = sentence.length;
var upperCaseText = sentence.toUpperCase();
var lowerCaseText = sentence.toLowerCase();
var longString = sentence.slice(0, 11);
var product = "Badam";
var price = 10;
var display = "The ".concat(product, " has price is ").concat(price);
function isEven(a) {
    var isEven = true;
    if (a % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(2));
