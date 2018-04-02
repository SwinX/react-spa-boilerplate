import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './app';

ReactDOM.hydrate(<App {...window.__APP_INITIAL_STATE__}/>, document.getElementById('root'));
