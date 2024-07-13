document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Define your template parameters
    var params = {
        from_name: document.getElementById('from_name').value,
        from_email: document.getElementById('from_email').value,
        message: document.getElementById('message').value,
    };

  // Send email using EmailJS
  emailjs.send('service_r8qr8cg', 'template_gnkcmbi', params)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send message. Please try again.');
    });
});