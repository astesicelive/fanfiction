function generate_timeline() {
  var body = document.getElementsByTagName('body')

  animeverse.forEach((day) => {
    var current = createElement('div').setAttribute('class', 'container');

    for (let i = 0; i < day.content.length; i++) {
      let section = day.content[i];
      let list = [];
      section.content.forEach((li) => {
        list.push(`<li>${li}</li>`);
      });

      if (day.content.length == 1) {
        
      } else {}
    };

    day.content.forEach((section) => {
      var list = [];
      section.content.forEach((li) => {
        list.push(`<li>${li}</li>`)
      });
    });
    if (day.content.length > 1) {
      var choice = createElement('div').setAttribute('class', 'choice')

      var list = []
    }
  })
  
}