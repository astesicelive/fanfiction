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
        let plot = document.querySelectorAll(`.container.${i} .${c}`);
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
};

[
  {name: 'up', arrow_text: '↑'},
  {name: 'down', arrow_text: '↓'}
].forEach((nav) => {
  let div = document.createElement('div');
  div.setAttribute('class', `choice_arrows ${nav.name}`);
  let arrow_btn = document.createTextNode(nav.arrow_text);
  div.appendChild(arrow_btn);
  if (nav.name == 'up') {
    div.addEventListener('click', scroll_up);
  } else {
    div.addEventListener('click', scroll_down);
  };
  document.body.appendChild(div);
});

function scroll_up() {
  let val = scroll_to_choice();
  if (val.up) {
    let el = document.querySelector(`.choice_buttons#${val.up.id}`);
    el.scrollIntoView({ block: "start" , behavior: "smooth"});
  };
};

function scroll_down() {
  let val = scroll_to_choice();
  if (val.down) {
    let el = document.querySelector(`.choice_buttons#${val.down.id}`);
    el.scrollIntoView({ block: "start" , behavior: "smooth"});
  };
};

function scroll_to_choice() {
  let all_choices = document.querySelectorAll(`.choice_buttons`);
  let arr = {
    up: [],
    down: [],
  };
  all_choices.forEach((c) => {
    let obj = {};
    obj.pos = c.getBoundingClientRect().top - 75;
    obj.id = c.getAttribute('id');
    if (obj.pos < 0) {
      arr.up.push(obj);
    } else {
      arr.down.push(obj);
    };
  });
  arr.up.sort((a, b) => b.pos - a.pos);
  arr.down.sort((a, b) => a.pos - b.pos);

  let result = {};
  if (arr.up.length > 0) {
    let u = 0;
    if (arr.up[0].pos < 6) {
      u = 1;
    };
    result.up = arr.up[u];
  };
  if (arr.down.length > 0) {
    let d = 0;
    if (arr.down[0].pos < 6) {
      d = 1;
    };
    result.down = arr.down[d];
  };
  return result;
};