let plot_2019 = {
// JUNTATSU WEDDING
child_1: `
jun and tatsuya marry. probably in june because june bride
they wear suits and dresses because yes
tatsuya invited hibiki because he fixed their memories without the world ending (he does not know philemon just did a shitty regression job)
hibiki brings yamato and baby twins with him
`,
}


var year_2019 = () => {
  let arr = [
    {
      'type': 'divider',
      'title': '2019',
      'id': 'year_2019',
    },
    {
      'type': 'title',
      'class_name': 'juntatsu_wedding',
      'title': 'P2 Wedding',
      'content': [
        {
          'class_name': 'child',
          'content': [],
        },
      ],
    }
  ];

  let var_list = [
    {name: 'child', pos1: '1', pos2: '0'}
  ];

  parse_plot(var_list, plot_2019, arr);

  return arr;
};

