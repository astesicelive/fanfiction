let plot_2018 = {
// naoya's situation in child(TM)
child_1: `
naoya’s parents die and he gets in the system
kazuya's parents try to take him in but they get into an accident months after naoya's parents' death
both naoya and kazuya get lost in the system
`,

// naoya's situation in rb(TM)
rb_1: `
naoya’s parents die and he gets in the system
kazuya's parents manage to take him in so naoya lives with them and kazuya
`,
}


var year_2018 = () => {
  let arr = [
    {
      'type': 'divider',
      'title': '2018',
      'id': 'year_2018',
    },
    {
      'type': 'title',
      'class_name': 'orphan_naoya',
      'title': 'DeSu1/2',
      'content': [
        {
          'class_name': 'child',
          'content': [],
        },
        {
          'class_name': 'rb',
          'content': [],
        }
      ],
    }
  ];

  let var_list = [
    {name: 'child', pos1: '1', pos2: '0'},
    {name: 'rb', pos1: '1', pos2: '1'}
  ];

  parse_plot(var_list, plot_2018, arr);

  return arr;
};

