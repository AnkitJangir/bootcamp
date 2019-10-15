import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'papercss/dist/paper.css';
import 'animate.css';
//import App from './App5';
//import 'G:/BootCamp/React Programing/project/node_modules/bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
//import { Parent } from './App';
//import {Parent} from './App1';
//import {Parent} from './App2' ;
//import {Parent}  from './App3';
//import {Parent} from './App4';
import App from './App6';
ReactDOM.render(<App/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
