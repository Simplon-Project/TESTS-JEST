const {
    findMaxValue,
    removeDuplicates,
    includesValue,
    sortArray
  } = require('./ex6');
  
  // Test de la fonction findMaxValue
  describe('findMaxValue function', () => {
    test('should return null for an empty array', () => {
      expect(findMaxValue([])).toBe(null);
    });
  
    test('should return the maximum value in the array', () => {
      expect(findMaxValue([3, 1, 8, 4, 2])).toBe(8);
      expect(findMaxValue([10, 5, 7])).toBe(10);
    });
  });
  
  // Test de la fonction removeDuplicates
  describe('removeDuplicates function', () => {
    test('should remove duplicate values from an array', () => {
      expect(removeDuplicates([1, 2, 3, 1, 4, 2])).toEqual([1, 2, 3, 4]);
      expect(removeDuplicates(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
    });
  });
  
  // Test de la fonction includesValue
  describe('includesValue function', () => {
    test('should return true if array includes specific value', () => {
      expect(includesValue([1, 2, 3, 4, 5], 3)).toBe(true);
      expect(includesValue(['a', 'b', 'c'], 'b')).toBe(true);
    });
  
    test('should return false if array does not include specific value', () => {
      expect(includesValue([1, 2, 3, 4, 5], 6)).toBe(false);
      expect(includesValue(['a', 'b', 'c'], 'd')).toBe(false);
    });
  });
  
  // Test de la fonction sortArray
  describe('sortArray function', () => {
    test('should sort array of numbers in ascending order', () => {
      expect(sortArray([3, 1, 4, 2])).toEqual([1, 2, 3, 4]);
      expect(sortArray([10, 5, 7])).toEqual([5, 7, 10]);
    });
  });
  