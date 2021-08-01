/**
 *  write a function that accepts a number and return its total addition from 0 to n.
 * Time Complexity : O(n);
 * Space Complexity : O(n);
 *
 */
const addNNumbers = (n) => {
  return (n * (n + 1)) / 2;
};
console.log(addNNumbers(8));
console.log(addNNumbers(13));
console.log(addNNumbers(23));
console.log(addNNumbers(39));
console.log(addNNumbers(69));
