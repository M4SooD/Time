const checkHour = require('./checkHour');
describe('checking hours',()=>{
    test('check if time is less than 12 hours', () => {
        expect(checkHour(9)).toBe("nine");
      });
    
      test('check if time is more than 12 hours', () => {
        expect(checkHour(16)).toBe("four");
      });

      test('check if its midnight', () => {
        expect(checkHour(0)).toBe("midnight");
      });
});
