let boxX = document.getElementById("box-x");
let boxY = document.getElementById("box-y");

let result = document.getElementById("multiplication-result");
let reset = document.getElementById("reset");
let submit = document.getElementById("submit");
let alertMessage = document.getElementById("alert");
alertMessage.classList.add("warning");

let promptModal = document.getElementById("prompt-modal");
let modalCorrect = document.getElementById("modal-correct");
let modalWrong = document.getElementById("modal-wrong");
let modalFinish = document.getElementById("modal-finish");

let play = document.getElementById("play");
let end = document.getElementById("end");
let tryAgain = document.getElementById("try-again");

boxX.addEventListener("click", function () {
    boxX.innerText = Math.floor(Math.random() * 10);
});

boxY.addEventListener("click", function () {
    boxY.innerText = Math.floor(Math.random() * 10);
});

submit.addEventListener("click", function () {
    if (Number.isNaN(parseInt(boxX.innerText)) || Number.isNaN(parseInt(boxY.innerText))) {
        let p = document.createElement("p");
        p.innerText = "Click X AND Y to generate the numbers!";
        alertMessage.appendChild(p);
    } else if (result.value === "") {
        alertMessage.innerText = "You forgot to enter your result!";
    } else {
        if (result.value == (boxX.innerText * boxY.innerText)) {
            promptModal.style.display = "block";
            modalCorrect.style.display = "block";
            modalWrong.style.display = "none";
            modalFinish.style.display = "none";

            play.addEventListener("click", function () {
                promptModal.style.display = "none";
                boxX.innerText = "X";
                boxY.innerText = "Y";
                result.value = "";
                alertMessage.innerText = "";
            });

            end.addEventListener("click", function () {
                modalFinish.style.display = "block";
                modalCorrect.style.display = "none";
                modalWrong.style.display = "none";
            });

        } else {
            promptModal.style.display = "block";
            modalWrong.style.display = "block";
            modalCorrect.style.display = "none";
            modalFinish.style.display = "none";

            tryAgain.addEventListener("click", function () {
                promptModal.style.display = "none";
                result.value = "";
                alertMessage.innerText = "";
            });
        }
    }

});

reset.addEventListener("click", function () {
    boxX.innerText = "X";
    boxY.innerText = "Y";
    alertMessage.innerText = "";
});



