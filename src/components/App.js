import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<div className="container-fluid">
			<h4>イベント作成フォーム</h4>
			<form>
				<div className="form-group">
					{/* JSX ではforはhtmlForになる */}
					<label htmlFor="formEventTitle">タイトル</label>
					{/* htmlForとidを一致することで、ラベルをクリックした時に、inputをクリックした時と同じになる */}
					<input className="form-control" id="formEventTitle" />
				</div>
				<div className="form-group">
					{/* JSX ではforはhtmlForになる */}
					<label htmlFor="formEventBody">ボディー</label>
					{/* htmlForとidを一致することで、ラベルをクリックした時に、inputをクリックした時と同じになる */}
					<textarea className="form-control" id="formEventBody" />
				</div>

				<button className="btn btn-primary">イベントを作成する</button>
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
