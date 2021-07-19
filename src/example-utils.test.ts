import { methodA, methodB } from './example-utils';

describe('example-utils', () => {
  describe('methodA()', () => {
    it('should return 2', () => {
      expect.assertions(1);

      expect(methodA()).toBe(2);
    });
  });

  describe('methodB()', () => {
    it('should multiply the two provided parameters', () => {
      expect.assertions(1);

      expect(methodB(3, 4)).toBe(12);
    });
  });
});
