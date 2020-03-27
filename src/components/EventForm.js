import React, { useState, useContext } from 'react';
import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions';
import AppContext from '../contexts/AppContext'

const EventForm = () => {
    const {state, dispatch} = useContext(AppContext)
	// 引数のreducerは、reducers/index.jsにあるexport defaultのeventsコンポーネントになる
	// const [state, dispatch] = useReducer(reducer, []);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const addEvent = e => {
		// イベント実行によってイベントの余分な機能が動くのを停止する
		// これにより、コード通りの意図した動作になる
		e.preventDefault();
		// reducers/index.jsに値を渡す
		dispatch({
			type: CREATE_EVENT,
			title,
			body,
		});

		setTitle('');
		setBody('');
	};

	const deleteAllEvents = e => {
		// 画面全体のリロードを防ぐ
		e.preventDefault();
		// YESとNOが選択できるアラームを表示する
		// YESを選択すると、trueを返す。（NOはfalse）
		const result = window.confirm('全てのイベントを本当に削除してもよいですか？');
		if (result) dispatch({ type: DELETE_ALL_EVENTS });
	};

	const unCreatable = title === '' || body === '';

	return (
		<>
			<h4> イベント作成フォーム</h4>
			<form>
				<div className="form-group">
					{/* JSX ではforはhtmlForになる */}
					<label htmlFor="formEventTitle">タイトル</label>
					{/* htmlForとidを一致することで、ラベルをクリックした時に、inputをクリックした時と同じになる */}
					<input
						className="form-control"
						id="formEventTitle"
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-group">
					{/* JSX ではforはhtmlForになる */}
					<label htmlFor="formEventBody">ボディー</label>
					{/* htmlForとidを一致することで、ラベルをクリックした時に、inputをクリックした時と同じになる */}
					<textarea
						className="form-control"
						id="formEventBody"
						value={body}
						onChange={e => setBody(e.target.value)}
					/>
				</div>
				<button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>
					イベントを作成する
				</button>
				<button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>
					全てのイベントを削除する
				</button>
			</form>
		</>
	);
};

export default EventForm;
