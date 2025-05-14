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
    }, 4000);
  } else {
    message.textContent = "Incorrect name or password. Try again.";
    document.getElementById('name-input').value = '';
    document.getElementById('password-input').value = '';
  }
}

function goToNextPage() {
  showSection('invitation-section', false);
  showSection('farewell-section', true);
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
