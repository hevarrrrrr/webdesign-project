document.getElementById('contactForm').addEventListener('submit', function(e) {
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();
  let error = "";

  if (name.length < 2) error += "Name too short. ";
  if (!email.includes('@')) error += "Invalid email. ";
  if (message.length < 10) error += "Message too short.";

  if (error) {
    e.preventDefault();
    document.getElementById('errorMessage').innerText = error;
  }
});
