// Test framework
function test (message, cb) {
    try{
        cb();
        console.log("👍", message);
    } catch (error){
        console.error(error);
        console.log("❌", message);
    }
}

// Assertion
function expect(actual) {
    return  {
        isEqualTo: function (expected) {
            if (actual !== expected){
                throw new Error(`${actual} is not equal to be ${expected}`)
            }
        }
    }
}

function sum(numA, numB) {
    return numA + numB;
}
function testAdd () {
    let result = sum(4, 5);
    expect(result).isEqualTo(9);
}

test("adding 4 & 5", testAdd);

test("adding 10 & 10", () => {
    expect(sum(10, 10)).isEqualTo(20);
});
test("adding 3 & 8", () => {
    expect(sum(3, 8)).isEqualTo(11);
});
test("adding 20 & 40", () => {
    expect(sum(20, 40)).isEqualTo(60);
});
test("adding 85 & 15", () => {
    expect(sum(85, 15)).isEqualTo(100);
});

// ------------------------------------


function multiply(numA, numB) {
    return numA * numB;
}
function testMultiply () {
    let result = multiply(4, 5);
    expect(result).isEqualTo(20);
}

test("multiplying 4 & 5", testMultiply);

test("multiplying 10 & 10", () => {
    expect(multiply(10, 10)).isEqualTo(100);
});
test("multiplying 3 & 8", () => {
    expect(multiply(3, 8)).isEqualTo(24);
});
test("multiplying 20 & 40", () => {
    expect(multiply(20, 40)).isEqualTo(800);
});
test("multiplying 85 & 15", () => {
    expect(multiply(85, 15)).isEqualTo(1275);
});