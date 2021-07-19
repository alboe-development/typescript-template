import ExampleClass from './example-class';

describe('ExampleClass', () => {
  describe('.constructor()', () => {
    it('should create a new `ExampleClass` instance', () => {
      expect.assertions(1);

      const example = new ExampleClass(1, 2);

      expect(example instanceof ExampleClass).toBe(true);
    });
  });

  describe('.multiply()', () => {
    it('should multiply the two provided constructor parameters', () => {
      expect.assertions(1);

      const example = new ExampleClass(1, 2);

      expect(example.multiply()).toBe(2);
    });
  });
});
