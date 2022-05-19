// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
// Модуль прокрутки к блоку
import { gotoBlock } from "./scroll/gotoblock.js";

const contacts = document.getElementById('contacts');
const btnScroll = document.querySelector('.button-scroll');
let contactsHeight = contacts.offsetTop;

window.addEventListener('scroll', function() {
    let btnScrollHeight = window.pageYOffset + document.documentElement.clientHeight;
    // console.dir(contactsHeight);
    // console.dir(btnScrollHeight);
    if(contactsHeight < btnScrollHeight) {
        btnScroll.classList.add('button-scroll_hide');
    } else {
        btnScroll.classList.remove('button-scroll_hide');
    }
});



const main = document.querySelector('main.page');
const mainChildren = main.children;

btnScroll.addEventListener('click', function() {
    let btnScrollHeight = window.pageYOffset + document.documentElement.clientHeight;
    Array.from(mainChildren).forEach(function (item, i, mainChildren) {
        const itemTop = item.offsetTop;
        const itemBottom = item.offsetTop + item.clientHeight;
        if(item.id != '' && item.id != 'contacts') {
            console.log(`кнопка ${btnScrollHeight}`);
            if(itemTop < btnScrollHeight && btnScrollHeight < itemBottom) {
                gotoBlock(mainChildren[i+1]);
            }
        }
    })
})



