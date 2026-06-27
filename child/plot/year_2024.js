let plot_2024 = {
// p3 moment
p3_1: `
shinji and chidori (and takeharu??????) get saved because of nicaea. they probably get a death video for ikutsuki too but fuck him
`,
}


var year_2024 = () => {
  let arr = [
    {
      'type': 'divider',
      'title': '2024',
      'id': 'year_2024',
    },
    {
      'type': 'title',
      'class_name': 'p3',
      'title': 'P3',
      'content': [
        {
          'class_name': 'p3_journey',
          'content': [],
        },
      ],
    }
  ];

  let var_list = [
    {name: 'p3', pos1: '1', pos2: '0'}
  ];

  parse_plot(var_list, plot_2024, arr);

  return arr;
};

