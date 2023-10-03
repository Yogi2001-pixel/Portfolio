var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// Email JS Code
let buttonValue = document.getElementById("button");
buttonValue.addEventListener("click", (event) => {
    event.preventDefault();

    // Get input field values
    const firstName = document.querySelector("#firstname").value.trim();
    const lastName = document.querySelector("#lastname").value.trim();
    const email = document.querySelector("#mailInput").value.trim();
    const mobileNumber = document.querySelector("#mobileNumber").value.trim();
    const message = document.querySelector("#messageInput").value.trim();

    // Check if any of the fields are empty
    if (firstName === "" || lastName === "" || email === "" || mobileNumber === "" || message === "") {
        alert("Form Filling Is Mandatory");
    } else {
        const details = {
            first_name: firstName,
            last_name: lastName,
            email_id: email,
            mobile_number: mobileNumber,
            message: message,
        };

        emailjs.send("service_197qkbp", "template_bewxq2p", details).then(function (response) {
            alert("Your Message has been sent Successfully");
        }, function (error) {
            alert("Failed");
        });
    }
});  // Email JS Code Ends