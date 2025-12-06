
        document.addEventListener('DOMContentLoaded', function() {
        
        const form = document.querySelector('.contact-form');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const submitBtn = document.querySelector('.contact-form .btn-primary');

        if (form) {
            form.addEventListener('submit', function(event) {
                
                let isValid = true;
                const nameValue = nameInput.value.trim();
                const emailValue = emailInput.value.trim();
                
                function displayError(inputElement, message) {
                    inputElement.style.border = '2px solid red';
                    inputElement.placeholder = message;
                    inputElement.focus();
                }

                nameInput.style.border = '1px solid #ddd';
                emailInput.style.border = '1px solid #ddd';

                if (!isValid) {
                    event.preventDefault();
                
                    alert("Please correct the errors in the form before sending the message.");
                } else {
                  
                    event.preventDefault();
                    alert("✅ Message Sent Successfully! We will contact you soon.");
                    form.reset();
                }
            });
        }
        
            const originalText = submitBtn.textContent;
            
            submitBtn.addEventListener('mouseover', function() {
                this.textContent = 'Ready to Send!';
            });
            
            submitBtn.addEventListener('mouseout', function() {
                this.textContent = originalText;
            });
        }

        
        )
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');

if (emailInput) {
    emailInput.addEventListener("input", () => {
      
        emailError.textContent = 
            emailInput.value.includes("@") ? "" : "Invalid Email";
            
        
        if (!emailInput.value.includes("@") && emailInput.value.length > 0) {
            emailInput.style.borderColor = "red";
            emailError.style.color = "red";

        } else {
            emailInput.style.borderColor = "#eee"; 
        }
    });
}

