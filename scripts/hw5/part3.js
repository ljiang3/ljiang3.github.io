const census = [
    ["AL", "Alabama", "Montgomery", 4903185],
    ["AK", "Alaska", "Juneau", 731545],
    ["AZ", "Arizona", "Phoenix", 7278717],
    ["AR", "Arkansas", "Little Rock", 3017825],
    ["CA", "California", "Sacramento", 39512223],
    ["CO", "Colorado", "Denver", 5758736]
];
const censusName = ["State abbr", "State Name", "Capital", "Population"];

let submit = document.getElementById("submit");
let output = document.getElementById("output");
let stateCensus = "";

submit.addEventListener("click", function () {
    let stateName = document.getElementById("stateName").value.toLowerCase().trimStart().trimEnd();
    if (stateName === "") {
        output.innerText = "Please enter a state abbreviation or full name!";
        output.classList.add("warning");
    } else if (containsNumbers(stateName)) {
        output.innerText = "Invalid state abbr/full name, your input has to be all letters.";
        output.classList.add("warning");
    }
    else {
        if (hasState(stateName)) {
            output.innerText = stateCensus;
        } else {
            output.innerText = "Sorry, we do not have information about this state! \nWe only have information about "
                + getStateName(census) + "."
                + "\nPlease enter the state in our database.";
        }
    }
});

function hasState(stateName) {
    for (let i = 0; i < census.length; i++) {
        if (stateName == census[i][0].toLowerCase() || stateName == census[i][1].toLowerCase()) {
            stateCensus = "Thanks for your inquiry, here is the information you requested:\n";
            for (let j = 0; j < census[i].length; j++) {
                stateCensus += censusName[j] + " = " + ((j == census[i].length - 1) ? census[i][j].toLocaleString() : census[i][j]) + "\n";
            }
            output.classList.remove("warning");
            return true;
        }
    }
    output.classList.add("warning");
    return false;
}

function getStateName(census) {
    let str = "";
    for (let i = 0; i < census.length; i++) {
        str += census[i][1] + ((i == census.length - 1) ? "" : ", ");
    }
    return str;
}

function containsNumbers(str) {
    return /\d/.test(str);
}

