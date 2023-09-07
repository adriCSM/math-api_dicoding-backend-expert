const createServer = require('./createServer');
const MathBasic = require('./MathBasic');
const FigureCalculator = require('./FigureCalculator');

describe('A HTTP server', () => {
  describe('when GET /add', () => {
    it('Should respon with status code of 200 and the payload is addition result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const respons = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      });

      // Assert
      const respoonseJson = JSON.parse(respons.payload);

      expect(respons.statusCode).toEqual(200);
      expect(respoonseJson.value).toEqual(30);
      expect(spyAdd).toBeCalledWith(a, b);
    });
  });

  describe('when GET /subtrac', () => {
    it('Should respon with status code of 200 and the payload is addition result of a and b correctly', async () => {
      // Arrange
      const a = 12;
      const b = 8;
      const spySubtract = jest.spyOn(MathBasic, 'subtract');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const respons = await server.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`,
      });

      // Assert
      const respoonseJson = JSON.parse(respons.payload);
      expect(respons.statusCode).toEqual(200);
      expect(respoonseJson.value).toEqual(4);
      expect(spySubtract).toBeCalledWith(a, b);
    });
  });

  describe('when GET /multiply', () => {
    it('Should respon with status code of 200 and the payload is addition result of a and b correctly', async () => {
      // Arrange
      const a = 3;
      const b = 3;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const respons = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`,
      });

      // Assert
      const respoonseJson = JSON.parse(respons.payload);
      expect(respons.statusCode).toEqual(200);
      expect(respoonseJson.value).toEqual(9);
      expect(spyMultiply).toBeCalledWith(a, b);
    });
  });

  describe('when GET /divide', () => {
    it('Should respon with status code of 200 and the payload is addition result of a and b correctly', async () => {
      // Arrange
      const a = 3;
      const b = 3;
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const respons = await server.inject({
        method: 'GET',
        url: `/divide/${a}/${b}`,
      });

      // Assert
      const respoonseJson = JSON.parse(respons.payload);
      expect(respons.statusCode).toEqual(200);
      expect(respoonseJson.value).toEqual(1);
      expect(spyDivide).toBeCalledWith(a, b);
    });
  });

  describe('when GET /rectangle/perimeter', () => {
    it('Should respon with status code of 200 and the payload is addition result of a and b correctly', async () => {
      // Arrange
      const length = 3;
      const width = 6;
      const figureCalculator = new FigureCalculator(MathBasic);

      const spyCalculateRectanglePerimeter = jest.spyOn(
        figureCalculator,
        'calculateRectanglePerimeter',
      );
      const server = createServer({ figureCalculator });

      // Action
      const respons = await server.inject({
        method: 'GET',
        url: `/rectangle/perimeter/${length}/${width}`,
      });

      // Assert
      const respoonseJson = JSON.parse(respons.payload);
      expect(respons.statusCode).toEqual(200);
      expect(respoonseJson.value).toEqual(18); // 2* (width+length)
      expect(spyCalculateRectanglePerimeter).toBeCalledWith(length, width);
    });
  });

  describe('when GET /rectangle/area', () => {
    it('Should respon with status code of 200 and the payload is addition result of a and b correctly', async () => {
      // Arrange
      const length = 3;
      const width = 6;
      const figureCalculator = new FigureCalculator(MathBasic);

      const spyCalculateRectangleArea = jest.spyOn(figureCalculator, 'calculateRectangleArea');
      const server = createServer({ figureCalculator });

      // Action
      const respons = await server.inject({
        method: 'GET',
        url: `/rectangle/area/${length}/${width}`,
      });

      // Assert
      const respoonseJson = JSON.parse(respons.payload);
      expect(respons.statusCode).toEqual(200);
      expect(respoonseJson.value).toEqual(18); // width*length
      expect(spyCalculateRectangleArea).toBeCalledWith(length, width);
    });
  });

  describe('when GET  /triangle/perimeter', () => {
    it('Should respon with status code of 200 and the payload is addition result of a and b correctly', async () => {
      // Arrange
      const sideA = 3;
      const sideB = 6;
      const base = 2;
      const figureCalculator = new FigureCalculator(MathBasic);

      const spyCalculateTrianglePerimeter = jest.spyOn(
        figureCalculator,
        'calculateTrianglePerimeter',
      );
      const server = createServer({ figureCalculator });

      // Action
      const respons = await server.inject({
        method: 'GET',
        url: `/triangle/perimeter/${sideA}/${sideB}/${base}`,
      });

      // Assert
      const respoonseJson = JSON.parse(respons.payload);
      expect(respons.statusCode).toEqual(200);
      expect(respoonseJson.value).toEqual(11); // sideA+sideB+base
      expect(spyCalculateTrianglePerimeter).toBeCalledWith(sideA, sideB, base);
    });
  });

  describe('when GET  /triangle/area', () => {
    it('Should respon with status code of 200 and the payload is addition result of a and b correctly', async () => {
      // Arrange
      const height = 6;
      const base = 2;
      const figureCalculator = new FigureCalculator(MathBasic);

      const spyCalculateTriangleArea = jest.spyOn(figureCalculator, 'calculateTriangleArea');
      const server = createServer({ figureCalculator });

      // Action
      const respons = await server.inject({
        method: 'GET',
        url: `/triangle/area/${base}/${height}`,
      });

      // Assert
      const respoonseJson = JSON.parse(respons.payload);
      expect(respons.statusCode).toEqual(200);
      expect(respoonseJson.value).toEqual(6); // (base * height)/2
      expect(spyCalculateTriangleArea).toBeCalledWith(base, height);
    });
  });
});
