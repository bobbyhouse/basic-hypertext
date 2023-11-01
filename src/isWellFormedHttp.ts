const REGEX =  /^(https?):\/\/[A-Za-z0-9.-]+\.[A-Za-z]{2,4}(\S*)$/;

export function isWellFormedHttp(url:string): boolean {
	return (REGEX).test(url);
}

export default isWellFormedHttp;
