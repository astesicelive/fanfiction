let outline_container = document.createElement('div')
outline_container.setAttribute('class', 'outline_container');

let all_sections = document.querySelectorAll(`.divider, .title`);
let outline_sections = [];
all_sections.forEach((cur) => {
    if (cur.getAttribute('id')) {
        outline_sections.push(cur);
    };
});