function validateAndSendMail(){
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      const emailField = document.getElementById('email');
      const errorMessage = document.getElementById('errorMessage');
      
      // Regular expression for validating email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!emailRegex.test(emailField.value)) {
        event.preventDefault(); // Prevent form submission
        errorMessage.textContent = 'Please enter a valid email address.';
      } else {
        errorMessage.textContent = ''; // Clear any previous error message
      }
    });
    function  sendMail(){
      let parms = {
          name : document.getElementById("name").value,
          email : document.getElementById("email").value,
          phone : document.getElementById("subject").value,
          send : document.getElementById("message").value,
      }
    
      emailjs.send("service_dpc2upp","template_va7r0m4",parms).then(alert("Email sent!!"))
    }
    }