function isThing(o, thing) {
  return Object.prototype.toString.call(o) === `[object ${thing}]`;
}

export function isArray(o) {
    return isThing(o, 'Array');
}

export function isString(o) {
    return isThing(o, 'String');
}

export function isFunction(o) {
    return isThing(o, 'Function');
}

var validNodes = [
    'article',
    'aside',
    'blockquote',
    'body',
    'div',
    'footer',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'main',
    'nav',
    'p',
    'section',
    'span'
];

export function isElement(type) {
    return validNodes.includes(type);
}
