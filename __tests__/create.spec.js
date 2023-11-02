import { create } from '../src/create';

describe('Single line text', () => {
    it('Only URL', () => {
        const text = 'https://www.example.com';
        const expected = '<a href="https://www.example.com">https://www.example.com</a>';  
        expect(create(text)).toStrictEqual(expected);
    });

    it('Begin URL', () => {
        const text = 'https://www.example.com Text';
        const expected = '<a href="https://www.example.com">https://www.example.com</a> Text';  
        expect(create(text)).toStrictEqual(expected);
    });

    it('Middle URL', () => {
        const text = 'Text https://www.example.com Text';
        const expected = 'Text <a href="https://www.example.com">https://www.example.com</a> Text';  
        expect(create(text)).toStrictEqual(expected);
    });

    it('End URL', () => {
        const text = 'Text https://www.example.com';
        const expected = 'Text <a href="https://www.example.com">https://www.example.com</a>';  
        expect(create(text)).toStrictEqual(expected);
    });

    it('Multiple URLs', () => {
        const text = 'Text https://www.example.com https://www.example.com';
        const expected = 'Text <a href="https://www.example.com">https://www.example.com</a> <a href="https://www.example.com">https://www.example.com</a>';  
        expect(create(text)).toStrictEqual(expected);
    });

    it('Multi-line text', () => {
        const text = `
            Text\n
            https://www.example.com\n
            Text https://www.example.com\n
            https://www.example.com Text\n
            text https://www.example.com https://www.example.com text`;
        const expected = `
            Text\n
            <a href="https://www.example.com">https://www.example.com</a>\n
            Text <a href="https://www.example.com">https://www.example.com</a>\n
            <a href="https://www.example.com">https://www.example.com</a> Text\n
            text <a href="https://www.example.com">https://www.example.com</a> <a href="https://www.example.com">https://www.example.com</a> text`;
        expect(create(expected)).toStrictEqual(expected);
    });
});