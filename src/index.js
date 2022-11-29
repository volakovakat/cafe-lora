import "./style.css";

import {Banner} from "./components/Banner/Banner.js";
import {Menu} from "./components/Menu/Menu.js";
import {Gallery} from "./components/Gallery/Gallery.js";
import {Contact} from "./components/Contact/Contact.js";
import {Header} from "./components/Header/Header.js";
import {Footer} from "./components/Footer/Footer.js";

const pageElement = document.createElement('div');
pageElement.classList.add('page');

const main = document.createElement('main');
main.append(
    Banner(),
    Menu(),
    Gallery(),
    Contact(),
);

pageElement.append(
    Header(),
    main,
    Footer(),
);

document.querySelector('#app').append(pageElement);
