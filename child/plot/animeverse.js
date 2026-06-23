var animeverse = [
  {
    'type': 'divider',
    'title': '2011 (animeverse)',
    'id': 'beginning',
  },
  {
    'type': 'title',
    'class_name': 'desu2a sunday',
    'title': 'Sunday',
    'content': [
      {
        'class_name': 'desu2',
        'content': [],
      }
    ],
  },
  {
    'type': 'title',
    'class_name': 'desu2a monday',
    'title': 'Monday',
    'content': [
      {
        'class_name': 'desu2',
        'content': [],
      }
    ],
  },
  {
    'type': 'title',
    'class_name': 'desu2a tuesday',
    'title': 'Tuesday',
    'content': [
      {
        'class_name': 'desu2',
        'content': [],
      }
    ],
  },
  {
    'type': 'title',
    'class_name': 'desu2a wednesday',
    'title': 'Wednesday',
    'content': [
      {
        'class_name': 'desu2',
        'content': [],
      }
    ],
  },
  {
    'type': 'title',
    'class_name': 'desu2a thursday',
    'title': 'Thursday',
    'content': [
      {
        'class_name': 'desu2',
        'content': [],
      }
    ],
  },
  {
    'type': 'title',
    'class_name': 'desu2a friday',
    'title': 'Friday',
    'content': [
      {
        'class_name': 'desu2',
        'content': [],
      }
    ],
  },
  {
    'type': 'title',
    'class_name': 'desu2a saturday',
    'title': 'Saturday',
    'content': [
      {
        'class_name': 'desu2',
        'content': [],
      }
    ],
  }
];

for (let i = 1; i < 8; i++) {
  let file = "https://astesicelive.github.io/fanfiction/child/plot/animeverse/" + i + ".txt";

  let raws = fetch(file)
    .then((x) => x.text())
  ;
  console.log(raws)
  raws.replace(/\n/g, 'ßß').split('ßß').forEach((r) => {
    console.log(r);
  });

};