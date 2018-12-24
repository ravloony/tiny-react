import { camelCaseToKebabCase } from '../src/utils';

test('camelCase becomes camel-case', () => {
  expect(camelCaseToKebabCase('camelCase')).toBe('camel-case');
  expect(camelCaseToKebabCase('camelCaseCase')).toBe('camel-case-case');
});


