let plot_2014 = {
// p2 innocent sin
p2is_1: `
team gets maya's death video, try to prevent it and fail
`,

// p2 eternal punishment
p2ep_2: `
tatsuya probably keeps getting death videos of his friends
`,

// p3 start of dark hour
p3_3: `
kirijo's bigass shadow splits, aigis seals a part of it in makomina
start of dark hour
makomina's parents die, kotone also dies
`,

// child(TM) more desu2 aftermath
child_4: `
by now alcor is like. he wants to fully reciprocate their love.... he asks hibiki if he can make alcor into a human
hibiki starts making preparations to include alcor in his Project(TM)
`,
}

let plot_2014_2 = {
// birth. thought the buttons didn't make it clear that was the time they're born so extra box
child_0: `
ren and rin are born
`,
// birth but it's rb(TM)
rb_0: `
akira is born to a hotsuin (couple?). he was given up for adoption
`,
}



var year_2014 = () => {
  let arr = [
    {
      'type': 'divider',
      'title': '2014',
      'id': 'year_2014',
    },
    {
      'type': 'title',
      'class_name': 'p2_is',
      'id': 'p2is_2014',
      'title': 'P2 Innocent Sin',
      'content': [
        {
          'class_name': 'child_innocent_sin',
          'content': [],
        }
      ],
    },
    {
      'type': 'title',
      'class_name': 'p2_ep',
      'id': 'p2ep_2014',
      'title': 'P2 Eternal Punishment',
      'content': [
        {
          'class_name': 'child_eternal_punishment',
          'content': [],
        }
      ],
    },
    {
      'type': 'title',
      'class_name': 'p3',
      'id': 'p3_2014',
      'title': 'P3 Beginning',
      'content': [
        {
          'class_name': 'p3_past',
          'content': [],
        }
      ],
    },
    {
      'type': 'title',
      'class_name': 'post_desu2 aftermath',
      'id': 'post_desu2_2014',
      'title': 'Desu2 Aftermath',
      'content': [
        {
          'class_name': 'aftermath_child',
          'content': [],
        }
      ],
    }
  ];

  let var_list = [
    {name: 'p2is', pos1: '1'},
    {name: 'p2ep', pos1: '2'},
    {name: 'p3', pos1: '3'},
    {name: 'child', pos1: '4'}
  ];

  parse_plot(var_list, plot_2014, arr);

  return arr;
};

var year_2014_2 = () => {
  let arr = [
    {
      'type': 'title',
      'class_name': 'twin_birthday',
      'id': 'twin_birth',
      'title': 'P5',
      'content': [
        {
          'class_name': 'child_birthday',
          'content': [],
        },
        {
          'class_name': 'only_akira',
          'content': [],
        }
      ],
    }
  ];

  let var_list = [
    {name: 'child', pos1: '0', pos2: '0'},
    {name: 'rb', pos1: '0', pos2: '1'}
  ];

  parse_plot(var_list, plot_2014_2, arr);

  return arr;
};

