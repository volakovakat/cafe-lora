import "./Drink.css";
import {Layer} from "../Layer/Layer.js";

const layerProps = {
    color: '#feeeca',
    label: 'mléčná pěna',
}

export const Drink = (props) => {
    const {name, image} = props;

    const element = document.createElement("div");
    element.classList.add("drink");
    element.innerHTML = `
       <div class="drink__product">
         <div class="drink__cup">
           <img src="${image}">
         </div>
         <div class="drink__info">
           <h3>${name}</h3>
             ${Layer(layerProps)}
         </div>
       </div>
       <div class="drink__controls">
         <button class="order-btn">
           Objednat
         </button>
       </div>
    `;

    return element.outerHTML;
}

