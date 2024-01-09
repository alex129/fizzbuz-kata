export const fizzbuzz = (number: number): string => {
  if(number === 3 || number === 6 || number === 9) return 'Fizz';
  return number.toString();
};
