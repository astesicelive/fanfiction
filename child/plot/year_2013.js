let plot_2013 = {
// child(TM) post-desu2
child_1: `
hibiki and alcor spend their time in the akasha together
everyone lost their memory of the apocalypse so hibiki is trying to restore the team's memory of it. not maruki's, he didn't want it (fabricated memory, since maruki died and got revived by future hibiki)
while hibiki is working on their memory, alcor is taking care of baby triangulum... also fills the akasha with various trinkets fromm earth
alcor got flowers... a couple dolls.... some of yamato's clothes—
alcor still is unsure about himself being in this relationship but he really wanted to bring yamato's clothes up. also it made hibiki happy
team eventually remembers, yamato goes to the akasha to see his wives.... finds them curled up together under his clothes
joe invites the team to his wedding or sth. he didn't lose the ring in his clothes like during the apocalypse <333
alyamahibi go on their world tour. miyako takes care of jps while yamato is gone
iomiya start dating..... now it's time for them to seduce daichi into their relationship
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
      'title': 'Desu2 Aftermath',
      'content': [
        {
          'class_name': 'aftermath_child',
          'content': [
            "alyamahibi have been on their world tour",
            "yamahibi have been trying hard to make alcor see that he's not just a side whore",
            "by the end of their world tour, alcor has settled in their relationship.... he now fully accepts that yamahibi want him"
          ],
        }
      ],
    }
  ];

  [
    {name: 'child', pos1: 1, pos2: 0}
  ].forEach((current) => {
    let plot = plot_2013[current.name];
    console.log(plot);

    plot.replace(/\n/g, 'ßß').split('ßß').forEach((t) => {
      if (t != '') {
        arr[current.pos1].content[current.pos2].content.push(t);
      };
      //console.log(t);
    });
  });

  return arr;
};



var year_2013 = [
  {
    'type': 'divider',
    'title': '2013',
    'id': 'year_2013',
  },
  {
    'type': 'title',
    'class_name': 'post_desu2 aftermath',
    'title': 'Desu2 Aftermath',
    'content': [
      {
        'class_name': 'aftermath_child',
        'content': [
          "alyamahibi have been on their world tour",
          "yamahibi have been trying hard to make alcor see that he's not just a side whore",
          "by the end of their world tour, alcor has settled in their relationship.... he now fully accepts that yamahibi want him"
        ],
      }
    ],
  }
];
