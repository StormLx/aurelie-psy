// Import Boostrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Boostrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import Boostrap Icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import Boxicons CSS
import 'boxicons/css/boxicons.min.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';

import './style.scss'

import {headerHtml} from "./header.ts";
import {heroHtml} from "./hero.ts";
import {presentationHtml} from "./presentation.ts";
import {accompagnementsHtml} from "./accompagnements.ts";

const app = document.querySelector<HTMLDivElement>('#app')!;

app.insertAdjacentHTML('beforeend', headerHtml);
app.insertAdjacentHTML('beforeend', heroHtml);
app.insertAdjacentHTML('beforeend', presentationHtml);
app.insertAdjacentHTML('beforeend', accompagnementsHtml);

AOS.init({
    delay: 0,
    duration: 500,
});


