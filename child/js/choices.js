function add_choiceButton() {
  const btn = document.querySelectorAll('.button');
  btn.forEach((b) => {
    b.addEventListener("click", pickChoice};
  });
}

function pickChoice() {
  this.classList.add('selected');
}

add_choiceButton();