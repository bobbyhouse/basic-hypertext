import { isWellFormedHttp } from '../src/isWellFormedHttp';

describe('Wellformed HTTP/s URLs', () => {
	const expected = true;

	it('HTTP', () => {
		expect(isWellFormedHttp("http://www.example.com")).toBe(expected);
	});

	it('HTTPS', () => {
		expect(isWellFormedHttp("https://www.example.com")).toBe(expected);
	});

	it('Subdomain other than WWW', () => {
		expect(isWellFormedHttp('https://subdomain.example.com')).toBe(expected);
	});
});

describe('Not Wellformed HTTP/s URLs', () => {
	const expected = false;

	it('Empty', () => {
		expect(isWellFormedHttp('')).toBe(expected);
	});

	it('A word', () => {
		expect(isWellFormedHttp('something')).toBe(expected);
	});

	it('No protocol', () => {
		expect(isWellFormedHttp('www.example.com')).toBe(expected);
	});

	it('No scheme, no subdomain', () => {
		expect(isWellFormedHttp('example.com')).toBe(expected);
	});

	it('Unsupported protocol', () => {
		expect(isWellFormedHttp('ftp://something.example.com')).toBe(expected);
	});
});