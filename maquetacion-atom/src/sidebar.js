export default (() => {
  const buttonSidebarClose = document.querySelector("button-component");
  const sidebar = document.querySelector(".sidebar");

  buttonSidebarClose.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
  });
})();
