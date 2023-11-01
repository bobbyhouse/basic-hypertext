import { search } from '../src/search';

describe('Contains a URL', () => {
    it('Only URL', () => {
        const text = 'https://www.example.com';
        const input = text.split(' ');
        const expected = [0];
		expect(search(input)).toStrictEqual(expected);
	});

    it('Begin of text', () => {
        const text = 'https://www.example.com Text';
        const input = text.split(' ');
        const expected = [0];
		expect(search(input)).toStrictEqual(expected);
    });

    it('Middle of text', () => {
        const text = 'Text https://www.example.com text';
        const input = text.split(' ');
        const expected = [1];
		expect(search(input)).toStrictEqual(expected);
	});

    it('End of text', () => {
        const text = 'Text https://www.example.com';
        const input = text.split(' ');
        const expected = [1];
		expect(search(input)).toStrictEqual(expected);
	});
});

describe('Multiple URLs', () => {
    it('Only URLs', () => {
        const text = 'https://www.example.com https://www.example.com';
        const input = text.split(' ');
        const expected = [0, 1];
		expect(search(input)).toStrictEqual(expected);
    });

    it('Begin of text', () => {
        const text = 'https://www.example.com https://www.example.com Text';
        const input = text.split(' ');
        const expected = [0, 1];
		expect(search(input)).toStrictEqual(expected);
    });

    it('Middle of text', () => {
        const text = 'Text https://www.example.com https://www.example.com Text';
        const input = text.split(' ');
        const expected = [1, 2];
		expect(search(input)).toStrictEqual(expected);
    });

    it('End of text', () => {
        const text = 'Text https://www.example.com https://www.example.com';
        const input = text.split(' ');
        const expected = [1, 2];
		expect(search(input)).toStrictEqual(expected);
    });
});

describe('Does not contain URL', () => {
    const expected = [];
    it('One text', () => {
        const text = 'Text';
        const input = text.split(' ');
		expect(search(input)).toStrictEqual(expected);
    });

    it('Some text', () => {
        const text = 'Text text';
        const input = text.split(' ');
		expect(search(input)).toStrictEqual(expected);
    });

    it('Empty', () => {
        const text = '';
        const input = text.split(' ');
		expect(search(input)).toStrictEqual(expected);
    });
});