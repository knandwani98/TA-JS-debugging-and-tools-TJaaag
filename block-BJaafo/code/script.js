function fullName (firstName = "", lastName = ""){
    return firstName + " " + lastName;
}

let person = fullName("Kushal", "Nandwani");
let expectaion = "Kushal Nandwan";

if (person !== expectaion) {
    throw new Error (`person is not equal to expectation`)
}

let person2 = fullName("John", "Snow");
let expectaion2 = "John Snow";
if (person2 !== expectaion2) {
    throw new Error (`person is not equal to expectation`)
}

// -----------------------------------------------------

function totalAmount(amount, taxRate) {
   return amount + (amount * taxRate)
}

let bill1 = totalAmount(4, 5);
let amount1 = 23;
if (bill1 !== amount1) {
    throw new Error (`bill1 is not equal to amount1`)
}

let bill2 = totalAmount(8, 2.5);
let amount2 = 28;
if (bill2 !== amount2) {
    throw new Error (`bill2 is not equal to amount2`)
}