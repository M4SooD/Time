const checkMin = require('./checkMin');
describe('check minutes',()=>{
    test('check if its less than 30 minutes', () => {
        expect(checkMin("22")).toBe("twenty two minutes past");
      });
    
      test('check if its more than 30 minutes', () => {
        expect(checkMin("50")).toBe("ten minutes to");
      });

      test('check 0 minutes', () => {
        expect(checkMin("00")).toBe("o'clock");
      });
});
