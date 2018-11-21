// import html from '../html.js';
import ShowName from './user-summary-names';


// let template = function(product) {
//     return html`
//         <div> 
//             <h2 class="product-name">${product.name}</h2>
//             <img src="../assets/${product.image}">        
//         </div>
//     `;
// };
const showName = new ShowName();
class MakeRow {
    
    constructor(product, onSelect) {
        this.product = product;
        this.onSelect = onSelect;
    }
    render() {
        const dom = template(this.product);
        const divItem = dom.querySelector('div');
        const product = this.product;
        product.views++;

        divItem.addEventListener('click', () => {
            this.onSelect(product);
        });
              
        return dom;
    }
}

export default MakeRow;