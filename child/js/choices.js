const btn = document.querySelectorAll('.button');
btn.forEach((b) => {
  b.addEventListener("click", pickChoice);
});

function pickChoice() {
  let classes = this.classList;
  let main_class = classes[1];
  let id = $(this).closest('.choice_buttons').attr('id');
  let noodles = noodle_obj();

  if (noodles[main_class]) {
    // deselect every button and choice
    let all_items = $(`.choice_buttons div, .container div`);
    iterate_divs(all_items, 'remove');

    for (let i in noodles[main_class]) {
      let cur_class = noodles[main_class][i];
      console.log(cur_class);
      // select buttons
      let button = $(`.choice_buttons#${i} .${cur_class}`);
      if (button) {
        iterate_divs(button, 'add');
      };
      // select plot
      let plot = $(`.container#${i} .${cur_class}`);
      iterate_divs(plot, 'add');
    };
  } else {
    let buttons = $(`.choice_buttons div`);
    iterate_divs(buttons, 'remove');
    let current_button = $(`.choice_buttons#${id} .${main_class}`);
    iterate_divs(current_button, 'add');
  };
}

function iterate_divs(obj, mode) {
  for (let x in obj) {
    try {
      if (mode == 'add') {
        obj[x].addClass('selected');
      } else {
        obj[x].removeClass('selected');
      };
    } catch {
      void(0);
    };
  };
}
