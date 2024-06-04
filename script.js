//const { name } = require("tar/lib/types");

function sendEmails(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,

    }

    emailjs.send("service_qf6tspo","template_xt0sne8",parms).then(alert("Email Sent!!!"));
}