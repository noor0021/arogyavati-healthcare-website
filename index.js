
    
    document.addEventListener('DOMContentLoaded', function() {
            const appointmentBtn = document.querySelector(".btn-outline");

        if (appointmentBtn) {
            appointmentBtn.addEventListener('click', function(event) {
                event.preventDefault();
                alert("Thank you for choosing Arogyavati! We are redirecting you to our appointment scheduler.");
                window.location.href = "contact.html#appointment";
            });
        }
    });
