function generate_timeline() {

  animeverse.forEach((day) => {
    let current = document.createElement('div')
    current.setAttribute('class', 'container');

    for (let i = 0; i >= day.content.length; i++) {
      let section = day.content[i];
      let list = [];
      section.content.forEach((li) => {
        list.push(`<li>${li}</li>`);
      });

      if (day.content.length == 1) {
        current.innerHTML(`<ul>${list.join('')}</ul>`)
      } else {
        var choice = document.createElement('div')
        choice.setAttribute('class', 'choice')
        choice.innerHTML(`<ul>${list.join('')}</ul>`)
        current.appendChild(choice)
      };
    };

    document.body.appendChild(current)

  });
  
};

generate_timeline()