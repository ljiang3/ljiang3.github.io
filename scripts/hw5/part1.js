// validation for form inputs
$(document).ready(function () {
    $("#part1Form").validate({
        rules: {
            fullName: "required",
            age: "required",
            browser: {
                required: true,
                minlength: 1
            },
            movieType: "required",
        },
        
        messages: {
            fullName: "Please enter your full name",
            age: "Please select your age",
            browser: "Please select the browser you used",
            movieType: "Please select your preferred moive type",
        },

        submitHandler: function (form) {
            $('#output').html("<p>Thanks, your data was submitted!</p>").hide().fadeIn(100);
            $('#output').css({
                "border-color": "#ad76b1",
                "border-width": "1px",
                "border-style": "solid", "padding": "5px"
            });
        },

        /* the following is needed to place an error msg after the radio and checkbox elements */
        errorPlacement: function (error, element) {
            if (element.is(":radio") || element.is(":checkbox")) {
                error.appendTo(element.parent());
            } else {
                error.insertAfter(element);
            }
        } // end errorPlacement
    });
});