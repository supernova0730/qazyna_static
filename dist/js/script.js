//searchbar
const searchBtn = document.querySelector('.searchBtn');
const searchBtnField = document.querySelector('.searchForm .searchBtn');
const searchForm = document.querySelector('.searchForm');

searchBtn.addEventListener('click', function(e) {
    e.preventDefault();
    searchForm.classList.add('searchFormRight');
});

searchBtnField.addEventListener('click', function(e) {
    e.preventDefault();
    searchForm.classList.remove('searchFormRight');
});

//changing header onscroll
const header = document.querySelector('#header');
const logo_img = document.querySelector('#logo img');
let about_pressed = false;
let project_pressed = false;
let press_menu_pressed = false;

let change_value = 30;
let header_height = header.offsetHeight;

// about slider
const aboutBtn = document.querySelector('#aboutBtn');
const about = document.querySelector('.about')

aboutBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (project_pressed || header.classList.contains('black_header')) {
        projects.classList.remove('about_active');
        projectsBtn.firstChild.classList.remove('active');
        project_pressed = false;
    }

    if (press_menu_pressed || header.classList.contains('black_header')) {
        pressMenu.classList.remove('about_active');
        pressBtn.firstChild.classList.remove('active');
        press_menu_pressed = false;
    }

    about.classList.toggle('about_active');

    //for default black header
    if (header.classList.contains('black_header')) {
        return;
    }

    let top = window.scrollY;

    if (top <= change_value) {
        header.classList.add('header_scrolled');
        logo_img.src = 'img/Logo_White.svg';
    }

    if (about_pressed && top <= header_height) {
        header.classList.remove('header_scrolled');
        logo_img.src = 'img/Logo_Black.svg';
    }

    aboutBtn.firstChild.classList.toggle('active');
    about_pressed = !about_pressed
});

//projects slider
const projectsBtn = document.querySelector('#projectsBtn');
const projects = document.querySelector('.about.projects')

projectsBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (about_pressed || header.classList.contains('black_header')) {
        about.classList.remove('about_active');
        aboutBtn.firstChild.classList.remove('active');
        about_pressed = false;
    }

    if (press_menu_pressed || header.classList.contains('black_header')) {
        pressMenu.classList.remove('about_active');
        pressBtn.firstChild.classList.remove('active');
        press_menu_pressed = false;
    }

    projects.classList.toggle('about_active');

    //for default black header
    if (header.classList.contains('black_header')) {
        return;
    }

    let top = window.scrollY;

    if (top <= change_value) {
        header.classList.add('header_scrolled');
        logo_img.src = 'img/Logo_White.svg';
    }

    if (project_pressed && top <= header_height) {
        header.classList.remove('header_scrolled');
        logo_img.src = 'img/Logo_Black.svg';
    }

    projectsBtn.firstChild.classList.toggle('active');
    project_pressed = !project_pressed
});

//presscenter slider
const pressBtn = document.querySelector('#pressMenuBtn');
const pressMenu = document.querySelector('.about.projects.pressMenu');

pressBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (about_pressed || header.classList.contains('black_header')) {
        about.classList.remove('about_active');
        aboutBtn.firstChild.classList.remove('active');
        about_pressed = false;
    }

    if (project_pressed || header.classList.contains('black_header')) {
        projects.classList.remove('about_active');
        projectsBtn.firstChild.classList.remove('active');
        project_pressed = false;
    }

    pressMenu.classList.toggle('about_active');

    if (header.classList.contains('black_header')) {
        return;
    }

    let top = window.scrollY;

    if (top <= change_value) {
        header.classList.add('header_scrolled');
        logo_img.src = 'img/Logo_White.svg';
    }

    if (press_menu_pressed && top <= header_height) {
        header.classList.remove('header_scrolled');
        logo_img.src = 'img/Logo_Black.svg';
    }

    pressBtn.firstChild.classList.toggle('active');
    press_menu_pressed = !press_menu_pressed;
});

// swiper
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});