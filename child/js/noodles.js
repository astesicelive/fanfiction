// timeline connections or sth
let noodle_obj = () => {
    let obj = {
        // first choice (p5 time travel happening or not -> admin hibiki / record breaker world)
        'gameverse_child': {
            'gameverse': 'gameverse_child',
            'year_2012': 'aftermath_child',
            'year_2012': 'p1',
            'year_2013': 'aftermath_child',
            'year_2014': 'child_innocent_sin',
            'year_2014': 'child_eternal_punishment',
            'year_2014': 'p3_past',
            'year_2014': 'aftermath_child',
        },
        'gameverse_rb': {
            'gameverse': 'gameverse_rb',
            'year_2012': 'aftermath_rb',
            'year_2014': 'p3_past',
        },
        // second choice (hibiki decides which baby to make first)
        'ren_nii': {
            // + gameverse_child
            'twin_birth': 'fix_p2',
            'twin_birth': 'ren_nii',
        },
        'rin_nii': {
            // + gameverse_child
            'twin_birth': 'fix_p2',
            'twin_birth': 'rin_nii',
        },
    };
    for (let i in obj['gameverse_child']) {
        let class_name = obj['gameverse_child'][i];
        obj['ren_nii'][i] = class_name;
        obj['rin_nii'][i] = class_name;
    };
    return obj;
}