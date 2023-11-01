import { isValid } from '../src/isValid';

describe('Invalid URLs', () => {
    const expected = false;

    it('A word', () => {
        expect(isValid('word')).toBe(false);
    });

    it('Javascript', () => {
        expect(isValid('http://javascript:alert("Hello")')).toBe(expected);
    });
});

describe('Valid URLs', () => {
    const expected = true;
    it('Unsupported protocol', () => {
		expect(isValid('ftp://something.example.com')).toBe(expected);
	});
});