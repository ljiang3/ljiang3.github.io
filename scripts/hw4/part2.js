
createTable(3, 6, 3);

function createTable(numberOfTables, rows, columns) {
    let tables = document.getElementById("tables");
    const interestRates = [0.05, 0.06, 0.07];
    const tableHead = ["Year", "Amount on deposit", "Interest Rate"];
    let principle = 1000;

    for (let i = 0; i < numberOfTables; i++) {
        let h3 = document.createElement("h3");
        let title = "Table " + (i + 1) + " with Interest Rate " + (interestRates[i] * 100).toFixed(0) + "%";
        h3.appendChild(document.createTextNode(title));
        tables.appendChild(h3);

        let table = document.createElement("table");
        tables.appendChild(table);

        for (let j = 0; j < rows; j++) {
            let tr = document.createElement("tr");
            table.appendChild(tr);

            for (let k = 0; k < columns; k++) {
                if (j == 0) {
                    let th = document.createElement("th");
                    th.innerText = tableHead[k];
                    tr.appendChild(th);
                    tr.classList.add("table-head");
                } else {
                    let td = document.createElement("td");
                    tr.appendChild(td);
                    if (j % 2 == 1) {
                        tr.classList.add("table-data-odd");
                    } else {
                        tr.classList.add("table-data-even");
                    }
                    // Fill the table data
                    switch (k) {
                        case 0:
                            td.innerText = j;
                            break;
                        case 1:
                            td.innerText = compoundInterest(principle, interestRates[i], j);
                            break;
                        case 2:
                            td.innerText = interestRates[i];
                            break;
                        default:
                            break;
                    }
                }
            }

        }
    }
}

function compoundInterest(principle, interestRate, year) {
    return (principle * Math.pow((1 + interestRate), year)).toFixed(2);
}


