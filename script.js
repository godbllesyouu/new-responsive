let currentIndex = 0;
const slider = document.querySelector('.cards-5');
const totalCards = document.querySelectorAll('.card-5').length;

function slideCard(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalCards - 1;
  } else if (currentIndex >= totalCards) {
    currentIndex = 0;
  }

  slider.style.transform = translateX(-${currentIndex * 100}%);
}   