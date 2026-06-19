function generate_timeline(v) {

  let txt = document.createTextNode(v);
  let version = document.createElement('div');
  version.appendChild(txt);
  document.body.appendChild(version)

  animeverse.forEach((day) => {
    let current = document.createElement('div');
    current.setAttribute('class', 'container');

    if (day.title) {
      let header = document.createElement('div');
      header.setAttribute('class', 'title');
      let header_txt = document.createTextNode(day.title);
      header.appendChild(header_txt);
      document.body.appendChild(header);
    };

    for (let i = 0; i < day.content.length; i++) {
      let section = day.content[i].content;
      let list;
      if (section) {
        list = document.createElement('ul');
        section.forEach((s) => {
          let li = document.createElement('li');
          let li_txt = document.createTextNode(s);
          li.appendChild(li_txt);
          list.appendChild(li);
        });
      } else {
        list = document.createTextNode(i);
      };

      if (day.content.length == 1) {
        current.appendChild(list);
      } else {
        var choice = document.createElement('div');
        choice.setAttribute('class', 'choice');
        choice.appendChild(list);
        current.appendChild(choice);
      };
    };

    document.body.appendChild(current);

  });
  
};

generate_timeline('1.0.3')