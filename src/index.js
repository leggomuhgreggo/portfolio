import React from 'react';
import { render } from 'react-snapshot';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/shared.css';

// eslint-disable-next-line
injectGlobal`${normalize()}`;

render(<App />, document.getElementById('root'));
registerServiceWorker();
