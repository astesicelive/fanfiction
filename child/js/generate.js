function generate_timeline(v) {

  let txt = document.createTextNode(v);
  let version = document.createElement('div');
  version.appendChild(txt);
  version.setAttribute('class', 'top_bar')
  document.body.appendChild(version);

  let arcs = [
    animeverse(), 
    desu2_split, 
    gameverse(), year_2012(), year_2013(), year_2014(), 
    birth_split, 
    year_2017()
  ];

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
      current.setAttribute('id', `${arc[0].id || ''}`);
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

generate_timeline('1.0.7.13');

// process plot vars into the objects
function parse_plot(var_list, plot_var, arr) {
  let num = 1;
  var_list.forEach((current) => {
    let plot;
    let pos1 = current.pos1 || num;
    let pos2 = current.pos2 || 0;
    if (!current.pos1 && !current.pos2) {
      plot = plot_var[current.name];
    } else {
      plot = plot_var[`${current.name}_${pos1}`];
    };

    try {
      plot.replace(/\n/g, 'ßß').split('ßß').forEach((t) => {
        if (t != '') {
          arr[pos1].content[pos2].content.push(t);
          //console.log(t);
        };
      });
    } catch {
      console.error(current);
    };

    num++;
  });
}