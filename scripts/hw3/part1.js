// Using teaxarea as display of return result
// let submit = document.getElementById("submit");

// submit.addEventListener("click", function () {
//     let average = parseInt(document.getElementById("average").value);
//     let midterm = parseInt(document.getElementById("midterm").value);
//     let final = parseInt(document.getElementById("final").value);
//     let participation = parseInt(document.getElementById("participation").value);

//     let result = document.getElementById("result");

//     if (Number.isNaN(average) || Number.isNaN(midterm) || Number.isNaN(final) || isNaN(participation) || average == ""
//         || midterm == "" || final == "" || participation == "") {
//         result.value = "Error! Inputs can't be empty and must be all numbers!";
//     } else {
//         if (average > 100 || average < 0 || midterm > 100 || midterm < 0 ||
//             final > 100 || final < 0 || participation > 100 || participation < 0) {
//             result.value = "Error! All input numbers have to be between  0 and 100";
//         } else {
//             let finalAverage;
//             finalAverage = Math.round((0.5 * average) + (0.2 * midterm) + (0.2 * final) + (0.1 * participation));

//             switch (true) {
//                 case finalAverage >= 90 && finalAverage <= 100:
//                     result.value = "Your final average: " + finalAverage + "\nYour grade is: A";
//                     break;
//                 case finalAverage >= 80 && finalAverage <= 89:
//                     result.value = "Your final average: " + finalAverage + "\nYour grade is: B";
//                     break;
//                 case finalAverage >= 70 && finalAverage <= 79:
//                     result.value = "Your final average: " + finalAverage + "\nYour grade is: C";
//                     break;
//                 case finalAverage >= 60 && finalAverage <= 69:
//                     result.value = "Your final average: " + finalAverage + "\nYour grade is: D" + "\nStudent must retake the course";
//                     break;
//                 case finalAverage >= 0 && finalAverage <= 59:
//                     result.value = "Your final average: " + finalAverage + "\nYour grade is: F" + "\nStudent must retake the course";
//                     break;
//                 default:
//                     break;
//             }
//         }
//     }
// });

// Using div as display of return result
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let result = document.getElementById("result");

submit.addEventListener("click", function () {
    let average = parseInt(document.getElementById("average").value);
    let midterm = parseInt(document.getElementById("midterm").value);
    let final = parseInt(document.getElementById("final").value);
    let participation = parseInt(document.getElementById("participation").value);

    let span = document.createElement("span");
    span.classList.add("warning");

    if (Number.isNaN(average) || Number.isNaN(midterm) || Number.isNaN(final) || Number.isNaN(participation) || average === ""
        || midterm === "" || final === "" || participation === "") {
        result.innerText = "Error! Inputs can't be empty and must be all numbers!";
        result.insertBefore(span, result.firstChild);
        span.appendChild(result.childNodes[1]);
    } else {
        if (average > 100 || average < 0 || midterm > 100 || midterm < 0 ||
            final > 100 || final < 0 || participation > 100 || participation < 0) {
            result.innerText = "Error! All input numbers have to be between 0 and 100";
            result.insertBefore(span, result.firstChild);
            span.appendChild(result.childNodes[1]);
        } else {
            let finalAverage = Math.round((0.5 * average) + (0.2 * midterm) + (0.2 * final) + (0.1 * participation));
            let retake = document.createElement("p");
            retake.innerText = "Student must retake the course!";
            retake.classList.add("warning");

            switch (true) {
                case finalAverage >= 90 && finalAverage <= 100:
                    result.innerText = "Your final average: " + finalAverage + "\nYour final grade: A";
                    break;
                case finalAverage >= 80 && finalAverage <= 89:
                    result.innerText = "Your final average: " + finalAverage + "\nYour final grade: B";
                    break;
                case finalAverage >= 70 && finalAverage <= 79:
                    result.innerText = "Your final average: " + finalAverage + "\nYour final grade: C";
                    break;
                case finalAverage >= 60 && finalAverage <= 69:
                    result.innerText = "Your final average: " + finalAverage + "\nYour final grade: D";
                    result.appendChild(retake);
                    break;
                case finalAverage >= 0 && finalAverage <= 59:
                    result.innerText = "Your final average: " + finalAverage + "\nYour final grade: F";
                    result.appendChild(retake);
                    break;
                default:
                    break;
            }
        }
    }
});

reset.addEventListener("click", function () {
    result.innerText = "";
});


