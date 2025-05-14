function startCountdown() {
  const countdownElement = document.getElementById('countdown');
  let timeLeft = 30;
  countdownElement.textContent = `${timeLeft}s`;
  const countdownInterval = setInterval(() => {
    timeLeft--;
    countdownElement.textContent = `${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      alert('Time is up!');
    }
  }, 1000);
}

function checkTimeAnswer() {
  const input = document.getElementById('time-answer').value.trim().toLowerCase();
  if (input === correctTimeAnswer) {
    document.getElementById('question-section').classList.remove('active');
    document.getElementById('enchanted-forest-section').classList.add('active');
  } else {
    alert('Incorrect time answer, try again!');
  }
}

function showVideo() {
  document.getElementById('farewell-video').style.display = 'block';
}
