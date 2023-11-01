import { isValid } from './isValid';
import { isWellFormedHttp } from './isWellFormedHttp';

function searchMap(strs: string[]): boolean[] | [] {
	return strs.map(item => (
		isWellFormedHttp(item) && isValid(item)
	));
}

function searchReduce(parts: boolean[]): number[] {
	return parts.reduce<number[]>((acc, curr, index) => (
		curr ? acc.concat(index) : acc
	), []);
};

export function search(str: string[]): number[] | [] {
	const transformed = searchMap(str);
	return searchReduce(transformed);
}

export default search;