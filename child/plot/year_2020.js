let plot_2020 = {
// jungo just picks up naoya and kazuya off the streets
jungo_1: `
naoya and kazuya find each other when they land in the same orphanage by chance
they get to be together for a couple months before they happen to overhear some of the caretakers saying that naoya is gonna be displaced again
kazuya looked so sad naoya takes him in the middle of the night so they can run away
jungo happens to find naoya and kazuya on the streets and takes them home. manages to convince keita to adopt them
`,

// hibiki vs yaldy
yaldy_2: `
hibiki senses a baby god of control and goes to get rid of it but he overestimates his own strength and uses his regulus form to get rid of him
the earth can’t handle him and there are several ““natural”” disasters even after he leaves the earth to go to the akasha
hibiki knew he would get too powerful for the earth eventually, but the battle against yaldy cut his time down by 4 years. hibiki is very pissed
yaldy goes into 6 year old ren’s brain after his battle with hibiki
`,
}


var year_2020 = () => {
  let arr = [
    {
      'type': 'divider',
      'title': '2020',
      'id': 'year_2020',
    },
    {
      'type': 'title',
      'class_name': 'desu1',
      'title': 'Desu1/2',
      'content': [
        {
          'class_name': 'jungo',
          'content': [],
        },
      ],
    },
    {
      'type': 'title',
      'class_name': 'yaldy',
      'title': 'P5',
      'content': [
        {
          'class_name': 'vs_yaldy',
          'content': [],
        },
      ],
    }
  ];

  let var_list = [
    {name: 'jungo', pos1: '1', pos2: '0'},
    {name: 'yaldy', pos1: '2', pos2: '0'}
  ];

  parse_plot(var_list, plot_2020, arr);

  return arr;
};

