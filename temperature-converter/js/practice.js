document.querySelector('h1').addEventListener('click', convert);

function convert() {
    let enteredVal = Number(document.querySelector('input').value)
    let temp = enteredVal * 1.8 + 32
    document.querySelector('h2').innerText = temp;
}