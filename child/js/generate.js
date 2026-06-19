function generate_timeline(v) {

  let txt = document.createTextNode(v);
  let version = document.createElement('div');
  version.appendChild(txt);
  document.body.appendChild(version)

  animeverse.forEach((day) => {
    let t = document.createElement('div')
    let r = document.createTextNode('???')
    t.appendChild(r)
    document.body.appendChild(t)

    let current = document.createElement('div')
    current.setAttribute('class', 'container');

    for (let i = 0; i < day.content.length; i++) {
      let section = day.content[i].content;
      let list;
      if (section) {
        let list = document.createElement('ul');
        section.forEach((s) => {
          let li = document.createElement('li')
          let li_txt = document.createTextNode(s)
          li.appendChild(s)
          ul.appendChild(li)
        });
      } else {
        list = document.createTextNode(i);
      }


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

generate_timeline('1.0.2.3')