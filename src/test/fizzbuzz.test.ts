import { fizzbuzz } from '../index';
describe('Fizz buzz', () => {
  test('When I fizzbuzz number 1, I get back a string representing it', async () => {
    const result = fizzbuzz(1);
    expect(result).toBe('1');
  });

  test('When I fizzbuzz number 2, I get back a string representing it', async () => {
    const result = fizzbuzz(2);
    expect(result).toBe('2');
  });

  test('When I fizzbuzz number 4, I get back a string representing it', async () => {
    const result = fizzbuzz(4);
    expect(result).toBe('4');
  });

    test('When I fizzbuzz number 3, I get back "fizz"', async () => {
        const result = fizzbuzz(3);
        expect(result).toBe('Fizz');
    });
});
