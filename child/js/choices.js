const btn = document.querySelectorAll('.button');
btn.forEach((b) => {
  b.addEventListener("click", pickChoice);
});

function pickChoice() {
  let classes = this.classList;
  let id = $(this).closest('.choice_buttons').attr('id');
  let section = document.querySelector(`.choice_buttons#${id}`);
  let items = section.querySelectorAll(`.selected`);
  items.forEach((i) => {
    i.classList.toggle('selected');
  });
  classes.add('selected');

  let main_class = classes[1];

  noodles[main_class].forEach((i) => {
    items = document.querySelectorAll(`.container.${i} div`);
    items.forEach((i) => {
      i.classList.remove('selected');
    });
    items = document.querySelectorAll(`.container.${i} .${main_class}`);
    items.forEach((i) => {
      i.classList.add('selected');
    });
  })
}
