import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from '../actions';
// action = {
//     type: 'CREATE_EVENT',
//     title: '2020東京オリンピックのお知らせ',
//     body: '2020年に東京でオリンピックを開催します！つきましては、、、、'
// }

// #before
// state = []
// #after
// state = [
// {
//     type: 'CREATE_EVENT',
//     title: '2020東京オリンピックのお知らせ',
//     body: '2020年に東京でオリンピックを開催します！つきましては、、、、'
// }
// #before
// state = [
// 	{ id: 1, title: 'タイトル1', body: 'ボディー1' },
// 	{ id: 2, title: 'タイトル2', body: 'ボディー2' },
// 	{ id: 3, title: 'タイトル3', body: 'ボディー3' },
// ];
// #after
// state = [
// 	{ id: 1, title: 'タイトル1', body: 'ボディー1' },
// 	{ id: 2, title: 'タイトル2', body: 'ボディー2' },
// 	{ id: 3, title: 'タイトル3', body: 'ボディー3' },
//  {
//    id: 4,
//    title: '2020東京オリンピックのお知らせ',
//    body: '2020年に東京でオリンピックを開催します！つきましては、、、、'
//  }
// ];
const events = (state = [], action) => {
	switch (action.type) {
		case CREATE_EVENT:
			const event = { title: action.title, body: action.body };
			const length = state.length;
			// idは状態が空の時１となり、状態の要素が存在する時は、状態の最後の要素のidを参照し、それに１を加える
			let id = length === 0 ? 1 : state[length - 1].id + 1;
			return [...state, { id, ...event }];
		case DELETE_EVENT:
			// filter関数は、引数のコールバックの返り値がtrueとなる時の要素のみからなる配列を生成する
			// この場合、action.idに一致しない要素からなる配列を生成する
			return state.filter(event => event.id !== action.id);
		case DELETE_ALL_EVENTS:
			return [];
		default:
			return state;
	}
};

export default events;
