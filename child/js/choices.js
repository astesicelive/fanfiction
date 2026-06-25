const btn = document.querySelectorAll('.button');
btn.forEach((b) => {
  b.addEventListener("click", pickChoice);
});

function pickChoice() {
  let classes = this.classList;
  let main_class = classes[1];
  let id = $(this).closest('.choice_buttons').attr('id');

  if (noodles[main_class]) {
    // deselect every button and choice
    let all_items = document.querySelectorAll(`.choice_buttons div, .container div`);
    all_items.forEach((i) => {
      i.classList.remove('selected');
    });

    for (let i in noodles[main_class]) {
      let cur_class = noodles[main_class][i]
      // select buttons
      let button = document.querySelector(`.choice_buttons#${i}`);
      if (button) {
        button.querySelector(`.${cur_class}`).classList.add('selected');
      };
      // select plot
      let plot = document.querySelectorAll(`.container#${i} .${cur_class}`);
      plot.forEach((cur) => {
        cur.classList.add('selected');
      });
    };
  } else {
    let buttons = document.querySelectorAll(`.choice_buttons div`);
    buttons.forEach((cur) => {
      cur.classList.remove('selected');
    });
    let current_button = document.querySelector(`.choice_buttons#${id} .${main_class}`);
    current_button.classList.add('selected');
  };
}
