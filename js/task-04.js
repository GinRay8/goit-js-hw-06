const counterValueElement = document.querySelector("#value");
let counterValue = 0;
const incrementButton = document.querySelector('[data-action="increment"]');
incrementButton.addEventListener("click", function () {
  counterValue++;
  counterValueElement.textContent = counterValue;
});
const decrementButton = document.querySelector('[data-action="decrement"]');
decrementButton.addEventListener("click", function () {
  counterValue--;
  counterValueElement.textContent = counterValue;
});