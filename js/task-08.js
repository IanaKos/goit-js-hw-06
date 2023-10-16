const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert(
      "All of the information on these fields must be filled in completely!"
    );
  }
  const formElements = { mail: email.value, password: password.value };
  console.log(formElements);
  event.currentTarget.reset;
}
