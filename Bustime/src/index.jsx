import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/App';
import busTimeArr from './assets/busTimeArr';

ReactDOM.render(<App data={busTimeArr} />, document.getElementById('root'));
