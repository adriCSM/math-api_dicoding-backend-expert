const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A Figure Calculator', () => {
  it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea', () => {
    const figureCalculator = new FigureCalculator();
    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });
});

describe('A calculateRectanglePerimeter function', () => {
  it('should throw error when not given 2 parameters', () => {
    const figureCalculator = new FigureCalculator();
    expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError();
    expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError();
    expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError();
  });

  it('should throw error when given with non-number', () => {
    const figureCalculator = new FigureCalculator();
    expect(() => figureCalculator.calculateRectanglePerimeter(null, '1')).toThrowError();
    expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrowError();
    expect(() => figureCalculator.calculateRectanglePerimeter([], {})).toThrowError();
  });

  it('should return correct value based on rectangle perimeter formula', () => {
    // Arrange
    const length = 20;
    const width = 10;
    const spyAdd = jest.spyOn(MathBasic, 'add');
    const spyMultiply = jest.spyOn(MathBasic, 'multiply');
    const figureCalculator = new FigureCalculator(MathBasic);

    // Action
    const result = figureCalculator.calculateRectanglePerimeter(length, width);

    // Assert
    expect(result).toEqual(60); // 2 x (length + width)
    expect(spyAdd).toHaveBeenCalledWith(length, width);
    expect(spyMultiply).toHaveBeenCalledWith(2, 30); // 2 * (length + width)
  });
});

describe('A calculateRectangleArea function', () => {
  it('should throw error when not given 2 parameters', () => {
    const figureCalculator = new FigureCalculator();
    expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
    expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError();
    expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrowError();
  });

  it('should throw error when given with non-number', () => {
    const figureCalculator = new FigureCalculator();
    expect(() => figureCalculator.calculateRectangleArea(null, '1')).toThrowError();
    expect(() => figureCalculator.calculateRectangleArea(true, {})).toThrowError();
    expect(() => figureCalculator.calculateRectangleArea([], {})).toThrowError();
  });

  it('should return correct value based on rectangle perimeter formula', () => {
    // Arrange
    const length = 20;
    const width = 10;
    const spyMultiply = jest.spyOn(MathBasic, 'multiply');
    const figureCalculator = new FigureCalculator(MathBasic);

    // Action
    const result = figureCalculator.calculateRectangleArea(length, width);

    // Assert
    expect(result).toEqual(200); // length * width

    expect(spyMultiply).toHaveBeenCalledWith(20, 10); // 2 * (length + width)
  });

  describe('A calculateTrianglePerimeter', () => {
    it('should throw error when not given 3 parameters', () => {
      const figureCalculator = new FigureCalculator();
      expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when given non-number', () => {
      const figureCalculator = new FigureCalculator();
      expect(() => figureCalculator.calculateTrianglePerimeter(true, {})).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter('1', [])).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(null, {})).toThrowError();
    });

    it('should return correct value based on triangle perimeter formula', () => {
      // Arrange
      const sideA = 10;
      const sideB = 20;
      const base = 30;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, base);

      // assert
      expect(result).toEqual(60);
      expect(spyAdd).toBeCalledWith(30, 30);
    });
  });

  describe('A calculateTriangleArea', () => {
    it('should throw error when not given 3 parameters', () => {
      const figureCalculator = new FigureCalculator();
      expect(() => figureCalculator.calculateTriangleArea()).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(1, 2, 3)).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when given non-number', () => {
      const figureCalculator = new FigureCalculator();
      expect(() => figureCalculator.calculateTriangleArea(true, {})).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea('1', [])).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(null, {})).toThrowError();
    });

    it('should return correct value based on triangle area formula', () => {
      // Arrange
      const height = 20;
      const base = 30;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateTriangleArea(base, height);

      // assert
      expect(result).toEqual(300);
      expect(spyMultiply).toBeCalledWith(base, height);
      expect(spyDivide).toBeCalledWith(600, 2);
    });
  });
});
