import React, { useContext } from 'react';
import Event from './Event';
import AppContext from '../contexts/AppContext';
import App from './App';

const Events = ({ state, dispatch }) => {
	const value = useContext(AppContext);
	return (
		<>
			<div>{value}</div>
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
				<tbody>
					{/* mapによって、配列から要素を１つずつ取り出せる */}
					{/* 第２引数のindexをタグのkey属性に埋め込むことで、要素を参照でき、削除等で用いることができる */}
					{state.map((event, index) => {
						return <Event key={index} event={event} dispatch={dispatch} />;
					})}
				</tbody>
			</table>
		</>
	);
};

export default Events;
