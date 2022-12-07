// const whiteHeart = '\u2661';
// const blackHeart = '\u2665';
const whiteHeart = '♡ Like';
const blackHeart = '♥ Unlike';
let buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', function() {
    const like = button.textContent;
    if(like==whiteHeart) {
      button.textContent = blackHeart;
    } else {
      button.textContent = whiteHeart;
    }
  });
}




