import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';

const App = () => {
	// 引数のreducerは、reducers/index.jsにあるexport defaultのeventsコンポーネントになる
	const [state, dispatch] = useReducer(reducer, []);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const addEvent = e => {
		// イベント実行によってイベントの余分な機能が動くのを停止する
		// これにより、コード通りの意図した動作になる
		e.preventDefault();
		// reducers/index.jsに値を渡す
		dispatch({
			type: 'CREATE_EVENT',
			title,
			body,
		});

		setTitle('');
		setBody('');
	};
	return (
		<div className="container-fluid">
			<h4>イベント作成フォーム</h4>
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
						onChange={e => setBody(e.target.e)}
					/>
				</div>
				<button className="btn btn-primary" onClick={addEvent}>
					イベントを作成する
				</button>
				<button className="btn btn-danger">全てのイベントを削除する</button>
			</form>

			<h4>イベント一覧</h4>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>ID</th>
						<th>タイトル</th>
						<th>ボディー</th>
						<th></th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
		</div>
	);
};

export default App;
