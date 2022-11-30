// const whiteHeart = '\u2661';
// const blackHeart = '\u2665';
const whiteHeart = '♡';
const blackHeart = '♥';
let button = document.querySelector('button');
button.addEventListener('click', toggle);

// can only like first heart 

function toggle() {
  const like = button.textContent;
  if(like==whiteHeart) {
    button.textContent = blackHeart;
  } else {
    button.textContent = whiteHeart;
  }
}

