import { searchIndex } from './searchIndex';

export function create(text) {
	let arr = text.split(' ');
	const indexes = searchIndex(arr);
	indexes.forEach(index => {
		arr[index] = `<a href="${arr[index]}>${arr[index]}</a>`;
	});
	return arr.join(' ');
}

export default create;
