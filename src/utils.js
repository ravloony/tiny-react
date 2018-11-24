export function isArray(o) {
  return Object.prototype.toString.call(o) === '[object Array]';
}

export function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
}
