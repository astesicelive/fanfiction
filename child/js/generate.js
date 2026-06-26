let current_version = "1.0.8.02";

let txt = document.createTextNode(current_version);
let version = document.createElement('div');
version.setAttribute('class', 'info');
version.appendChild(txt);

txt = document.createTextNode('Outline');
let outline_button = document.createElement('div');
outline_button.setAttribute('class', 'info outline_button');
outline_button.appendChild(txt);

let top_bar = document.createElement('div');
top_bar.setAttribute('class', 'top_bar');
top_bar.appendChild(version);
top_bar.appendChild(outline_button);
document.body.appendChild(top_bar);

arcs.forEach((a) => {
  if (a[0].type == 'choice') {
    generate_splits(a);
  } else {
    generate_arcs(a);
  };
});

function generate_splits(obj) {
  let div = document.createElement('div');
  div.setAttribute('class', 'choice_buttons');
  div.setAttribute('id', obj[0].id);

  obj.forEach((choice) => {
    if (!choice.id) {
      let button = document.createElement('div');
      button.setAttribute('class', 'button ' + choice.class_name);
      let txt = document.createTextNode(choice.title);
      button.appendChild(txt);
      div.appendChild(button);
    };
  });

  document.body.appendChild(div);
}

function generate_arcs(arc) {

  //console.log(arc);
  arc.forEach((day) => {
    if (day.type == 'divider' || day.title) {
      let header =  document.createElement('div');
      header.setAttribute('class', day.type);
      header.setAttribute('id', `${day.id || ''}`);
      let header_txt = document.createTextNode(day.title);
      header.appendChild(header_txt);
      document.body.appendChild(header);
    };

    if (day.content) {
      let current = document.createElement('div');
      current.setAttribute('class', `container ${arc[0].id || ''}`);
      current.setAttribute('id', `${arc[0].id || ''}`);
      let class_name = `${day.class_name || ''}`;

      for (let i = 0; i < day.content.length; i++) {
        let section = day.content[i];
        let list;

        let section_class = `${section.class_name || ''}`;

        if (section.content) {
          list = document.createElement('ul');
          section.content.forEach((s) => {
            //console.log(s);
            let li = document.createElement('li');
            let li_txt = document.createTextNode(s);
            li.appendChild(li_txt);
            list.appendChild(li);
          });
        } else {
          list = document.createTextNode(i);
        };

        if (arc[0].id == 'beginning') {
          current.setAttribute('class', ['container', class_name, section_class].join(' '));
          current.appendChild(list);
        } else {
          var choice = document.createElement('div');
          choice.setAttribute('class', ['choice', class_name, section_class].join(' '));
          choice.appendChild(list);
          current.appendChild(choice);
        };
      };

      document.body.appendChild(current);
    };
  });

}