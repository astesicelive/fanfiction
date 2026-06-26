// generate unique ids for outline
let id_list = {};

let arcs = [
  animeverse(), 
  desu2_split, 
  gameverse(), year_2012(), year_2013(), year_2014(), 
  birth_split, 
  year_2014_2(), year_2016(), year_2017()
];
let total_headers = 0;
arcs.forEach((arc) => {
    arc.forEach((cur) => {
        if (cur.type != 'choice' && cur.type != 'divider') {
            total_headers++;
        };
    });
});

for (let x = 1; x < total_headers + 1; x++) {
    let cur_id = makeid();
    id_list[x] = cur_id;
};
let z = 1;
arcs.forEach((arc) => {
    arc.forEach((cur) => {
        if (cur.type != 'choice' && cur.type != 'divider') {
            cur.id = id_list[z];
            z++;
        };
    });
});

function makeid(length=10) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}