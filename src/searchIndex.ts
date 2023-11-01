import { isValid } from './isValid';
import { isWellFormedHttp } from './isWellFormedHttp';

export function searchIndex(strs: [string]): [number | null] {
	return strs.map(item => (
		isWellFormedHttp(item) && isValid(item)
	))
	.reduce([], (acc, curr, index) => (
		curr ? acc.concat(index) : acc
	));
}

export default searchIndex;
