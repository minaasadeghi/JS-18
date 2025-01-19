/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/
function calculateSum(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num1 < 0 || num2 < 0) {
      reject("Negative values are not allowed");
    } else {
      setTimeout(() => {
        resolve(num1 + num2);
      }, 500);
    }
  });
}





calculateSum(5, 3)
  .then(result => console.log("Sum:", result))
  .catch(error => console.error("Error:", error));

calculateSum(-5, 3)
  .then(result => console.log("Sum:", result))
  .catch(error => console.error("Error:", error));
