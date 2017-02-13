import React           from 'react';
import {render}        from 'react-dom';
import {Provider}      from 'react-redux';
import configureStore  from './store/configureStore';
import AirTravel       from './container/AirTravel';
import './public/main.css';

const store = configureStore();

render(
		<Provider store={store}>
			<AirTravel />
		</Provider>,

document.getElementById('root')
);
