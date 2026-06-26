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
    let all_items = document.querySelectorAll(`.choice_buttons div, .container div`);
    all_items.forEach((i) => {
      i.classList.remove('selected');
    });

    for (let i in noodles[main_class]) {
      let cur_class = noodles[main_class][i];
      console.log(cur_class);
      cur_class.forEach((c) => {
        // select buttons
        let button = document.querySelector(`.choice_buttons#${i} .${c}`);
        if (button) {
          button.classList.add('selected');
        };
        // select plot
        let plot = document.querySelectorAll(`.container#${i} .${c}`);
        plot.forEach((cur) => {
          cur.classList.add('selected');
        });
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