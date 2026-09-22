export default (() => {
  const modalButton = document.querySelector(".modal-button");
  const cancelButton = document.querySelector(".cancel-button");
  const loginButton = document.querySelector('.login-button');
  let loginForm = document.querySelector(".login-form");

  modalButton.addEventListener("click", () => {
    loginForm.classList.remove("login-form-hidden");
  });

  loginButton.addEventListener("click", (event) => {
    event.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    if (!username || !password) {
      alert("Completa usuario y contraseña");
      return;
    }

    console.log("Login con:", username);
    loginForm.classList.add("login-form-hidden");
  });

  cancelButton.addEventListener("click", () => {
    loginForm.classList.add("login-form-hidden");
  });
});