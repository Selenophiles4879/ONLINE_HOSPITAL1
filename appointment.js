 // Form validation function
        document.getElementById('appointmentForm').addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const payment = document.getElementById('payment').value;
            const codeselect=document.getElementById('codeselect').value;
            const doctorselect=document.getElementById('doctorselect').value;
            const docu=document.getElementById('doc').value;
            if (!name || !email || !date || !time || !payment) {
                alert('Please fill in all fields, including payment.');
                event.preventDefault(); // Prevent form submission
            }

            // Additional payment validation can be added here if needed
        }
