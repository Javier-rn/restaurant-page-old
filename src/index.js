import { homePageLoad } from "../src/homepage-load";
import { menuLoad } from "../src/menu-load";
import { contactLoad } from "../src/contact-load";

const contentDiv = document.querySelector('#content');

homePageLoad();

const homeBtn = document.querySelector('#homeBtn');
const menuBtn = document.querySelector('#menuBtn');
const contactBtn = document.querySelector('#contactBtn');

homeBtn.addEventListener('click', function (e) {
    contentDiv.innerHTML = '';
    e.preventDefault();
    homePageLoad();
}); menuBtn.addEventListener('click', function (e) {
    contentDiv.innerHTML = '';
    e.preventDefault();
    menuLoad();
});
contactBtn.addEventListener('click', function (e) {
    contentDiv.innerHTML = '';
    e.preventDefault();
    contactLoad();
});