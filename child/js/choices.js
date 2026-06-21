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
  });

  let num = 1;
  while (document.querySelector(`#${id}_${num}`)) {
    let section = document.querySelector(`#${id}_${num}`);
    let sorted = {
      'selected': [],
      'not_selected': [],
    };
    let items = section.querySelector('div');
    items.forEach((i) => {
      let select = false;
      let cur_class = i.classList;
      cur_class.forEach((c) => {
        classes.forEach((c2) => {
          if (c == c2) {
            select = true;
          };
        });
      });
      if (select) {
        sorted['selected'].push(i);
      } else {
        sorted['not_selected'].push(i);
      };
    });
    sorted['selected'].forEach((cur) => {
      if (!cur.classList.contains('selected')) {
        cur_class.classList.add('selected');
      };
    });
    sorted['not_selected'].forEach((cur) => {
      if (cur.classList.contains('selected')) {
        cur_class.classList.remove('selected');
      };
    });
    num++;
  };
  classes.add('selected');
}
