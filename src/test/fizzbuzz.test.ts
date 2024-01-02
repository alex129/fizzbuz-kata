import { fizzbuzz } from '../index';
describe('Fizz buzz', () => {
  test('When I fizzbuzz number 1, I get back a string representing it', async () => {
    const result = fizzbuzz(1);
    expect(result).toBe('1');
  });
});
