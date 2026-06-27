let plot_2016 = {
// hibiki fixes philemon's mess
p2_1: `
hibiki discovers the Other Side(TM) and how the masked circle aren't allowed to remember innocent sin or else the world will be overwritten with the one that ended
he checks the record why the fuck it's like that and finds out philemon did some clumsy regression job
hibiki fixes whatever philemon did but chooses to make This Side's tatsuya into his own person because Other Side/innocent sin tatsuya is too different from him
katsuya now has two baby bros.... tatsuya and hiroto. hiroto is tatsuya's baby bro and doesn't care about whatever secrets they keep from him lol
eikichi vc/ it's kinda freaky you wouldn't believe it
hiroto vc/ oh okay then i don't need to know :0
`,
}


var year_2016 = () => {
  let arr = [
    {
      'type': 'divider',
      'title': '2016',
      'id': 'year_2016',
    },
    {
      'type': 'title',
      'class_name': 'fixing_p2',
      'title': 'Fixing P2',
      'content': [
        {
          'class_name': 'fix_p2',
          'content': [],
        }
      ],
    }
  ];

  let var_list = [
    {name: 'p2', pos1: '1'}
  ];

  parse_plot(var_list, plot_2016, arr);

  return arr;
};

