// hw7 - main
$(document).ready(function () {
    $('.content').hide();
    $('.container h3').toggle(
        function () {
            $(this).next('.content').slideDown();
            $(this).addClass('close');
        },
        function () {
            $(this).next('.content').fadeOut();
            $(this).removeClass('close');
        }
    ); // end toggle
}); // end ready

// hw7- part1
let radios = document.getElementsByName("background-color");
let checkboxes = document.getElementsByName("font-style");
let select = document.getElementById("font-size");
let contentArea = document.getElementById("content-area");
let paragraphs = document.querySelectorAll("#content-area p");

const propertySet = [
    { name: "text-decoration", check: "underline", uncheck: "none" },
    { name: "font-weight", check: "bold", uncheck: "normal" },
    { name: "font-style", check: "italic", uncheck: "normal" },
]

//change background color
for (let i = 0; i < radios.length; i++) {
    radios[i].onclick = function () {
        contentArea.style.setProperty("background-color", radios[i].value);
        contentArea.style.setProperty("color", "white");
    }
}

//change font style
switchFontStyle(checkboxes, propertySet);
function switchFontStyle(elements, objects) {
    elements.forEach((e, index) => {
        e.addEventListener("click", function () {
            if (e.checked) {
                contentArea.style.setProperty(objects[index].name, objects[index].check);
            } else {
                contentArea.style.setProperty(objects[index].name, objects[index].uncheck);
            }
        });
    });
}

//change font size
function changeFontSize() {
    contentArea.style.setProperty("font-size", select.value);
    paragraphs.forEach((p) => {
        p.style.setProperty("font-size", select.value);
    });
}

//hw7 - part2
let dropdownLists = document.querySelectorAll(".dropdown-list");
let dropdownContents = document.querySelectorAll(".dropdown-content");
dropdownLists.forEach((list, index) => {
    list.addEventListener("mouseover", function () {
        dropdownContents[index].style.display = "block";
    });

    list.addEventListener("mouseout", function () {
        dropdownContents[index].style.display = "none";
    });
   
});








