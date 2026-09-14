const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    console.log(tab.dataset.tab);

    contents.forEach(content => {
      if (content.dataset.tab === tab.dataset.tab) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
  });
});



