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

  test('When I fizzbuzz number 3, I get back "Fizz"', async () => {
    const result = fizzbuzz(3);
    expect(result).toBe('Fizz');
  });

  test('When I fizzbuzz number 6, I get back "Fizz"', async () => {
    const result = fizzbuzz(6);
    expect(result).toBe('Fizz');
  });

  test('When I fizzbuzz number 9, I get back "Fizz"', async () => {
    const result = fizzbuzz(9);
    expect(result).toBe('Fizz');
  });

  test('When I fizzbuzz number 5, I get back "Buzz"', async () => {
    const result = fizzbuzz(5);
    expect(result).toBe('Buzz');
  });

  test('When I fizzbuzz number 10, I get back "Buzz"', async () => {
    const result = fizzbuzz(10);
    expect(result).toBe('Buzz');
  });
});
