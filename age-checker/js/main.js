//Create a conditonal that checks their age

document.querySelector('h1').addEventListener('click', ageCheck)

let p = document.querySelector('p')

function ageCheck(){
    let age = Number(document.querySelector('input').value);

//If under 16, tell them they can not drive
if (age < 16) {
    p. innerText = ("you can't drive");
    //If under 18, tell them they can't hate from outside the club, because they can't even get in
} else if (age < 18) {
    p. innerText = ("can't hate from outside the club, because they can't even get in")
    //If under 21, tell them they can not drink
} else if (age < 21) {
    p. innerText = ("can not drink")
    //If under 25, tell them they can not rent cars affordably
} else if (age < 25) {
    p. innerText = ("can not rent cars affordably")
    //If under 30, tell them they can not rent fancy cars affordably
} else if (age < 30) {
    p. innerText = ("can not rent fancy cars affordably")
    //If under over 30, tell them there is nothing left to look forward too
} else if (age < 30 || age > 30) {
    p. innerText = ("there is nothing left to look forward too")
} else {
    p. innerText = ("Something cool")
}
}



//--- Harder
//On click of the h1






//Take the value from the input
//Place the result of the conditional in the paragraph
