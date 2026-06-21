const btn = document.querySelectorAll('.button');
btn.forEach((b) => {
  b.addEventListener("click", pickChoice};
});

function pickChoice() {
  let classes = this.classList;
  classes.add('selected');
}
