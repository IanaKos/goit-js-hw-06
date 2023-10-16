const textEl = document.querySelector("#text");
const rangeEl = document.querySelector("#font-size-control");
const changeFontSize = (e) => {
  textEl.style.fontSize = `${e.currentTarget.value}px`;
};
rangeEl.addEventListener("input", changeFontSize);
