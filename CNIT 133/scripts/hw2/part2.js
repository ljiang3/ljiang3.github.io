function getResult() {
    let sum = 0, average = 0, product = 0, smallest, largest, result;

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 == "" || num2 == "" || num3 == "") {
        result = "Error! Inputs can't be empty and must be all numbers!";
        document.getElementById("result").value = result;

    } else {
        sum = num1 + num2 + num3;
        average = parseFloat(sum / 3).toFixed(2);
        product = num1 * num2 * num3;
        smallest = Math.min(num1, num2, num3);
        largest = Math.max(num1, num2, num3);

        result = "Entered 3 numbers are: " + num1 + ", " + num2 + ", " + num3
            + "\nThe sum of 3 numbers: " + sum
            + "\nThe Average of 3 numbers: " + average
            + "\nThe Product of 3 numbers: " + product
            + "\nThe smallest number: " + smallest + "\nThe largest number: " + largest;

        document.getElementById("result").value = result;
    }
}

$(document).ready(function () {
    $("#fade").click(function () {
        $("#result").fadeTo("slow", 0.15);
    });
    $(".removeFade").click(function () {
        $("#result").fadeTo("slow", 1);
    });
});