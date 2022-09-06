// *Variables*
// Create a variable and console log the value

let favNum = 29;
console.log(favNum)

// Create a variable, add 10 to it, and alert the value

let num = 55
num += 10
alert(num);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFourNums(a, b, c, d) {
    alert(a - b - c - d);
}


// Create a function that divides one number by another and returns the remainder

function divideNums(num1, num2) {
    return (num1 % num2) 
}


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoNums(num1, num2) {
    let sum = num1 + num2;
    if (sum > 50) {
        alert('Jumanji')
    } 
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyThreeNums(a, b, c) {
    let product = a * b * c;
    if (product % 3 === 0) {
        alert('ZEBRA');
    } 
}
console.log(multiplyThreeNums(2, 2, 2))

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordAndNum(word, num) {
    for(let i = 0; i < num; i++) {
        console.log(word);
    }
}

wordAndNum('fly', 5)
