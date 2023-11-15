let submit = document.getElementById("submit");

submit.addEventListener("click", function () {
    let number = document.getElementById("number").value;
    let numRegExp = /^(\d+)(\.)(\d{4,})$/;
    let output = document.getElementById("output");

    if (number === "") {
        output.innerText = "Input is empty! Please enter a number with 4 decimals.";
        output.classList.add("warning");
    } else if (!numRegExp.test(number)) {
        output.innerText = "Number has to be AT LEAST 4 decimals.";
        output.classList.add("warning");
    }
    else {
        output.classList.remove("warning");
        output.innerText = "You typed number: " + number
            + "\nRounded to the nearest integer = " + Math.round(number)
            + "\nSquare root rounded to integer = " + Math.round(Math.sqrt(number))
            + "\nRounded to the nearest 10th position =  " + Math.floor(number * 10 + 0.5) / 10
            + "\nRounded to the nearest 100th position =  " + Math.floor(number * 100 + 0.5) / 100
            + "\nRounded to the nearest 1000th position =  " + Math.floor(number * 1000 + 0.5) / 1000;
    }

})