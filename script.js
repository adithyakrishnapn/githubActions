const greetButton = document.getElementById('greetButton');
const message = document.getElementById('message');

greetButton.addEventListener('click', () => {
  message.textContent = 'Hello! Your webpage is working and ready for GitHub Actions practice.';
});