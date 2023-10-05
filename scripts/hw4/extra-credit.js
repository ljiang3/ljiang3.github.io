let form = document.querySelector(".extra-credit");
let p = document.createElement("p");
p.classList.add("warning");

let generate = document.getElementById("generate");
let reset = document.getElementById("reset");

generate.addEventListener("click", function () {
    let number = document.getElementById("input-number").value;
    if (number === "") {
        p.innerText = "Input can not be empty!";
        generate.parentNode.insertBefore(p, generate);
    } else if (number < 2 || number > 10) {
        p.innerText = "Input number has to be between 2(inclusive) and 10(inclusive)"
        generate.parentNode.insertBefore(p, generate);
    } else {
        let str = "";
        str = "<pre>"
        for (let i = 0; i < number; i++) {
            for (let j = 0; j < number; j++) {
                if (i == 0 || i == (number - 1) || j == 0 || j == (number - 1)) {
                    str += "* ";
                } else {
                    str += "  ";
                }
            }
            str += "<br>";
        }
        str += "</pre>"
        p.innerHTML = str;
        p.setAttribute("style", "font-size: 24px;");
        form.appendChild(p);
    }
});

reset.addEventListener("click", function () {
    p.innerText = "";
});
