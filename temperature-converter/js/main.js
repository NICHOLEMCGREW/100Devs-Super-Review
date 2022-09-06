//Write your pseduo code first! 

document.querySelector('h1').addEventListener('click', convert);

function convert() {
    // pull temp
    let enteredVal = Number(document.querySelector('input').value)
    // convert temp
    let temp = enteredVal * 1.8 + 32
    // display temp
    document.querySelector('h2').innerText = temp;
}



