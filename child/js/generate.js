var animeverse = [
  {
    'title': 'Sunday',
    'content': [
      {
        'title': 'desu2',
        'content': ['desu2 sunday'],
      },
      {
        'title': 'p5',
        'content': ['p5 sunday'],
      }
    ],
  },
  {
    'title': 'Monday',
    'content': [
      {
        'title': 'desu2',
        'content': ['desu2 monday'],
      },
      {
        'title': 'p5',
        'content': ['p5 monday'],
      }
    ],
  },
  {
    'title': 'Tuesday',
    'content': [
      {
        'title': 'desu2',
        'content': ['desu2 tuesday'],
      },
      {
        'title': 'p5',
        'content': ['p5 tuesday'],
      }
    ],
  },
  {
    'title': 'Wednesday',
    'content': [
      {
        'title': 'desu2',
        'content': ['desu2 wednesday'],
      },
      {
        'title': 'p5',
        'content': ['p5 wednesday'],
      }
    ],
  },
  {
    'title': 'Thursday',
    'content': [
      {
        'title': 'desu2',
        'content': ['desu2 thursday'],
      },
      {
        'title': 'p5',
        'content': ['p5 thursday'],
      }
    ],
  },
  {
    'title': 'Friday',
    'content': [
      {
        'title': 'desu2',
        'content': ['desu2 friday'],
      },
      {
        'title': 'p5',
        'content': ['p5 friday'],
      }
    ],
  },
  {
    'title': 'Saturday',
    'content': [
      {
        'title': 'desu2',
        'content': ['desu2 saturday'],
      },
      {
        'title': 'p5',
        'content': ['p5 saturday'],
      }
    ],
  }
];

function generate_timeline(v) {

  let txt = document.createTextNode(v);
  let version = document.createElement('div');
  version.appendChild(txt);
  document.body.appendChild(version)

  animeverse.forEach((day) => {
    let current = document.createElement('div');
    current.setAttribute('class', 'container');

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

generate_timeline('1.0.2.8')