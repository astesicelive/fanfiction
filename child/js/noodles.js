// timeline connections or sth
let noodle_obj = () => {
    let obj = {
        // first choice (p5 time travel happening or not -> admin hibiki / record breaker world)
        'gameverse_child': {
            'gameverse': ['gameverse_child'],
            'year_2012': ['aftermath_child', 'p1'],
            'year_2013': ['aftermath_child'],
            'year_2014': ['child_innocent_sin', 'child_eternal_punishment', 'p3_past', 'aftermath_child'],
        },
        'gameverse_rb': {
            'gameverse': ['gameverse_rb'],
            'year_2012': ['aftermath_rb'],
            'year_2014': ['p3_past'],
        },
        // second choice (hibiki decides which baby to make first or if the record is broken)
        'ren_nii': {
            // + gameverse_child
            'twin_birth': ['child_birthday', 'ren_nii'],
            'year_2016': ['fix_p2'],
            'year_2017': ['ren_nii'],
            'year_2018': ['child'],
            'year_2019': ['child'],
            'year_2020': ['jungo', 'vs_yaldy'],
            'year_2024': ['p3_journey'],
        },
        'rin_nii': {
            // + gameverse_child
            'twin_birth': ['child_birthday', 'rin_nii'],
            'year_2016': ['fix_p2'],
            'year_2017': ['rin_nii'],
            'year_2018': ['child'],
            'year_2019': ['child'],
            'year_2020': ['jungo', 'vs_yaldy'],
            'year_2024': ['p3_journey'],
        },
        'only_akira': {
            // + gameverse_rb
            'twin_birth': ['only_akira'],
            'year_2018': ['rb'],
        },
    };
    for (let i in obj['gameverse_child']) {
        let class_name = obj['gameverse_child'][i];
        obj['ren_nii'][i] = class_name;
        obj['rin_nii'][i] = class_name;
    };
    for (let i in obj['gameverse_rb']) {
        let class_name = obj['gameverse_rb'][i];
        obj['only_akira'][i] = class_name;
    };
    return obj;
}