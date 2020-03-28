import React, { useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './Events';
import OperationLogs from './OperationLogs';
import EventForm from './EventForm';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';

const APP_KEY = 'appWithRedux';

const App = () => {
	// ブラウザが更新されたら最初に、保存しておいたローカルストレージの値を取り出してあげる(ない場合はnullが返る)
	const appState = localStorage.getItem(APP_KEY);
	// JSON.parseによって、文字列で記述されたJSON形式の記述がJSONのデータになる
	const initialState = appState
		? JSON.parse(appState)
		: {
				events: [],
				operationLogs: [],
		  };
	// 引数のreducerは、reducers/index.jsにあるexport defaultのeventsコンポーネントになる
	const [state, dispatch] = useReducer(reducer, initialState);

	// 状態のデータのローカルでの永続化（ブラウザを更新してもデータが残るようにする）
	// 状態に含まれる値が変更されるたびに、ローカルストレージのデータを保存し直す
	useEffect(() => {
		// 第一引数の文字列をキーとして、第二引数の値をローカルストレージに保存する
		// ローカルストレージに保存できる形式（文字列型）に変換
		// JSON.stringfyは、指定した変数の中身のオブジェクトが文字列に変換される対象になる
		localStorage.setItem(APP_KEY, JSON.stringify(state));
	}, [state]);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			<div className="container-fluid">
				<EventForm />
				<Events />
				<OperationLogs />
			</div>
		</AppContext.Provider>
	);
};

export default App;
