document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'test' && password === 'password') {
      window.location.href = 'html_pages/home.html'; // Redireciona para a página inicial
    } else {
      alert('Invalid username or password.');
    }
  });
});


