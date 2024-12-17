let index = 0;
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const totalImages = images.length - 1; 


function updateSliderPosition(instant = false) {
  if (instant) {
    slider.style.transition = 'none'; 
  } else {
    slider.style.transition = 'transform 0.5s ease-in-out';
  }
  slider.style.transform = `translateX(${-index * 100}vw)`;
}


function nextSlide() {
  index++;
  updateSliderPosition();

  
  if (index === totalImages) {
    setTimeout(() => {
      index = 0; 
      updateSliderPosition(true); 
    }, 500); 
  }
}


function prevSlide() {
  if (index === 0) {
    index = totalImages - 1; 
    updateSliderPosition(true); 
    setTimeout(() => {
      updateSliderPosition();
    }, 50); 
  } else {
    index--;
    updateSliderPosition();
  }
}


document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);


window.addEventListener('resize', () => updateSliderPosition(true));



document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);


window.addEventListener('resize', () => updateSliderPosition(true));


document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);


window.addEventListener('resize', updateSliderPosition);







function searchCards() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const cards = document.querySelectorAll('.form img, .form2 img');

    cards.forEach(card => {
        const altText = card.alt.toUpperCase();
        if (altText.includes(filter)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}


window.addEventListener('resize', () => {
    showSlide(index); 
});
