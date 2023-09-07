class FigureCalculator {
  constructor(mathBasic) {
    this.mathBasic = mathBasic;

    this.checkArgs = (args, expectedArgsCount) => {
      if (args.length !== expectedArgsCount) {
        throw new Error(`fungsi hanya menerima ${expectedArgsCount} parameter`);
      }
      args.forEach((arg) => {
        if (typeof arg !== 'number') {
          throw new Error('fungsi hanya menerima parameter bertipe number');
        }
      });

      return args;
    };
  }

  calculateRectanglePerimeter(...args) {
    const [length, width] = this.checkArgs(args, 2);
    return this.mathBasic.multiply(2, this.mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    const [length, width] = this.checkArgs(args, 2);
    return this.mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    const [sideA, sideB, base] = this.checkArgs(args, 3);
    return this.mathBasic.add(base, this.mathBasic.add(sideA, sideB));
  }

  calculateTriangleArea(...args) {
    const [base, height] = this.checkArgs(args, 2);
    return this.mathBasic.divide(this.mathBasic.multiply(base, height), 2);
  }
}

module.exports = FigureCalculator;
