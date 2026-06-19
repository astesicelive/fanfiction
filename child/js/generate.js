import { animeverse } from './plot/animeverse.js';

function generate_timeline(v) {

  let txt = document.createTextNode(v);
  let version = document.createElement('div');
  version.appendChild(txt);
  document.body.appendChild(version)

  animeverse.forEach((day) => {
    let current = document.createElement('div')
    current.setAttribute('class', 'container');

    for (let i = 0; i < day.content.length; i++) {
      let section = day.content[i].content;
      let list;
      if (section) {
        list = `<ul><li>${section.join('</li><li>')}</li></ul>`;
      } else {
        list = `${i}`;
      }


      if (day.content.length == 1) {
        current.innerHTML(list);
      } else {
        var choice = document.createElement('div');
        choice.setAttribute('class', 'choice');
        choice.innerHTML(list);
        current.appendChild(choice);
      };
    };

    document.body.appendChild(current);

  });
  
};

generate_timeline('1.0.2.3')