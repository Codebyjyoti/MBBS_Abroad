document.getElementById('lead-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;
  
    if (name && email && phone && country) {
      alert('Thank you for applying! We will contact you shortly.');
      // Here you can add code to send the form data to a backend server
    } else {
      alert('Please fill out all fields.');
    }
  });