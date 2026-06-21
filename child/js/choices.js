const btn = document.querySelectorAll('.button');
btn.forEach((b) => {
  b.addEventListener("click", pickChoice);
});

function pickChoice() {
  let classes = this.classList;
  let id = $(this).closest('.choice_buttons').attr('id');
  let section = document.querySelector(`#${id}`);
  let items = section.querySelectorAll('.selected');
  items.forEach((i) => {
    i.classList.toggle('selected');
  })
  classes.add('selected');
}
