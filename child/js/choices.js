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

    let sorted = {
      'selected': [],
      'not_selected': [],
    };
    items = document.querySelectorAll(`.container#${id} div`);
    items.forEach((i) => {
      let select = false;
      let cur_class = i.classList;
      classes.forEach((c) => {
        if (cur_class.contains(c)) {
          select = true;
        };
      });
      if (select) {
        sorted['selected'].push(i);
      } else {
        sorted['not_selected'].push(i);
      };
    });
    sorted['selected'].forEach((cur) => {
      if (!cur.classList.contains('selected')) {
        cur.classList.add('selected');
      };
    });
    sorted['not_selected'].forEach((cur) => {
      if (cur.classList.contains('selected')) {
        cur.classList.remove('selected');
      };
    });
}
