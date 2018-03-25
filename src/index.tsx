import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

const app = (<Router><App /></Router>);
const root = document.getElementById('root') as HTMLElement;

ReactDOM.render(app, root);
registerServiceWorker();
