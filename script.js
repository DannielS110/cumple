document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  if (username === 'Nayelhi' && password === '22') {
      document.getElementById('login-box').style.display = 'none';
      document.getElementById('popup1').style.display = 'block';
      playLoginMusic();
  } else {
      alert('Usuario o contraseña incorrectos.');
  }
});

const carrossel = document.querySelector(".carrossel");
const items = document.querySelectorAll(".carrossel-item");
const numItems = items.length;
let start = 0;

items.forEach((item, index) => {
  item.style.transform = `rotateY(${index * (360 / numItems)}deg) translateZ(300px)`;
});

function showNextPopup() {
  document.getElementById('popup1').style.display = 'none';
  document.getElementById('popup2').style.display = 'block';
}

function showCarousel() {
  document.getElementById('popup2').style.display = 'none';
  document.getElementById('confetti').style.display = 'block';
  createConfetti();
  setTimeout(() => {
    document.getElementById('confetti').style.display = 'none';
    document.getElementById('carousel-container').style.display = 'flex';
    document.getElementById('exit-button').style.display = 'block'; // Mostrar el botón de salir
    document.querySelectorAll('.envelope').forEach(function(envelope) {
        envelope.style.display = 'flex';
    });
    stopLoginMusic();
  }, 4000);
}

function showCard(cardId) {
  document.getElementById(cardId).style.display = 'block';
  createConfetti();
  if (cardId === 'card1') {
    document.getElementById('card1-song').play();
  } else if (cardId === 'card2') {
    document.getElementById('card2-song').play();
  } else if (cardId === 'card3') {
    document.getElementById('card3-song').play();
  } else if (cardId === 'card4') {
    document.getElementById('card4-song').play();
  }
}

function hideCard(cardId) {
  document.getElementById(cardId).style.display = 'none';
  if (cardId === 'card1') {
    document.getElementById('card1-song').pause();
    document.getElementById('card1-song').currentTime = 0;
  } else if (cardId === 'card2') {
    document.getElementById('card2-song').pause();
    document.getElementById('card2-song').currentTime = 0;
  } else if (cardId === 'card3') {
    document.getElementById('card3-song').pause();
    document.getElementById('card3-song').currentTime = 0;
  } else if (cardId === 'card4') {
    document.getElementById('card4-song').pause();
    document.getElementById('card4-song').currentTime = 0;
  }
}

function showFinalMessage() {
  document.getElementById('carousel-container').style.display = 'none';
  document.getElementById('final-message').style.display = 'block';
  playFinalSong();
}

function createConfetti() {
  const confettiContainer = document.createElement('div');
  confettiContainer.classList.add('confetti-container');
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confettiContainer.appendChild(confetti);
  }

  for (let i = 0; i < 20; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = Math.random() * 100 + 'vw';
      star.style.animationDuration = Math.random() * 3 + 2 + 's';
      confettiContainer.appendChild(star);
  }

  setTimeout(() => {
      document.body.removeChild(confettiContainer);
  }, 5000);
}

function playLoginMusic() {
  const audio = document.getElementById('song-login');
  audio.play();
}

function stopLoginMusic() {
  const audio = document.getElementById('song-login');
  audio.pause();
  audio.currentTime = 0;
}

function playFinalSong() {
  const audio = document.getElementById('final-song');
  audio.play();
}
