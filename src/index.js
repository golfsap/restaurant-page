import "./styles.css";
import { renderHomepage } from "./home.js";
import { renderMenuPage } from "./menu.js";
import { renderAboutPage } from "./about.js";

console.log("Hello, World!");

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');

homeBtn.addEventListener('click', renderHomepage);
menuBtn.addEventListener('click', renderMenuPage);
aboutBtn.addEventListener('click', renderAboutPage);

renderHomepage();
// renderMenuPage();