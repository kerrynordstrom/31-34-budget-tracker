import'./style/main.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import App from './component/app';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import session from './lib/redux-session';
import reporter from './lib/redux-reporter';

let store = null;

if(process.env.NODE_ENV === 'production') {
	store = createStore(reducer, applyMiddleware(session));
} else {
	store = createStore(reducer, composeWithDevTools(
	applyMiddleware(reporter, session)
	));
}

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, container
);