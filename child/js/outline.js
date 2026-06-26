let outline_container = document.createElement('div')
outline_container.setAttribute('class', 'outline_container');

let all_sections = document.querySelectorAll(`.divider, .title`);
let outline_sections = [];
all_sections.forEach((cur) => {
    if (cur.getAttribute('id')) {
        outline_sections.push(cur);
    };
});
outline_sections.forEach((cur) => {
    let div_txt = document.createElement('div');
    if (cur.className == 'divider') {
        div_txt.setAttribute('class', 'main');
    } else {
        div_txt.setAttribute('class', 'sub');
    };
    let txt = document.createTextNode(cur.textContent);
    div_txt.appendChild(txt);
    outline_container.appendChild(div_txt);
});

document.body.appendChild(outline_container);