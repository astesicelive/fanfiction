function add_choiceButton() {
  const btn = document.getElementsByClassName('button');
  btn.addEventListener("click", pickChoice};
}

function pickChoice() {
  this.classList.add('selected');
}

add_choiceButton();