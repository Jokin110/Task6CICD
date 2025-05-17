// Use Chai's expect for assertions
const expect = chai.expect;
//const assert = chai.assert;


describe("From Integer to Roman by Jokin", function () 
{
  it("TC-1", function () {
    expect(intToRoman(1)).to.equal('I');
  });
  it("TC-2", function () {
    expect(intToRoman(3999)).to.equal('MMMCMXCIX');
  });
  it("TC-3", function () {
    expect(intToRoman(4)).to.equal('IV');
  });
  it("TC-4", function () {
    expect(intToRoman(49)).to.equal('XLIX');
  });
  it("TC-5", function () {
    expect(intToRoman(99)).to.equal('XCIX');
  });
  it("TC-6", function () {
    expect(intToRoman(499)).to.equal('CDXCIX');
  });
  it("TC-7", function () {
    expect(intToRoman(999)).to.equal('CMXCIX');
  });
  it("TC-8", function () {
    expect(intToRoman(0)).to.equal('Number must be between 1 and 3999');
  });
  it("TC-9", function () {
    expect(intToRoman(-1)).to.equal('Number must be between 1 and 3999');
  });
  it("TC-10", function () {
    expect(intToRoman(4000)).to.equal('Number must be between 1 and 3999');
  });
  it("TC-11", function () {
    expect(intToRoman(5000)).to.equal('Number must be between 1 and 3999');
  });
  it("TC-12", function () {
    expect(intToRoman(-3999)).to.equal('Number must be between 1 and 3999');
  });
  it("TC-13", function () {
    expect(intToRoman(-5000)).to.equal('Number must be between 1 and 3999');
  });
});

describe("From Roman to Integer by Jokin", function () 
{
  it("TC-1", function () {
    expect(romanToInt('I')).to.equal(1);
  });
  it("TC-2", function () {
    expect(romanToInt('MMMCMXCIX')).to.equal(3999);
  });
  it("TC-3", function () {
    expect(romanToInt('IV')).to.equal(4);
  });
  it("TC-4", function () {
    expect(romanToInt('XLIX')).to.equal(49);
  });
  it("TC-5", function () {
    expect(romanToInt('XCIX')).to.equal(99);
  });
  it("TC-6", function () {
    expect(romanToInt('CDXCIX')).to.equal(499);
  });
  it("TC-7", function () {
    expect(romanToInt('CMXCIX')).to.equal(999);
  });
  it("TC-8", function () {
    expect(romanToInt('IIII')).to.equal('Invalid Roman numeral');
  });
  it("TC-9", function () {
    expect(romanToInt('IL')).to.equal('Invalid Roman numeral');
  });
  it("TC-10", function () {
    expect(romanToInt('CDM')).to.equal('Invalid Roman numeral');
  });
  it("TC-11", function () {
    expect(romanToInt('LL')).to.equal('Invalid Roman numeral');
  });
  it("TC-12", function () {
    expect(romanToInt('EI83DJ')).to.equal('Invalid Roman numeral');
  });
  it("TC-13", function () {
    expect(romanToInt('MMMMM')).to.equal('Invalid Roman numeral');
  });
});

describe("From Integer to Roman by AI", function () 
{
  it("TC-1", function () {
    expect(intToRoman(1)).to.equal('I');
  });
  it("TC-2", function () {
    expect(intToRoman(3999)).to.equal('MMMCMXCIX');
  });
  it("TC-3", function () {
    expect(intToRoman(4)).to.equal('IV');
  });
  it("TC-4", function () {
    expect(intToRoman(9)).to.equal('IX');
  });
  it("TC-5", function () {
    expect(intToRoman(58)).to.equal('LVIII');
  });
  it("TC-6", function () {
    expect(intToRoman(1994)).to.equal('MCMXCIV');
  });
  it("TC-7", function () {
    expect(intToRoman(0)).to.equal('Number must be between 1 and 3999');
  });
  it("TC-8", function () {
    expect(intToRoman(4000)).to.equal('Number must be between 1 and 3999');
  });
  it("TC-9", function () {
    expect(intToRoman(3.5)).to.equal('Please enter a valid integer');
  });
  it("TC-10", function () {
    expect(intToRoman('abc')).to.equal('Please enter a valid integer');
  });
});

describe("From Roman to Integer by AI", function () 
{
  it("TC-1", function () {
    expect(romanToInt('I')).to.equal(1);
  });
  it("TC-2", function () {
    expect(romanToInt('MMMCMXCIX')).to.equal(3999);
  });
  it("TC-3", function () {
    expect(romanToInt('IV')).to.equal(4);
  });
  it("TC-4", function () {
    expect(romanToInt('IX')).to.equal(9);
  });
  it("TC-5", function () {
    expect(romanToInt('XLII')).to.equal(42);
  });
  it("TC-6", function () {
    expect(romanToInt('MCMXCIV')).to.equal(1994);
  });
  it("TC-7", function () {
    expect(romanToInt('ix')).to.equal(9);
  });
  it("TC-8", function () {
    expect(romanToInt('XIZ')).to.equal('Invalid Roman numeral');
  });
  it("TC-9", function () {
    expect(romanToInt('IIII')).to.equal('Invalid Roman numeral');
  });
  it("TC-10", function () {
    expect(romanToInt('')).to.equal('Invalid Roman numeral');
  });
  it("TC-11", function () {
    expect(romanToInt('IL')).to.equal('Invalid Roman numeral');
  });
  it("TC-12", function () {
    expect(romanToInt('XM')).to.equal('Invalid Roman numeral');
  });
  it("TC-13", function () {
    expect(romanToInt(' MX ')).to.equal('Invalid Roman numeral');
  });
});
