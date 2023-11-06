// Using the onchange event handler
function openNewPage(part2Form) {
    let destination = part2Form.news1.options[part2Form.news1.selectedIndex].value;
    window.open(destination, "_blank");
}

//Using the onclick event handler
function goToNewPage(part2Form) {
    let destination = part2Form.news2.options[part2Form.news2.selectedIndex].value;
    window.open(destination, "_blank");
}

//Generate options
const newsWebsite =
    [{ url: "", name: "--Please select one--" },
    { url: "https://www.nbcnews.com/", name: "NBC News" },
    { url: "https://www.cnn.com/", name: "CNN News" },
    { url: "https://www.foxnews.com/", name: "Fox News" },
    { url: "https://www.washingtonpost.com/", name: "Washington Post" },
    { url: "https://www.npr.org/", name: "NPR News" },
    { url: "https://www.nytimes.com/", name: "The New York Times" },
    ];

createDropDownMenu(2);
function createDropDownMenu(menuCount) {
    for (let i = 1; i <= menuCount; i++) {
        let news = document.getElementById("news"+i);
        for (let j = 0; j < newsWebsite.length; j++) {
            let option = document.createElement("option");
            option.value = newsWebsite[j].url;
            option.innerText = newsWebsite[j].name;
            news.appendChild(option);
        }
    }
}

