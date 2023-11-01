function indexOfHypertext(text) {
	text.split(' ').map((item) => (
		isWellFormed(item) && isValidUrl(item)
	)).reduce([], (acc, curr, index) => (
		curr ? acc.concat(index) : acc
	));
}

function createReplaced(text) {
	let arr = text.split(' ');

	const indicies = indexOfHypertext(arr);
	indicies.forEach((index) => {
		arr[index] = `<a href="${arr[index]}>${arr[index]}</a>`;
	});

	return arr.join(' ');
}

function isWellFormedUrl(text) {
	const urlRegex = /^(https?):\/\/[^\s/$.?#].[^\s]*$/;
}

function isValidUrl(text) {
	try {
		const url = new URL(text);
	} catch (error) {
		return false;
	}
	return true;
}
