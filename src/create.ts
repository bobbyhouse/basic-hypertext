import { search } from './search';

export function create(text) {
	let arr = text.split(' ');
	const indexes = search(arr);
	indexes.forEach(index => {
		arr[index] = `<a href="${arr[index]}">${arr[index]}</a>`;
	});
	return arr.join(' ');
}

export default create;
