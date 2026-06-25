let plot_2017 = {
// hibiki fixes philemon's mess
p2_1: `
hibiki discovers the Other Side(TM) and how the masked circle aren't allowed to remember innocent sin or else the world will be overwritten with the one that ended
he checks the record why the fuck it's like that and finds out philemon did some clumsy regression job
hibiki fixes whatever philemon did but chooses to make This Side's tatsuya into his own person because Other Side/innocent sin tatsuya is too different from him
katsuya now has two baby bros.... tatsuya and hiroto. hiroto is tatsuya's baby bro and doesn't care about whatever secrets they keep from him lol
eikichi vc/ it's kinda freaky you wouldn't believe it
hiroto vc/ oh okay then i don't need to know :0
`,

// canon child(TM) yamahibi wedding
ren_2: `
YAMAHIBI WEDDING feat. big bro ren and baby bro rin
lots of pictures taken.... also there's the tiniest iori and joe's wife is very very pregnant
RENREN'S BABY TOOTH ON A PICTURE
rinrin having a little bouquet in front of him.....
`,

// older bro rin yamahibi wedding
// idk if we need this but. just in case
rin_2: `
yamahibi wedding but it's older bro rin
unsure how different this is from canon child(TM), we might be able to remove this
`,
}


var year_2017 = () => {
  let arr = [
    {
      'type': 'divider',
      'title': '2017',
      'id': 'twin_birth',
    },
    {
      'type': 'title',
      'class_name': 'fixing_p2',
      'title': 'P2',
      'content': [
        {
          'class_name': 'fix_p2',
          'content': [],
        }
      ],
    },
    {
      'type': 'title',
      'class_name': 'yamahibi_wedding',
      'title': 'DeSu2 Wedding',
      'content': [
        {
          'class_name': 'child_yamahibi_ren',
          'content': [],
        },
        {
          'class_name': 'child_yamahibi_rin',
          'content': [],
        }
      ],
    }
  ];

  let var_list = [
    {name: 'p2', pos1: 1},
    {name: 'ren', pos1: 2, pos2: 0},
    {name: 'rin', pos1: 2, pos2: 1}
  ];

  parse_plot(var_list, plot_2017, arr);

  return arr;
};

