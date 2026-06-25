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
    all_items.forEach((i) => {
      i.removeClass('selected');
    });

    for (let i in noodles[main_class]) {
      let cur_class = noodles[main_class][i];
      console.log(cur_class);
      // select buttons
      let button = $(`.choice_buttons#${i} .${cur_class}`);
      if (button) {
        button.addClass('selected');
      };
      // select plot
      let plot = $(`.container#${i} .${cur_class}`);
      plot.forEach((cur) => {
        cur.addClass('selected');
      });
    };
  } else {
    let buttons = $(`.choice_buttons div`);
    buttons.forEach((cur) => {
      cur.removeClass('selected');
    });
    let current_button = $(`.choice_buttons#${id} .${main_class}`);
    current_button.addClass('selected');
  };
}
