import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './Events';
import EventForm from './EventForm';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';

const App = () => {
	// 引数のreducerは、reducers/index.jsにあるexport defaultのeventsコンポーネントになる
	const [state, dispatch] = useReducer(reducer, []);

	return (
		<AppContext.Provider value={'Hello, I am a Provider'}>
			<div className="container-fluid">
				<EventForm state={state} dispatch={dispatch} />
				<Events state={state} dispatch={dispatch} />
			</div>
		</AppContext.Provider>
	);
};

export default App;
