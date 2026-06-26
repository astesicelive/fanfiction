let plot_2013 = {
// child(TM) post-desu2
child_1: `
alyamahibi have been on their world tour
yamahibi have been trying hard to make alcor see that he's not just a side whore
by the end of their world tour, alcor has settled in their relationship.... he now fully accepts that yamahibi want him
`,
}


var year_2013 = () => {
  let arr = [
    {
      'type': 'divider',
      'title': '2013',
      'id': 'year_2013',
    },
    {
      'type': 'title',
      'class_name': 'post_desu2 aftermath',
      'id': 'post_desu2_2013',
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
    {name: 'child', pos1: 1}
  ];

  parse_plot(var_list, plot_2013, arr);

  return arr;
};
