import * as tape from 'tape';

tape('a Map is an Object instance', (test: tape.Test) => {
  const dummyMap = new Map([['foo', 'bar']]);
  test.assert(dummyMap instanceof Object);
  return test.end();
});

tape('a Map is not a Function instance', (test: tape.Test) => {
  const dummyMap = new Map([['foo', 'bar']]);
  test.assert(dummyMap instanceof Function === false);
  return test.end();
});

tape('a Map is  a Map instance', (test: tape.Test) => {
  const dummyMap = new Map([['foo', 'bar']]);
  test.assert(dummyMap instanceof Map);
  return test.end();
});

tape('we can get the size of a Map', (test: tape.Test) => {
  const dummyMap = new Map([
    [0, 'Arrays start at zero, why not map ?'],
    [1, 'foo'],
    [2, 'bar'],
    [3, 'baz'],
    [4, 'qux'],
  ]);
  test.assert(dummyMap.size === 5);
  return test.end();
});

tape('We can iterate on Map', (test: tape.Test) => {
  const dummyMap = new Map([['foo', 'bar']]);
  dummyMap.forEach((value, key) => {
    test.assert(value === 'bar');
    test.assert(key === 'foo');
  });
  return test.end();
});

tape('We can get all the keys in an iterable', (test: tape.Test) => {
  const dummyMap = new Map([['foo', 'bar'], ['baz', 'qux']]);
  test.assert(dummyMap.keys().next().value === 'foo');
  return test.end();
});

tape('We can get all the values in an iterable', (test: tape.Test) => {
  const dummyMap = new Map([['foo', 'bar'], ['baz', 'qux']]);
  test.assert(dummyMap.values().next().value === 'bar');
  return test.end();
});
tape(
  'We can get all the [key, value] pairs in an iterable',
  (test: tape.Test) => {
    const dummyMap = new Map([['foo', 'bar'], ['baz', 'qux']]);
    test.equals(dummyMap.entries().next().value[0], 'foo');
    test.equals(dummyMap.entries().next().value[1], 'bar');
    return test.end();
  },
);

tape('we can get keys in an array', (test: tape.Test) => {
  const dummyMap = new Map([
    [0, 'Arrays start at zero, why not map ?'],
    [1, 'foo'],
    [2, 'bar'],
    [3, 'baz'],
    [4, 'qux'],
  ]);
  const expectedArray = [0, 1, 2, 3, 4];
  const getKeysInArray = (map: Map<number, string>, acc: number[] = []) => {
    map.forEach((_value, key) => {
      acc = [...acc, key];
    });
    return acc;
  };
  getKeysInArray(dummyMap).map((value, index) => {
    test.assert(value === expectedArray[index]);
  });
  return test.end();
});

tape('we can get values in an array', (test: tape.Test) => {
  const dummyMap = new Map([
    [0, 'Arrays start at zero, why not map ?'],
    [1, 'foo'],
    [2, 'bar'],
    [3, 'baz'],
    [4, 'qux'],
  ]);
  const expectedArray = [
    'Arrays start at zero, why not map ?',
    'foo',
    'bar',
    'baz',
    'qux',
  ];
  const getValuesInArrray = (map: Map<number, string>, acc: string[] = []) => {
    map.forEach(value => {
      acc = [...acc, value];
    });
    return acc;
  };
  test.deepEqual(getValuesInArrray(dummyMap), expectedArray);
  return test.end();
});

tape('We can get an object out of the Map', (test: tape.Test) => {
  const dummyMap = new Map([
    ['key0', 'Arrays start at zero, why not Map objects ?'],
    ['key1', 'foo'],
    ['key2', 'bar'],
    ['key3', 'baz'],
    ['key4', 'qux'],
  ]);
  const expectedObject: { [key: string]: string } = {
    key0: 'Arrays start at zero, why not Map objects ?',
    key1: 'foo',
    key2: 'bar',
    key3: 'baz',
    key4: 'qux',
  };
  const fromMapToObject = (map: Map<string, string>, acc = {}) => {
    map.forEach(
      (value, key) =>
        (acc = {
          ...acc,
          [key]: value,
        }),
    );
    return acc;
  };
  test.deepEqual(fromMapToObject(dummyMap), expectedObject);
  return test.end();
});
