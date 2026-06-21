function add_choice_button() {
  const btn = document.querySelectorAll('.button');
  btn.forEach((b) => {
    b.addEventListener("click", pickChoice};
  });
};

function pickChoice() {
  let classes = this.classList;
  classes.add('selected');
}

$(document).ready(add_choice_button());
