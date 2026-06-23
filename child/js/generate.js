function generate_timeline(v) {

  let txt = document.createTextNode(v);
  let version = document.createElement('div');
  version.appendChild(txt);
  document.body.appendChild(version);
  
  let animev = animeverse();

  let arcs = [animev, desu2_split, gameverse, desu2_aftermath, year_2013, year_2014, birth_split];

  arcs.forEach((a) => {
    if (a[0].type == 'choice') {
      generate_splits(a);
    } else {
      generate_arcs(a);
    };
  });
  
};

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

  console.log(arc);
  arc.forEach((day) => {
    if (day.type == 'divider' || day.title) {
      let header =  document.createElement('div');
      header.setAttribute('class', day.type);
      let header_txt = document.createTextNode(day.title);
      header.appendChild(header_txt);
      document.body.appendChild(header);
    };

    if (day.content) {
      let current = document.createElement('div');
      current.setAttribute('class', `container ${arc[0].id || ''}`);
      let class_name = `${day.class_name || ''}`;

      for (let i = 0; i < day.content.length; i++) {
        let section = day.content[i];
        let list;

        let section_class = `${section.class_name || ''}`;

        if (section.content) {
          list = document.createElement('ul');
          section.content.forEach((s) => {
            console.log(s);
            let li = document.createElement('li');
            let li_txt = document.createTextNode(s);
            li.appendChild(li_txt);
            list.appendChild(li);
          });
        } else {
          list = document.createTextNode(i);
        };

        if (day.content.length == 1) {
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

generate_timeline('1.0.7.11');