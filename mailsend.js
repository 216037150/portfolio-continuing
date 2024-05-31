function sendMessage() {
    (function () {
      emailjs.init("xSpbX9MCq3BRrB199"); // Account Public key
    })();
  
    var params = {
      FullName: document.querySelector("#FullName").value,
      Email: document.querySelector("#Email").value,
      Subject: document.querySelector("#Subject").value,
      Message: document.querySelector("#Message").value
    };
  
    console.log(params);
  
    var serviceID = "service_sr97xy8"; // Email Service ID
    var templateID = "template_7fi70m6"; // Email template ID
  
    emailjs.send(serviceID, templateID, params)
      .then(res => {
        alert("Email sent successfully");
        // clear the form
        document.getElementById('contact-form').reset();
      })
      .catch(err => {
        alert("Failed to send email: " + JSON.stringify(err));
      });
  }
  