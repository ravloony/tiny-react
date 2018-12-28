import { camelCaseToKebabCase, isFunction, isArray, isString } from '../src/utils';

test('camelCase becomes camel-case', () => {
    expect(camelCaseToKebabCase('camelCase')).toBe('camel-case');
    expect(camelCaseToKebabCase('camelCaseCase')).toBe('camel-case-case');
});

test('isFunction recognizes lambdas', () => {
    expect(isFunction(() => {})).toBe(true);
});

test('isFunction recognizes functions', () => {
    function testf() {
    }
    expect(isFunction(testf)).toBe(true);
});


test('isFunction recognizes returned closures', () => {
    let t = (s) => {
        let x = 1;
        return () => x + s;
    };
    let y = t(2);
  expect(isFunction(y)).toBe(true);
});


test('isArray recognizes empty arrays', () => {
  expect(isArray([])).toBe(true);
});

test('isArray recognizes full arrays', () => {
  expect(isArray([1,2,3])).toBe(true);
});


test('isString recognizes empty string', () => {
  expect(isString('')).toBe(true);
  expect(isString("")).toBe(true);
  expect(isString(``)).toBe(true);
});

