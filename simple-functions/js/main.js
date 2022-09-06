//---Easy
//create a function that subtracts two numbers and alerts the difference

function subTwoNums(a, b) {
    let difference = a - b
    alert(difference)
}
subTwoNums(5, 3)

//create a function that divides three numbers and console logs the quotient

function divideThreeNums(x, y, z) {
    console.log(x / y / z)
}

divideThreeNums(100, 10, 5)

//create a function that multiplys three numbers and returns the product

function multiplyThreeNums(num1, num2, num3) {
    return num1 * num2 * num3
}
console.log(multiplyThreeNums(1, 5, 10))

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function threeNums(one, two, three) {
    return (one + two) % three;
}

console.log(threeNums(5, 10, 2))

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function fourNums(a, b, c, d) {
    if (a * b > 100) {
        console.log((a * b) + c + d);
    } else if (a * b < 100) {
        console.log((a * b) - (c + d))
    } else if (a * b === 100) {
        alert(a * b * c) / d
    }
}
console.log(fourNums(100, 2, 3, 4))