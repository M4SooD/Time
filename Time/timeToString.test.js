const convertTimeToString = require('./timeToString');

describe('check if time is converting to string',()=>{
  test("o'clock test", () => {
      expect(convertTimeToString("14:00")).toBe("two o'clock");
    });
    test('midnight test', () => {
      expect(convertTimeToString("00:00")).toBe("midnight");
    });
  test('minutes past test', () => {
      expect(convertTimeToString("15:29")).toBe("twenty nine minutes past three");
    });
  test('half past test', () => {
      expect(convertTimeToString("15:30")).toBe("half past three");
    });
  test('minutes to test', () => {
      expect(convertTimeToString("15:31")).toBe("twenty nine minutes to four");
    });
    test('quarter to', () => {
      expect(convertTimeToString("15:45")).toBe("quarter to four");
    });
    test('quarter past', () => {
      expect(convertTimeToString("15:15")).toBe("quarter past three");
    });
});