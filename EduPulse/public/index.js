const heroTextArray = ['Feedback', 'Success', 'Growth', 'Engagement', 'Learning'];
const heroTextElement = document.querySelector('.animate-hero-text');

let index = 0;

function showNextWord() {
  heroTextElement.style.opacity = 0;

  setTimeout(() => {
    heroTextElement.textContent = heroTextArray[index];
    heroTextElement.style.opacity = 1;

    index = (index + 1) % heroTextArray.length;
  }, 500); // wait before switching text
}

setInterval(showNextWord, 2500); // change every 2.5 seconds
showNextWord(); // initial call
