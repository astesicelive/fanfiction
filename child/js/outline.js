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
    cur.style.cssText = 'scroll-margin-top: 80px;';
    
    let div_txt = document.createElement('div');
    div_txt.setAttribute('id', cur.getAttribute('id'));
    if (cur.className == 'divider') {
        div_txt.setAttribute('class', 'main');
    } else {
        div_txt.setAttribute('class', 'sub');
    };
    let txt = document.createTextNode(cur.textContent);
    div_txt.appendChild(txt);
    div_txt.addEventListener('click', scroll_to_outline);
    outline_container.appendChild(div_txt);
});

document.body.appendChild(outline_container);

let outline_btn = document.querySelector('.outline_button');
outline_btn.addEventListener("click", toggle_outline);

function toggle_outline() {
    let container = $('.outline_container');
    if (container.css('display') == 'none') {
        container.css('display', 'block');
        document.body.style.overflow = 'hidden';
    } else {
        container.css('display', 'none');
        document.body.style.overflow = '';
    };
};

function scroll_to_outline() {
    $('.outline_container').css('display', 'none');
    let id = $(this).attr('id');
    let section_type;
    if (this.classList.contains('main')) {
        section_type = 'divider';
    } else {
        section_type = 'title';
    };
    let el = document.querySelector(`.${section_type}#${id}`);
    el.scrollIntoView({ block: "start" , behavior: "smooth"});
};