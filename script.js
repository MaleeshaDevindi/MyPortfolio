function sendEmails() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return false; 
    }

    let params = {
        name: name,
        email: email,
        message: message
    };

    emailjs.send("service_qf6tspo", "template_xt0sne8", params)
        .then(function(response) {
            alert("Email Sent!!");
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("message").value="";
        }, function(error) {
            alert("Failed to send email. Please try again.");
        });

    return false; 
}
