$('input[name="phoneNumber"]').mask('(000) 000-0000');

let process = document.getElementById("process");

process.addEventListener("click", function () {
    let phoneNumber = document.getElementById("phoneNumber").value;
    let output = document.getElementById("output");
    let phoneNumRegExp = /^(\()(\d{3})(\))(\s)(\d{3})(-\d{4})$/;

    if (phoneNumber === "") {
        output.innerText = "Please enter a phone number before process!";
        output.classList.add("warning");
    }else if(!phoneNumRegExp.test(phoneNumber)){
        output.innerText = "Phone number format is not correct! Correct format: (999) 999-9999";
        output.classList.add("warning");
    }else{
        output.innerText="";
        let phoneNumberSplit = phoneNumber.split(/[\\(\\)\s-]+/);
       
        document.getElementById("areaCode").value = phoneNumberSplit[1];
        document.getElementById("prefix").value = phoneNumberSplit[2];
        document.getElementById("lineNumber").value = phoneNumberSplit[3];
    }
});
