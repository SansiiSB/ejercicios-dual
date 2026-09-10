export default (() => {
  const modalButton = document.querySelector(".modal-button");
  const cancelButton = document.querySelector(".cancel-button");
  const loginButton = document.querySelector('.login-button')
  const loginForm = document.querySelector(".login-form");

  modalButton.addEventListener("click", () => {
    loginForm.classList.remove("login-form-hidden");
  });

  loginButton.addEventListener("click", (event) => {
    event.preventDefault()
    console.log(event.target)
  });

  cancelButton.addEventListener("click", () => {
    loginForm.classList.add("login-form-hidden");
  });
});

