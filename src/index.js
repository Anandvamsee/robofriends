import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './containers/App.js';   // ../ - means leave the folder which you are in currently. It is src in this case

//render the Code component! (Component name should be capitalized!)
ReactDOM.render( <App/>, document.getElementById('root'))  


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
