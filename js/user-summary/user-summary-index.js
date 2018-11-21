import SummaryApp from './user-summary-app.js';

const app = new SummaryApp();
const root = document.getElementById('root');
root.appendChild(app.render());