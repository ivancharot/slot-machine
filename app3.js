/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
const output = document.querySelector('.myDiv');
output.innerHTML = document.body.clientWidth;
const gameArea = makerElement(output, 'div', '', 'gameArea');
const message = makerElement(output, 'div', 'message', 'message');
const btn = makerElement(output, 'button', 'SPIN', 'btn');
const game = {
  total: 4,
  inPlay: false,
  coins: 100,
  speed: 5,
  totItems: 4,
  main: [],
};

window.addEventListener('DOMContentLoaded', init);
btn.addEventListener('click', (e) => {
  if (btn.textContent === 'SPIN' && !game.inPlay) {
    btn.textContent = 'STOP';
    startSpin();
  } else {
    game.inPlay = false;
    btn.textContent = 'SPIN';
  }
});

function init() {
  gameArea.style.width = `${game.total * 100}px`;
  const leftPos = (document.body.clientWidth - (game.total * 100)) / 2;
  gameArea.style.left = `${leftPos}px`;
  for (let i = 0; i < game.total; i += 1) {
    game.main[i] = makerElement(gameArea, 'div', '', 'wheel');
    for (let x = 0; x < game.totItems; x += 1) {
      const el = makerElement(game.main[i], 'div', x + 1, 'box');
    }
    game.main[i].style.left = `${i * 100}px`;
  }
}
function makerElement(parent, element, html, myClass) {
  const el = document.createElement(element);
  el.classList.add(myClass);
  el.innerHTML = html;
  parent.append(el);
  return el;
}

function startSpin() {
  console.log('Krutim kino');
}
