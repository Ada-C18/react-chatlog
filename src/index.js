import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// Not sure if I need this code but it was in the live code, code gets sent into render method and once its rendered its injected
// directly into html inside the anchor div
