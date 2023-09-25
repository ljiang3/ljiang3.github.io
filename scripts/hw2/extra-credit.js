function exchange() {
    let euroRate = parseFloat(document.getElementById("euroRate").innerText).toFixed(2);
    let canRate = parseFloat(document.getElementById("canRate").innerText).toFixed(2);
    let hkRate = parseFloat(document.getElementById("hkRate").innerText).toFixed(2);
    let japRate = parseFloat(document.getElementById("japRate").innerText).toFixed(2);
    let mexRate = parseFloat(document.getElementById("mexRate").innerText).toFixed(2);

    let userAmount = parseFloat(document.getElementById("userAmount").value);
    if(userAmount == "" || isNaN(userAmount)){
        document.getElementById("userAmount").style.backgroundColor = "#ad76b1";
        document.getElementById("userAmount").value="Enter amount!";
    }else{
        document.getElementById("userAmount").style.backgroundColor = "white";

        document.getElementById("euroValue").value = (euroRate * userAmount).toFixed(2);
        document.getElementById("canValue").value = (canRate * userAmount).toFixed(2);
        document.getElementById("hkValue").value = (hkRate * userAmount).toFixed(2);
        document.getElementById("japValue").value = (japRate * userAmount).toFixed(2);
        document.getElementById("mexValue").value = (mexRate * userAmount).toFixed(2);
        document.getElementById("userAmount").value = userAmount.toFixed(2);
    }
}
   
$(document).ready(function(){
    //To hide instruction by Default
    $("#currency-table").hide();

    //Toggle Show/Hide instructions 
    $("#show-hide-btn").click(function () {
        $("#currency-table").slideToggle("slow");
    });

    //color the input text box to the right of 'Enter Amount of U.S. Dollars' when the user clicks in that box
    $('#userAmount').focus(function() {
        $(this).css('background-color','#ad76b1');
    }); 

    //remove the input text ox background
    $("#remove-bg").click(function () {
        $("#userAmount").css("background-color", "white");
    });  
    
});

