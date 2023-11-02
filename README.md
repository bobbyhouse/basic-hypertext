# basic-hypertext

## Description

basic-hypertext is a small and simple library that can take a body of text and replace the valid URLs with hypertext formatted URLs.

For example:

```html
This text http://www.example.com
```

Is transformed into:
```html
This text <a href="http://www.example.com">http://www.example.com</a>
```

Using code like the following:
```javascript
import { create } from 'basic-hypertext';
const text = 'Text http://www.example.com';
const transformed = create(text);
```

## Installation

```shell
$ npm i basic-hypertext
```

## Testing

```shell
$ npm i
$ npm test
```

## License

basic-hypertext is released under the [MIT license](https://raw.githubusercontent.com/bobbyhouse/basic-hypertext/main/LICENSE).
