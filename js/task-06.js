document.getElementById("validation-input").onblur = function () {
  if (Number(this.getAttribute("data-length")) === this.value.length) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
  console.log(yhis.value.length);
};
