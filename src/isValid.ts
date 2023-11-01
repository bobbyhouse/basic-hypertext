export function isValid(url: string): boolean {
	try {
		new URL(url);
	} catch (error) {
		return false;
	}
	return true;
}

export default isValid;
