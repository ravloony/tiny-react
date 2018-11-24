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

export function isHTMLUnknownElement(elem) {
    return isThing(elem, 'HTMLUnknownElement');
}
