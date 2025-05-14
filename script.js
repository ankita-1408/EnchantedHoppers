document.addEventListener("DOMContentLoaded", function () {
  // Your existing code, wrapped in this function to ensure the DOM is loaded
  const validCredentials = {
    "aniket": "rbt21cb057",
    "akanksha": "rbt21ar051",
    "ayush": "rbt21et028",
    "avishka": "rbt21cb067",
    "sanika": "rbt21cb035",
    "vishwajit": "rbt21et035",
    "vaishnavi": "rbt21it097"
  };

  function checkPassword() {
    const name = document.getElementById('name-input').value.trim().toLowerCase();
    const pass = document.getElementById('password-input').value.trim().toLowerCase();
    const message = document.getElementById('riddle-message');

    if (validCredentials[name] && validCredentials[name] === pass) {
      showSection('login-section', false);
      showSection('chosen-section', true);

      setTimeout(() => {
        showSection('chosen-section', false);
        showSection('farewell-section', true);
        changeBackgroundImage();  // Change background image after loading completes
      }, 4000);
    } else {
      message.textContent = "Incorrect name or password. Try again.";
      document.getElementById('name-input').value = '';
      document.getElementById('password-input').value = '';
    }
  }

  function changeBackgroundImage() {
    document.body.style.backgroundImage = "url('second background.avif')";
    document.body.style.backgroundSize = "cover";  // Ensure the background covers the screen
    document.body.style.backgroundPosition = "center center";  // Center the background
  }

  function showSection(id, show) {
    const section = document.getElementById(id);
    if (show) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  }
function goToExplore() {
  window.location.href = "explore.html";
}
  // Bind the checkPassword function to the button click event
  document.querySelector("button").addEventListener("click", checkPassword);
});
