const groupBy = require('./groupBy');

describe('check if groupBy returns json list grouped by key', () => {
  test('should return ', () => {
    const input = [{ key1: 'A', key2: 'X', key3: 'P' }, { key1: 'B', key2: 'Y', key3: 'Q' }, { key1: 'A', key2: 'Z', key3: 'R' }];
    const output = { A: [{ key1: 'A', key2: 'X', key3: 'P' }, { key1: 'A', key2: 'Z', key3: 'R' }], B: [{ key1: 'B', key2: 'Y', key3: 'Q' }] };

    expect(groupBy(input, 'key1')).toEqual(output);
  });
});

describe('check if groupBy of empty array returns jempty object', () => {
  test('should return ', () => {
    const input = [];
    const output = {};

    expect(groupBy(input, 'key1')).toEqual(output);
  });
});
