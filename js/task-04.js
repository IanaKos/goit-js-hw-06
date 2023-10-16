const button = {
  btnDecrement: document.querySelector("[data-action='decrement']"),
  btnIncrement: document.querySelector("[data-action='increment']"),
  span: document.querySelector("#value"),
};

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  button.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  button.span.textContent = counterValue;
};

button.btnIncrement.addEventListener("click", decrement);
button.btnDecrement.addEventListener("click", increment);
