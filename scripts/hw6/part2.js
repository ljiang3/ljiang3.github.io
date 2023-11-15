let search = document.getElementById("search");

search.addEventListener("click", function () {
    let content = document.getElementById("content").value.toLowerCase();
    let character = document.getElementById("character").value;
    let count = 0;
    let output = document.getElementById("output");

    if (content === "" || character === "") {
        output.innerText = "Please enter both content and a character in the desiged field!";
        output.classList.add("warning");
    } else {
        for (let i = 0; i < content.length; i++) {
            if (content.charAt(i) == character.toLowerCase()) {
                count++;
            }
        }

        if (count > 0) {
            output.classList.remove("warning");
            output.innerText = "The character \"" + character + "\" shows up in the content: " + count + (count > 1 ? " times" : " time");
        } else {
            output.innerText = "";
            const width = 300, height = 100;
            const left = (screen.width / 2) - (width / 2);
            const top = (screen.height / 2) - (height / 2);
            let newWindow = window.open("/hw6/part2Window.html", "no found", "width =" + width + ", height = " + height + ", top =" + top + ",left=" + left);
            newWindow.document.write("<p>Search character \'" + character + "\' not found in the content you typed.</p>");
        }
    }
});