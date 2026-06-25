let 2012_plot = {
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

// record breaker post-desu2
rb_1: `
rb(TM) aftermath
`,

// p1 plot(TM)
p1_2: `
p1 is happening here(TM)
`,
}


var year_2012 = () => {
  let arr = [
    {
      'type': 'divider',
      'title': '2012',
      'id': 'year_2012',
    },
    {
      'type': 'title',
      'class_name': 'post_desu2 aftermath',
      'title': 'Desu2 Aftermath',
      'content': [
        {
          'class_name': 'aftermath_child gameverse_child',
          'content': [],
        },
        {
          'class_name': 'aftermath_rb gameverse_rb',
          'content': [],
        }
      ],
    },
    {
      'type': 'title',
      'class_name': 'post_desu2 p1',
      'title': 'P1',
      'content': [
        {
          'class_name': 'p1',
          'content': [
            'p1 is happening here(TM)'
          ],
        }
      ],
    }
  ];

  let var_list = [
    {name: 'child', pos1: 1, pos2: 0},
    {name: 'rb', pos1: 1, pos2: 1},
    {name: 'p1', pos1: 2, pos2: 0}
  ];

  parse_plot(var_list, 2012_plot, arr);

  return arr;
};
