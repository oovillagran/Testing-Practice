const Calculator = require('./calculator');

describe('calculator', () => {
  let calculator 
  beforeEach(() => {
    calculator = new Calculator ();
  })
  
  describe ('add method', () => {
    test('add two positive numbers', () => {
      expect(calculator.add(4, 5)).toBe(9);
    });
  
  
    test('add a positive and a zero numbers', () => {
      expect(calculator.add(0, 1)).toBe(1);
    });

    test('add two negative numbers', () => {
      expect(calculator.add(-2, -5)).toBe(-7);
    });
  });

  describe ('subtract method', () => {
    test('subtracts two positive numbers', () => {
      expect(calculator.subtract(7, 5)).toBe(2);
    });
  
  
    test('subtracts two positive numbers, second number bigger than first one', () => {
      expect(calculator.subtract(0, 1)).toBe(-1);
    });

    test('subtracts two negative numbers', () => {
      expect(calculator.subtract(-2, -5)).toBe(3);
    });
  });

  describe ('divide method', () => {
    test('divide two positive numbers', () => {
      expect(calculator.divide(15, 5)).toBe(3);
    });
  
  
    test('divide two negative numbers', () => {
      expect(calculator.divide(-100, -4)).toBe(25);
    });

    test('divide by zero', () => {
      expect(() => {
        calculator.divide(5, 0);
      }).toThrow('Cannot divide by zero');
    });
  });

  describe ('multiply method', () => {
    test('multiply two positive numbers', () => {
      expect(calculator.multiply(7, 5)).toBe(35);
    });
  
  
    test('multiply two negative numbers', () => {
      expect(calculator.multiply(-10, -4)).toBe(40);
    });

    test('multiply by zero', () => {
      expect(calculator.multiply(-2, 0)).toBe(0);
    });
  });
  
});
