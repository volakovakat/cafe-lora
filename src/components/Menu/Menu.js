import "./Menu.css";
import {Drink} from "./components/Drink/Drink.js";

const headers = {"Authorization": "Email volakova.kat@gmail.com"}

export const Menu = () => {
   const element = document.createElement('section');
   element.id = "menu";
   element.classList.add("menu");

   fetch('https://apps.kodim.cz/daweb/cafelora/api/me/drinks', {headers:headers})
       .then((response) => {
          return response.json();
       }).then((data) => {
          const e = document.querySelector("section.menu");
          e.innerHTML = `
          <div class="container">
            <h2>Naše nabídka</h2>
            <p class="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
            </p>
            <div class="drinks-list">
               ${data.results.map(d => Drink(d))}
            </div>
            <div class="order-detail">
                <a href="/objednavka">Detail objednávky</a>
            </div>
          </div>
          `;
   })
   return element;
};