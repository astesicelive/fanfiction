let plot_2017 = {
// canon child(TM) yamahibi wedding
ren_1: `
YAMAHIBI WEDDING feat. big bro ren and baby bro rin
lots of pictures taken.... also there's the tiniest iori and joe's wife is very very pregnant
RENREN'S BABY TOOTH ON A PICTURE
rinrin having a little bouquet in front of him.....
`,

// older bro rin yamahibi wedding
// idk if we need this but. just in case
rin_1: `
yamahibi wedding but it's older bro rin
unsure how different this is from canon child(TM), we might be able to remove this
`,
}


var year_2017 = () => {
  let arr = [
    {
      'type': 'divider',
      'title': '2017',
      'id': 'year_2017',
    },
    {
      'type': 'title',
      'class_name': 'yamahibi_wedding',
      'id': 'yamahibi_wedding',
      'title': 'DeSu2 Wedding',
      'content': [
        {
          'class_name': 'ren_nii',
          'content': [],
        },
        {
          'class_name': 'rin_nii',
          'content': [],
        }
      ],
    }
  ];

  let var_list = [
    {name: 'ren', pos1: 1, pos2: 0},
    {name: 'rin', pos1: 1, pos2: 1}
  ];

  parse_plot(var_list, plot_2017, arr);

  return arr;
};

