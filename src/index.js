import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import './styles/shared.css';

injectGlobal`${normalize()}`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
