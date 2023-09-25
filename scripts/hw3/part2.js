let submit = document.getElementById("submit");
let warning = document.createElement("p");
    warning.classList.add("warning");

submit.addEventListener("click", function () {
    let item1 = document.getElementById("item1").value;
    let item2 = document.getElementById("item2").value;
    let item3 = document.getElementById("item3").value;
    let item4 = document.getElementById("item4").value;

    if (item1 === "" || item2 === "" || item3 === "" || item4 === "") {
        warning.innerText= "All input numbers can not be empty!";
        submit.parentNode.insertBefore(warning, submit);
    } else {
        if (item1 < 0 || item2 < 0 || item3 < 0 || item4 < 0) {
            warning.innerText= "All input numbers have to be greater than 0!";
            submit.parentNode.insertBefore(warning, submit);
        } else {
            document.getElementById("item1-sold").value = item1;
            document.getElementById("item2-sold").value = item2;
            document.getElementById("item3-sold").value = item3;
            document.getElementById("item4-sold").value = item4;

            let item1Price = parseFloat((document.getElementById("item1-price").innerText).substring(1));
            let item2Price = parseFloat((document.getElementById("item2-price").innerText).substring(1));
            let item3Price = parseFloat((document.getElementById("item3-price").innerText).substring(1));
            let item4Price = parseFloat((document.getElementById("item4-price").innerText).substring(1));

            let item1Total = item1 * item1Price;
            let item2Total = item2 * item2Price;
            let item3Total = item3 * item3Price;
            let item4Total = item4 * item4Price;

            let totalSold = item1Total + item2Total + item3Total + item4Total;
            let totalEarnings = (250 + totalSold * 0.09);

            document.getElementById("item1-total").value = item1Total.toFixed(2);
            document.getElementById("item2-total").value = item2Total.toFixed(2);
            document.getElementById("item3-total").value = item3Total.toFixed(2);
            document.getElementById("item4-total").value = item4Total.toFixed(2);
            document.getElementById("total-sold").value = totalSold.toFixed(2);
            document.getElementById("total-earnings").value  = totalEarnings.toFixed(2);
        }
    }

});

reset.addEventListener("click", function () {
    warning.innerText = "";
});

$(document).ready(function () {
    $("#seller-name").tooltip({
        content: "Please make sure that the salesperson's name is spelled correctly.",
        track: true
    });
});