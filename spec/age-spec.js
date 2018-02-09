var Calculator = require('./../js/age.js').calculatorModule;

describe('age', function() {
  it('test', function() {
    var simpleCalculator = new Calculator("normal skin");
    expect(simpleCalculator.add(3,4)).toEqual(7);
  });
});
