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
});