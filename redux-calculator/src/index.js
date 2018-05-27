import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CalculatorContainer from './containers/CalculatorContainer'
ReactDOM.render(
<CalculatorContainer />,
 document.getElementById('root'));
registerServiceWorker();
