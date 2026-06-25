const btn = document.querySelectorAll('.button');
btn.forEach((b) => {
  b.addEventListener("click", pickChoice);
});

function pickChoice() {
  let classes = this.classList;
  //let id = $(this).closest('.choice_buttons').attr('id');
  let main_class = classes[1];

  if (noodles[main_class]) {
    // deselect every button and choice
    let all_items = document.querySelectorAll(`.choice_buttons div, .container div`);
    all_items.forEach((i) => {
      i.classList.remove('selected');
    });

    // select buttons
    for (let i in noodles[main_class]) {
      let cur_class = noodles[main_class][i]
      let button = document.querySelector(`.choice_buttons#${i}`);
      if (button) {
        button.querySelector(`.${cur_class}`).classList.add('selected');
      };
      let plot = document.querySelectorAll(`.container .${cur_class}`);
      plot.forEach((cur) => {
        cur.classList.add('selected');
      });
    };
  };
}
