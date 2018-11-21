import html from '../html.js';
import productsApi from '../products-api.js';
import ProductSelector from '../product-selector.js';

const products = productsApi.getAll();

function makeTemplate() {
    return html`
    <section class="summary-table">
        <h2>
            Summary of Results
        </h2>
        <div class="user-summary">
        </div>
    </section>
`;
}

class SummaryApp {
    render() {
        const dom = makeTemplate();
        const dataRow = dom.querySelector('.user-summary');
        const productz = products;
        // const percent = (clicks / views) * 100;
        const populateRow = new PopulateRow(() => {
            name = productz.name,
            views = productz.views,
            clicks = productz.clicks;
            percent = (clicks / views) * 100;
        });
        
        phrase = 'Item ' + name + 'received ' + clicks + ' clicks, out of ' + views + ' views, totaling ' + percent + 'of total votes.';
        return phrase;

        dataRow.appendChild(populateRow.render());
        return dom;
        
    }
}
const summaryApp = new SummaryApp();
document.getElementById('root').appendChild(summaryApp.render());
export default SummaryApp;